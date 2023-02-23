// IMport React
import { useState, useEffect, useContext } from 'react';

// Import Pack
import axios from 'axios';

// Import Contexts
import { Context } from '../../Context/LangContext';
import content from '../../Localization/content';

// Import Components
import MapSvg from './map';
import { Container, Description, Description1, Image, Infos, Inline, LineWrap, MapDiv, Name, Title } from './style';
import { Xarita } from '../../Data/map';
import SiteLoader from "../SiteLoader/SiteLoader.jsx"

const XaritaMain = () => {
  const [city_id, setCity_id] = useState(1);
  const ClickMap = (value) => {
    setCity_id(value)
  }

  const Filtered = Xarita.filter((item) => {
    return item.id === city_id
  })

  // Api
  const url = process.env.REACT_APP_URL

  const [districtsData, setDistrictsData] = useState([]);
  const [loader, setLoader] = useState(true);

  // Contexts
  const { lang, setLang } = useContext(Context);

  useEffect(() => {
    axios.get(`${url}districts/${city_id}`).then((res) => {
      setDistrictsData(res.data?.data)
    }).catch(function (error) {
      alert('Malumot Olishda Xatolik Yuberdi :pensive:')
    }).finally(() => {
      setLoader(false);
      document.body.style.overflow = 'auto';
    })
  }, [])

  return (
    <Container>
      {
        loader ? (
          <SiteLoader />
        ) : (
          Filtered?.map((item, index) => {
            return (
              <MapDiv key={index}>
                <Title>{content[lang]?.Andijon_viloyati}</Title>
                <Name>
                  {districtsData?.[`title_${lang}`]?.slice(0, 120)}
                </Name>
                <Description>
                  {districtsData?.[`description_${lang}`]?.slice(0, 120)}
                </Description>
                <LineWrap>
                  <Inline>
                    <Description>{content[lang].Dengiz_sathidan}</Description>
                    <Infos>{districtsData?.height}</Infos>
                  </Inline>
                  <Inline>
                    <Description>{content[lang].Aholisi}</Description>
                    <Infos>{districtsData?.population} ming kishi</Infos>
                  </Inline>
                </LineWrap>
                <LineWrap>
                  <Inline>
                    <Description>{content[lang]?.Maydoni}</Description>
                    <Infos>{districtsData?.area} km</Infos>
                  </Inline>
                  <Inline>
                    <Description>{content[lang]?.Iyulning_ortacha_harorati}</Description>
                    <Infos>{districtsData?.weather}</Infos>
                  </Inline>
                </LineWrap>
                <Description>
                  <p dangerouslySetInnerHTML={{
                    __html: districtsData?.[`body_${lang}`]
                  }}>
                  </p>
                </Description>
                <Description1>{content[lang]?.Shaxsiy_hisob}</Description1>
                <Description1>{content[lang]?.foydalaning}</Description1>
              </MapDiv>
            )
          })
        )
      }
      <div>
        <MapSvg ClickMap={ClickMap} value={city_id} />
      </div>
    </Container>
  )
}

export default XaritaMain