// Import React
import { useContext, useEffect, useState } from 'react'

import axios from 'axios';

// Import Context
import { ContextLine } from "../../../Context/LineText";
import { Context } from '../../../Context/LangContext';
import content from '../../../Localization/content';

// Import Components
import './IshKunTartibi.scss'
import SocialMedia from '../../SocialMedia/SocialMedia';
import SiteLoader from "../../SiteLoader/SiteLoader"

function IshKunTartibi() {

  // APi
  let url = process.env.REACT_APP_URL;

  // Api State
  const [data, setData] = useState([])

  // Loader
  const [loader, setLoader] = useState(true);

  // Contexts
  const { lang, setLang } = useContext(Context);
  const { setText } = useContext(ContextLine)
  setText(content[lang]?.VIshKunTartibi)

  useEffect(() => {
    axios.get(`${url}schedules`).then((res) => {
      setData(res.data?.data)
    }).catch((error) => {
      console.log(`Xatolik ${error}`)
    }).finally(() => {
      setLoader(false)
      document.body.style.overflow = 'auto';
    })
  }, [])

  return (
    <section className='work-schedule'>
      <div className="work-schedule-box">

        <div className="work-schedule-left">
          <ul className="work-schedule-left__list">
            {
              loader ? (
                <SiteLoader />
              ) : (
                data.map((dat, index) => {
                  return (
                    <li className='work-schedule-left__item' key={index}>
                      <div className='work-schedule-left__wek'>{dat?.[`day_${lang}`]}</div>
                      <div className='work-schedule-left__time'>{dat.time}</div>
                      <div className='work-schedule-left__ob'>{dat?.[`description_${lang}`]}</div>
                    </li>
                  )
                })
              )
            }
          </ul>
        </div>

      </div>
      <SocialMedia created_at={`${data?.[data.length - 1]?.updated_at?.slice(0, 10)} ${data?.[data.length - 1]?.updated_at?.slice(11, 16)}`} />
    </section>
  )
}

export default IshKunTartibi