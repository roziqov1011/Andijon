// Import React
import { useEffect, useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

// IMport Pack
import axios from 'axios';

// Import Contexts
import { ContextLine } from "../../../../Context/LineText";
import { Context } from '../../../../Context/LangContext';
import content from '../../../../Localization/content';

// Import Components
import './ElektronHukumatItem.scss';
import SiteLoader from '../../../SiteLoader/SiteLoader';

function ElektronHukumatItem() {

  // APi
  let url = process.env.REACT_APP_URL;

  // Api State
  const [governmentsData, setGovernmentsData] = useState([])
  const { state } = useLocation()

  // Contexts
  const { lang, setLang } = useContext(Context);
  const { setText } = useContext(ContextLine)
  setText(content[lang]?.Investitsiyalar)

  useEffect(() => {
    axios.get(`${url}governments/${state}`).then((res) => {
      setGovernmentsData(res.data?.data)
    }).catch((error) => {
      console.log('Xatolik Yuzberdi');
    }).finally(() => {
      document.body.style.overflow = 'auto';
    })
  }, [])

  return (
    <section className='governments-item'>
      {
        state == undefined || state == [] ? (
          <SiteLoader />
        ) : (
          <>
            <h4 className='governments-item__title'>
              {governmentsData?.[`title_${lang}`]?.slice(0, 120)}
            </h4>
            <p dangerouslySetInnerHTML={{ __html: governmentsData?.[`body_${lang}`] }}></p>
          </>
        )
      }
    </section>
  )
}

export default ElektronHukumatItem
