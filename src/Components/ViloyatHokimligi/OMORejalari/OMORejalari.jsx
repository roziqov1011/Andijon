// Import React
import { useEffect, useState, useContext } from 'react';

// IMport Pack
import axios from 'axios';

// Import Contexts
import { ContextLine } from "../../../Context/LineText";
import { Context } from '../../../Context/LangContext';
import content from '../../../Localization/content';

// Import Components
import './OMORejalari.scss';
import SocialMedia from "../../SocialMedia/SocialMedia";
import SiteLoader from "../../SiteLoader/SiteLoader";

function OMORejalari() {

  // APi
  let url = process.env.REACT_APP_URL;

  // Api State
  const [data, setData] = useState([])

  // Loader
  const [loader, setLoader] = useState(true);

  // Contexts
  const { lang, setLang } = useContext(Context);
  const { setText } = useContext(ContextLine)
  setText(content[lang]?.VOchiqMajlislarOtkazishRejalari)

  useEffect(() => {
    axios.get(`${url}plans`).then((res) => {
      setData(res.data?.data)
    }).catch((error) => {
      console.log(`Xatolik ${error}`)
    }).finally(() => {
      setLoader(false)
      document.body.style.overflow = 'auto';
    })
  }, [])

  return (
    <section className='plans'>
      {
        loader ? (
          <SiteLoader />
        ) : (
          <p dangerouslySetInnerHTML={{ __html: data?.[`body_${lang}`] }}></p>
        )
      }

      <SocialMedia created_at={`${data?.[data.length -1]?.updated_at?.slice(0, 10)} ${data?.[data.length -1]?.updated_at?.slice(11, 16)}`} />
    </section>
  )
}

export default OMORejalari
