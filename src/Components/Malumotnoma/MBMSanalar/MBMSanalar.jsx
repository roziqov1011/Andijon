import { useContext, useEffect, useState } from 'react';

// Import Context
import { ContextLine } from "../../../Context/LineText";
import { Context } from '../../../Context/LangContext';
import content from '../../../Localization/content';

// Import Pack
import axios from 'axios';

// IMport Components
import './MBMSanalar.scss';
import SiteLoader from '../../SiteLoader/SiteLoader';

function MBMSanalar() {
  // Api
  const url = process.env.REACT_APP_URL

  // Contexts
  const { lang } = useContext(Context);
  const { setText } = useContext(ContextLine)
  setText(content[lang]?.Milliy_bayram_muhim_sanalar)

  const [holidaysData, setHolidaysData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios.get(`${url}holidays`).then((res) => {
      setHolidaysData(res.data?.data)
    }).catch(function (error) {
      console.log('Xatolik');
    }).finally(() => {
      setLoader(false);
      document.body.style.overflow = 'auto';
    })
  }, [])

  return (
    <div className='MBMSanalar'>
      {
        loader ? (
          <SiteLoader />
        ) : (
          <p dangerouslySetInnerHTML={{ __html: holidaysData?.[`body_${lang}`]}}></p>
        )
      }
    </div>
  )
}

export default MBMSanalar

