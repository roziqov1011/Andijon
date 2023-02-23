import { useContext, useEffect, useState } from 'react'
import SocialMedia from '../../SocialMedia/SocialMedia'

// IMport Pack
import axios from 'axios';

// Import Contexts
import { ContextLine } from "../../../Context/LineText";
import { Context } from '../../../Context/LangContext';
import content from '../../../Localization/content';

// Import Components
import './KengashTarkibi.scss'
import SiteLoader from '../../SiteLoader/SiteLoader';

function KengashTarkibi() {

  // APi
  let url = process.env.REACT_APP_URL;

  // Api State
  const [councilDecisionsData, setCouncilDecisionsData] = useState([])

  // Loader
  const [loader, setLoader] = useState(true);

  // Contexts
  const { lang } = useContext(Context);
  const { setText } = useContext(ContextLine)
  setText(content[lang]?.Kengash_tartibi)

  useEffect(() => {
    axios.get(`${url}council-decisions`).then((res) => {
      setCouncilDecisionsData(res.data?.data)
    }).catch((error) => {
      console.log('Xatolik Yuzberdi');
    }).finally(() => {
      setLoader(false)
      document.body.style.overflow = 'auto';
    })
  }, [])

  return (
    <div className='KengashTarkibi'>
      <h4>{content[lang]?.Kengash_qarorlari}</h4>
      <ul className='KengashTarkibi__list'>
        {
          loader ? (
            <SiteLoader />
          ) : (
            councilDecisionsData?.map((item) => {
              return (
                <li>
                  <p>
                    {item?.[`title_${lang}`]?.slice(0, 400)}
                  </p>
                  <div>
                    <a href={item?.file} download>Yuklab Olish</a>
                    {/* <span>PDF formatidagi hujjat (505 KB)</span> */}
                  </div>
                </li>
              )
            })
          )
        }
      </ul>
      <SocialMedia />
    </div>
  )
}

export default KengashTarkibi