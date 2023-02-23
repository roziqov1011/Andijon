// Import React
import { useContext, useState, useEffect } from 'react'

// IMport Pack
import axios from 'axios';

// Import Contexts
import { ContextLine } from "../../../Context/LineText";
import { Context } from '../../../Context/LangContext';
import content from '../../../Localization/content';

// IMport Components
import './VHRekvizitlari.scss';
import SiteLoader from "../../SiteLoader/SiteLoader";
import SocialMedia from '../../SocialMedia/SocialMedia';

function VHRekvizitlari() {

  // APi
  let url = process.env.REACT_APP_URL;
  let httpUrl = process.env.REACT_APP_HTTPS;

  // Api State
  const [documentsData, setDocumentsData] = useState([])

  // Loader
  const [loader, setLoader] = useState(true);

  // Contexts
  const { lang, setLang } = useContext(Context);
  const { setText } = useContext(ContextLine)
  setText(content[lang]?.VViloyatHokimligiRekvizitlari)

  useEffect(() => {
    axios.get(`${url}rekvizits`).then((res) => {
      setDocumentsData(res.data?.data)
    }).catch((error) => {
      console.log('Xatolik Yuzberdi');
    }).finally(() => {
      setLoader(false)
      document.body.style.overflow = 'auto';
    })
  }, [])


  return (
    <section className='rekvizits'>
      <ul className="rekvizits__list">
        {
          loader ? (
            <SiteLoader />
          ) : (
            documentsData.map((item) => {
              return (
                <li className="rekvizits__item">
                  <h4 className="rekvizits__item-title">
                    {item?.[`title_${lang}`]?.slice(0,120)}
                  </h4>
                  <p dangerouslySetInnerHTML={{ __html: item?.[`body_${lang}`] }}></p>

                  <a className="rekvizits__item-btn" href={item.file} download>Yuklab Olish</a>
                </li>
              )
            })
          )
        }
      </ul>
      <SocialMedia created_at={`${documentsData[documentsData.length -1]?.updated_at?.slice(0, 10)} ${documentsData[documentsData.length -1]?.updated_at?.slice(11, 16)}`} />
    </section>
  )
}

export default VHRekvizitlari