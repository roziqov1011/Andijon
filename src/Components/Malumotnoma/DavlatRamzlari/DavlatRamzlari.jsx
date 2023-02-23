import React, { useContext, useEffect, useState } from 'react'

// Import Contexts
import { ContextLine } from "../../../Context/LineText";
import { Context } from '../../../Context/LangContext';
import content from '../../../Localization/content';

// Import Pack
import axios from 'axios';

// Import Components
import SocialMedia from '../../SocialMedia/SocialMedia'
import SiteLoader from '../../SiteLoader/SiteLoader';
import './DavlatRamzlari.scss';

function DavlatRamzlari() {

  // Api
  const url = process.env.REACT_APP_URL

  // Contexts
  const { lang } = useContext(Context);
  const { setText } = useContext(ContextLine)
  setText(content[lang]?.Davlat_Ramzlari)

  const [symbolsData, setSymbolsData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios.get(`${url}symbols`).then((res) => {
      setSymbolsData(res.data?.data)
    }).catch(function (error) {
      alert('Malumot Olishda Xatolik Yuzberdi')
    }).finally(() => {
      setLoader(false);
      document.body.style.overflow = 'auto';
    })
  }, [])
  
  return (
    <div className='DavlatRamzlari'>
      {
        loader ? (
          <SiteLoader />
        ) : (
          <p dangerouslySetInnerHTML={{ __html: symbolsData?.[`body_${lang}`] }}></p>
        )
      }
      <SocialMedia view={'12'} created_at={`${symbolsData[symbolsData.length -1]?.updated_at?.slice(0, 10)} ${symbolsData[symbolsData.length -1]?.updated_at?.slice(11, 16)}`} />
    </div>
  )
}

export default DavlatRamzlari