import { useContext, useEffect, useState } from 'react'

import { ContextLine } from "../../../Context/LineText";
import { Context } from '../../../Context/LangContext';
import content from '../../../Localization/content';

// Import Pack
import axios from 'axios';

// Import Components
import './AVHTCELBMRoyxati.scss';
import SiteLoader from '../../SiteLoader/SiteLoader';

function AVHTCELBMRoyxati() {

  // Api
  const url = process.env.REACT_APP_URL

  // Contexts
  const { lang } = useContext(Context);
  const { setText } = useContext(ContextLine)
  setText(content[lang]?.Andijon_viloyati_malumotlar_royxati)

  const [informationsData, setInformationsData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios.get(`${url}informations`).then((res) => {
      setInformationsData(res.data?.data)
    }).catch(function (error) {
      alert('Malumot Olishda Xatolik Yuberdi :pensive:')
    }).finally(() => {
      setLoader(false);
      document.body.style.overflow = 'auto';
    })
  }, [])


  return (
    <div>
      {
        loader ? (
          <SiteLoader />
        ) : (
          <p dangerouslySetInnerHTML={{ __html: informationsData?.[`body_${lang}`] }}></p>
        )
      }
    </div>
  )
}

export default AVHTCELBMRoyxati