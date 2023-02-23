import { useContext, useEffect, useState } from 'react'
import './SYMajlislari.scss'

// Import Contexts
import { ContextLine } from "../../../Context/LineText";
import { Context } from '../../../Context/LangContext';
import content from '../../../Localization/content';

// Import Pack
import axios from 'axios';
import SiteLoader from '../../SiteLoader/SiteLoader';

function SYMajlislari() {

  // Api
  const url = process.env.REACT_APP_URL

  // Contexts
  const { lang } = useContext(Context);
  const { setText } = useContext(ContextLine)
  setText(content[lang]?.Senat_yangi_majlislari)

  const [meetingsData, setMeetingsData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios.get(`${url}meetings`).then((res) => {
      setMeetingsData(res.data?.data)
    }).catch(function (error) {
      alert('Malumot Olishda Xatolik Yuberdi :pensive:')
    }).finally(() => {
      setLoader(false);
      document.body.style.overflow = 'auto';
    })
  }, [])

  return (
    <div className='sy-majlislarii'>
      {
        loader ? (
          <SiteLoader />
        ) : (
          <div className='sy-majlislarii__text'>
            <p dangerouslySetInnerHTML={{ __html: meetingsData?.[`body_${lang}`] }}></p>
          </div>
        )
      }
    </div>
  )
}

export default SYMajlislari