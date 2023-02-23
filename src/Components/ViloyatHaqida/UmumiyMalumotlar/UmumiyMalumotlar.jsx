// Import React
import { useContext, useEffect, useState } from 'react';

// IMport Pack
import axios from 'axios';

// Import Contexts
import { ContextLine } from "../../../Context/LineText";
import { Context } from '../../../Context/LangContext';
import content from '../../../Localization/content';

// IMport Components
import './UmumiyMalumotlar.scss';
import SiteLoader from '../../SiteLoader/SiteLoader';

function UmumiyMalumotlar() {

  // APi
  let url = process.env.REACT_APP_URL;

  // Api State
  const [generalInfoData, setGeneralInfoData] = useState([])

  // Loader
  const [loader, setLoader] = useState(true);

  // Contexts
  const { lang } = useContext(Context);
  const { setText } = useContext(ContextLine)
  setText(content[lang]?.UmumiyMalumotlar)

  useEffect(() => {
    axios.get(`${url}investments`).then((res) => {
      setGeneralInfoData(res.data?.data)
    }).catch((error) => {
      console.log('Xatolik Yuzberdi');
    }).finally(() => {
      setLoader(false)
      document.body.style.overflow = 'auto';
    })
  }, [])


  return (
    <section className='general-info'>
      {
        loader ? (
          <SiteLoader />
        ) : (
          <p dangerouslySetInnerHTML={{ __html: generalInfoData?.[`body_${lang}`]}}></p>
        )
      }
    </section>
  )
}

export default UmumiyMalumotlar