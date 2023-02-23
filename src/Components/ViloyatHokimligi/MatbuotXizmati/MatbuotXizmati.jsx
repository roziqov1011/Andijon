// Import React 
import { useContext, useEffect, useState } from 'react';

// Import Pack
import axios from 'axios';

// IMport Components
import './MatbuotXizmati.scss';
import SiteLoader from '../../SiteLoader/SiteLoader';

// Import Contexts
import { ContextLine } from "../../../Context/LineText";
import { Context } from '../../../Context/LangContext';
import content from '../../../Localization/content';

function MatbuotXizmati() {

  // APi
  let url = process.env.REACT_APP_URL;
  let httpUrl = process.env.REACT_APP_HTTPS;

  // Api State
  const [data, setData] = useState([])

  // Loader
  const [loader, setLoader] = useState(true);

  // Contexts
  const { lang, setLang } = useContext(Context);
  const { setText } = useContext(ContextLine)
  setText(content[lang]?.VMatbuotXizmati)

  useEffect(() => {
    axios.get(`${url}press-page`).then((res) => {
      setData(res.data?.data)
    }).catch((error) => {
      console.log(`Xatolik ${error}`)
    }).finally(() => {
      setLoader(false)
      document.body.style.overflow = 'auto';
    })
  }, [])

  return (
    <section className='press-page'>
      {
        loader ? (
          <SiteLoader />
        ) : (
          <p dangerouslySetInnerHTML={{ __html: data?.[`body_${lang}`]}}></p>
        )
      }
    </section>
  )
}

export default MatbuotXizmati