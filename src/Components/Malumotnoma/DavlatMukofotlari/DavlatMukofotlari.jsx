import { useContext, useEffect, useState } from 'react';

// Import Context
import { ContextLine } from "../../../Context/LineText";
import { Context } from '../../../Context/LangContext';
import content from '../../../Localization/content';

// Import Pack
import axios from 'axios';

// IMport components
import './DavlatMukofotlari.scss'
import SocialMedia from '../../SocialMedia/SocialMedia'
import SiteLoader from '../../SiteLoader/SiteLoader';


function DavlatMukofotlari() {

  // Api
  const url = process.env.REACT_APP_URL
  const httpUrl = process.env.REACT_APP_HTTPS;

  // Contexts
  const { lang } = useContext(Context);
  const { setText } = useContext(ContextLine)
  setText(content[lang]?.Davlat_mukofotlari)

  const [awardsData, setAwardsData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios.get(`${url}awards`).then((res) => {
      setAwardsData(res.data?.data)
    }).catch(function (error) {
      alert('Malumot Olishda Xatolik Yuzberdi')
    }).finally(() => {
      setLoader(false);
      document.body.style.overflow = 'auto';
    })
  }, [])

  return (
    <div className='davalar__mukofotlar'>

      <h3>
        {awardsData[0]?.[`title_${lang}`]?.slice(0,120)}
      </h3>

      <ul className='dm__list'>

        {
          loader ? (
            <SiteLoader />
          ) : (
            awardsData?.map((item) => {
              return (
                <li key={item?.id}>
                  <img src={`${httpUrl}${item?.image}`} alt="img" />
                  <div>
                    <h4>
                      {item?.[`title_${lang}`]?.slice(0,120)}
                    </h4>
                    <p dangerouslySetInnerHTML={{ __html: item?.[`body_${lang}`] }}></p>
                  </div>
                </li>
              )
            })
          )
        }

      </ul>
      <SocialMedia view={'100'} created_at={`${awardsData?.[awardsData.length -1]?.updated_at.slice(0, 10)} ${awardsData?.[awardsData.length -1]?.updated_at.slice(11, 16)}`} />
    </div>
  )
}

export default DavlatMukofotlari
