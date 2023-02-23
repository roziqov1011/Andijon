// Import React
import { useEffect, useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

// Import Pack
import axios from 'axios';

// Import Contexts
import { ContextLine } from "../../../../Context/LineText";
import { Context } from '../../../../Context/LangContext';
import content from '../../../../Localization/content';

// Import Components
import './SenatorInner.scss';
import SiteLoader from '../../../SiteLoader/SiteLoader';

function SenatorInner() {

  // APi
  let url = process.env.REACT_APP_URL;
  let httpUrl = process.env.REACT_APP_HTTPS;

  // Api State
  const [senatorsItemData, setSenatorsItemData] = useState([])
  const { state } = useLocation()

  // Loader
  const [loader, setLoader] = useState(true);

  // Contexts
  const { lang } = useContext(Context);
  const { setText } = useContext(ContextLine)
  setText(content[lang]?.Senatorlar)

  useEffect(() => {
    axios.get(`${url}senators/${state}`).then((res) => {
      setSenatorsItemData(res?.data?.data)
    }).catch((error) => {
      console.log('Xatolik Yuzberdi');
    }).finally(() => {
      setLoader(false)
      document.body.style.overflow = 'auto';
    })
  }, [])

  return (
    <div className='SenatorInner'>
      {
        loader ? (
          <SiteLoader />
        ) : (
          <>
            <div className="SenatorInner__main">
              <img src={`${httpUrl}${senatorsItemData?.image}`} alt="img" />
              <div>
                <h3>
                  {senatorsItemData?.[`name_${lang}`]?.slice(0,120)}
                </h3>
                <b>
                  {senatorsItemData?.[`description_${lang}`]?.slice(0,120)}
                </b>
                <ul>
                  <li>
                    <span>Telefon</span>
                    <a href="let: +998911234567">{senatorsItemData?.phone}</a>
                  </li>
                  <li>
                    <span>Faks apparati</span>
                    <a href="tel: +998911234567">{senatorsItemData?.fax}</a>
                  </li>
                  <li>
                    <span>Elektron Pochta</span>
                    <a href="viloyathokim@gmail.com">{senatorsItemData?.email}</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="SenatorInner__biografiya">
              <p dangerouslySetInnerHTML={{ __html: senatorsItemData?.[`body_${lang}`] }}></p>
            </div>
          </>
        )
      }
    </div>
  )
}

export default SenatorInner