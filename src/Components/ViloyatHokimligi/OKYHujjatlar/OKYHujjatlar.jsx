// IMport React
import { useContext, useEffect, useState } from "react";

// IMport Pack
import axios from 'axios';

// Import Contexts
import { ContextLine } from "../../../Context/LineText";
import { Context } from '../../../Context/LangContext';
import content from '../../../Localization/content';

// IMport Components
import "./OKYHujjatlar.scss";
import SiteLoader from "../../SiteLoader/SiteLoader";

function OKYHujjatlar() {

  // APi
  let url = process.env.REACT_APP_URL;

  // Api State
  const [documentsData, setDocumentsData] = useState([])

  // Loader
  const [loader, setLoader] = useState(true);

  // Contexts
  const { lang, setLang } = useContext(Context);
  const { setText } = useContext(ContextLine)
  setText(content[lang]?.VOzKuchiniYoqotganHujjatlar)


  useEffect(() => {
    axios.get(`${url}old-documents`).then((res) => {
      setDocumentsData(res.data?.data)
    }).catch((error) => {
      console.log('Xatolik Yuzberdi');
    }).finally(() => {
      setLoader(false)
      document.body.style.overflow = 'auto';
    })
  }, [])

  return (
    <section className="old-documents">
      <ul className="old-documents__list">
        {
          loader ? (
            <SiteLoader />
          ) : (
            documentsData.map((item) => {
              return (
                <li className="old-documents__item">
                  <h4 className="old-documents__item-title">
                    {item?.[`title_${lang}`]?.slice(0,120)}
                  </h4>
                  <p dangerouslySetInnerHTML={{__html: item?.[`body_${lang}`] }}></p>

                  <div className="old-documents__item-date">
                    <ion-icon name="calendar-outline"></ion-icon>
                    {item?.date}
                  </div>

                  <a className="old-documents__item-btn" href={item?.file} download>Yuklab Olish</a>
                </li>
              )
            })
          )
        }
      </ul>
    </section >
  )
}

export default OKYHujjatlar
