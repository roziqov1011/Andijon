import React, { useContext, useEffect, useState } from 'react'

// Import Context
import { ContextLine } from "../../../Context/LineText";
import { Context } from '../../../Context/LangContext';
import content from '../../../Localization/content';

// Import Pack
import axios from 'axios';

// Import Components
import SocialMedia from '../../SocialMedia/SocialMedia';
import SiteLoader from '../../SiteLoader/SiteLoader';
import './Konstitutsiya.scss';

function Konstitutsiya() {

  // Api
  const url = process.env.REACT_APP_URL

  // Contexts
  const { lang } = useContext(Context);
  const { setText } = useContext(ContextLine)
  setText(content[lang]?.Konstitutsiya)

  const [constitutionData, setConstitutionData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios.get(`${url}constitution`).then((res) => {
      setConstitutionData(res.data?.data)
    }).catch(function (error) {
      alert('Malumot Olishda Xatolik Yuzberdi')
    }).finally(() => {
      setLoader(false);
      document.body.style.overflow = 'auto';
    })
  }, [])

  return (
    <div className='Konstitutsiya'>
      {
        loader ? (
          <SiteLoader />
        ) : (
          <p dangerouslySetInnerHTML={{ __html: constitutionData?.[`body_${lang}`] }}></p>
        )
      }
      <SocialMedia view={'12'} created_at={`${constitutionData?.updated_at?.slice(0, 10)} ${constitutionData?.updated_at?.slice(11, 16)}`} />
    </div>
  )
}

export default Konstitutsiya