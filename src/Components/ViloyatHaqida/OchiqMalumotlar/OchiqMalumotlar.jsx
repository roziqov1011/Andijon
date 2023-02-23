// Import React
import { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// IMport Pack
import axios from 'axios';

// Import Contexts
import { ContextLine } from "../../../Context/LineText";
import { Context } from '../../../Context/LangContext';
import content from '../../../Localization/content';

// Import Components
import './OchiqMalumotlar.scss'
import SiteLoader from '../../SiteLoader/SiteLoader';
import SocialMedia from "../../SocialMedia/SocialMedia";


function OchiqMalumotlar() {

  // APi
  let url = process.env.REACT_APP_URL;

  // Api State
  const [openInfosData, setOpenInfosData] = useState([])

  // Loader
  const [loader, setLoader] = useState(true);
  
  // Contexts
  const { lang, setLang } = useContext(Context);
  const { setText } = useContext(ContextLine)
  setText(content[lang]?.OchiqMalumotlar)

  useEffect(() => {
    axios.get(`${url}open-infos`).then((res) => {
      setOpenInfosData(res.data?.data)
    }).catch((error) => {
      console.log('Xatolik Yuzberdi');
    }).finally(() => {
      setLoader(false)
      document.body.style.overflow = 'auto';
    })
  }, [])

  // Shaire Api Data
  const navigate = useNavigate();
  const toDetalsData = (item) => {
    navigate(`/v-about/open-infos-inner/${item.slug}`, { state: item.slug })
  }


  return (
    <section className='open-infos'>

      <ul className='open-infos__list'>
        {
          loader ? (
            <SiteLoader />
          ) : (
            openInfosData?.map((item) => {
              return (
                <li className='open-infos__item' key={item?.id} onClick={() => toDetalsData(item)}>
                  <p className='open-infos__text'>
                    {item?.[`title_${lang}`]}
                  </p>
                </li>
              )
            })
          )
        }
      </ul>

      <SocialMedia created_at={`${openInfosData?.[openInfosData?.length -1]?.updated_at?.slice(0, 10)} ${openInfosData?.[openInfosData?.length -1]?.updated_at?.slice(11, 16)}`} />

    </section>
  )
}

export default OchiqMalumotlar 