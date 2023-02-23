// Import React
import { useContext, useEffect, useState } from 'react'

// Import Contexts
import { ContextLine } from "../../../Context/LineText";
import { Context } from '../../../Context/LangContext';
import content from '../../../Localization/content';

// Import Pack
import axios from 'axios';

// Import Components
import './AQTTogrisida.scss'
import SocialMedia from '../../SocialMedia/SocialMedia'
import SiteLoader from '../../SiteLoader/SiteLoader';

function AQTTogrisida() {

  // Api
  const url = process.env.REACT_APP_URL

  // Contexts
  const { lang } = useContext(Context);
  const { setText } = useContext(ContextLine)
  setText(content[lang]?.Akkreditatsiya_qilish_tartibi_togrisida)

  const [accreditationsData, setAccreditationsData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios.get(`${url}accreditations`).then((res) => {
      setAccreditationsData(res.data?.data)
    }).catch(function (error) {
      alert('Malumot Olishda Xatolik Yuzberdi')
    }).finally(() => {
      setLoader(false);
      document.body.style.overflow = 'auto';
    })
  }, [])

  return (
    <div className='AQTTogrisida'>
      {
        loader ? (
          <SiteLoader />
        ) : (
          <p dangerouslySetInnerHTML={{ __html: accreditationsData?.[`body_${lang}`] }}></p>
        )
      }
      <SocialMedia view={'50'} created_at={`${accreditationsData?.updated_at?.slice(0, 10)} ${accreditationsData?.updated_at?.slice(11, 16)}`} />
    </div>
  )
}

export default AQTTogrisida