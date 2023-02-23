import { useContext, useEffect, useState } from 'react';

// Import Context
import { ContextLine } from "../../../Context/LineText";
import { Context } from '../../../Context/LangContext';
import content from '../../../Localization/content';

// Import Pack
import axios from 'axios';

// Import Components
import SocialMedia from '../../SocialMedia/SocialMedia';
import SiteLoader from '../../SiteLoader/SiteLoader';
import './RepsublikViloyatlar.scss'

function RepsublikViloyatlar() {

  // Api
  const url = process.env.REACT_APP_URL

  // Contexts
  const { lang } = useContext(Context);
  const { setText } = useContext(ContextLine)
  setText(content[lang]?.Repsublik_Viloyatlar)

  const [regionWebsitesData, setRegionWebsitesData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios.get(`${url}region-websites`).then((res) => {
      setRegionWebsitesData(res.data?.data)
    }).catch(function (error) {
      alert('Malumot Olishda Xatolik Yuzberdi')
    }).finally(() => {
      setLoader(false);
      document.body.style.overflow = 'auto';
    })
  }, [])

  return (
    <div className='RepsublikViloyatlar'>
      <h2>{content[lang]?.Ozbekiston_respublikasining_hududiy}</h2>
      <ul className='saytlari__list'>
        {
          loader ? (
            <SiteLoader />
          ) : (
            regionWebsitesData.map((inner) => {
              return (
                <li className='saytlari__item' key={inner.id}>
                  <a href={inner?.link} target='_blenk'>
                    <p>Qoraqalpog’iston Respublikasi</p>
                    <span>{inner?.link}</span>
                  </a>
                </li>
              )
            })
          )
        }
      </ul>

      <SocialMedia view={'12'} created_at={`${regionWebsitesData[regionWebsitesData.length -1]?.updated_at?.slice(0, 10)} ${regionWebsitesData[regionWebsitesData.length -1]?.updated_at?.slice(11, 16)}`} />
    </div>
  )
}

export default RepsublikViloyatlar

