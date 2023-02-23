// Import REACT
import { useContext, useEffect, useState } from 'react';

// Import Pack
import axios from 'axios';

// Import Contexts
import {ContextLine} from "../../../Context/LineText";
import { Context } from '../../../Context/LangContext';
import content from '../../../Localization/content';

// IMport Components
import './MDHokimyati.scss';
import SociaMedia from "../../SocialMedia/SocialMedia";
import SiteLoader from "../../SiteLoader/SiteLoader.jsx";


function MDHokimyati() {

  // APi
  let url = process.env.REACT_APP_URL;
  let httpUrl = process.env.REACT_APP_HTTPS;

  // Api State
  const [localPageData, setLocalPageData] = useState([])

  // Loader
  const [loader, setLoader] = useState(true);

  // Contexts
  const { lang, setLang } = useContext(Context);
  const { setText } = useContext(ContextLine)
  setText(content[lang]?.VMahalliyDavlatHokimyati)

  useEffect(() => {
    axios.get(`${url}local-page`).then((res) => {
      setLocalPageData(res?.data?.data)
    }).catch((error) => {
      console.log(`Xatolik Yuzberdi ${error}`);
    }).finally(() => {
      setLoader(false);
      document.body.style.overflow = 'auto';
    })
  }, [])

  return (
    <section className='local-page'>
      {
        loader ? (
          <SiteLoader />
        ) : (
          <>
            <h2 className='local-page__title'>
              {localPageData?.[`title_${lang}`]}
            </h2>

            <p dangerouslySetInnerHTML={{ __html: localPageData?.[`body_${lang}`] }}></p>

            <div className="local-page__box">
              <SociaMedia created_at={`${localPageData?.updated_at?.slice(0, 10)} ${localPageData?.updated_at?.slice(11, 16)}`} />
            </div>
          </>
        )
      }
    </section>
  )
}

export default MDHokimyati