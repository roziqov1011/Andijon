import { useContext, useEffect, useState } from 'react';

// Import Contexts
import {ContextLine} from "../../../Context/LineText";
import { Context } from '../../../Context/LangContext';
import content from '../../../Localization/content';

// Import Pack
import axios from 'axios';

// Import Components
import './HujjatlarMuhokamasi.scss';
import SiteLoader from "../../SiteLoader/SiteLoader"


function HujjatlarMuhokamasi() {

  // APi
  let url = process.env.REACT_APP_URL;

  // Contexts
  const { lang, setLang } = useContext(Context);
  const { setText } = useContext(ContextLine)
  setText(content[lang]?.VXujjatlarMuhokamasi)

  // Api State
  const [discussionData, setDiscussionData] = useState([])
  
  // Loader State
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    axios.get(`${url}discussions`).then((res) => {
      setDiscussionData(res.data?.data)
    }).catch((error) => {
      console.log('Xatolik')
    }).finally(() => {
      setLoader(false)
      document.body.style.overflow = 'auto'
    })
  },[])

  return (
    <section className="doc-discussions">
      <ul className="doc-discussions__list">
        {
        loader ? (
          <SiteLoader /> 
        ) : (
          discussionData?.map((item) => {
            return (
              <li className="doc-discussions__item" key={item.id}>
                <p className="doc-discussions__doc-title">
                  {item?.[`title_${lang}`]?.slice(0,120)}
                </p>
                <a className="doc-discussions__link" target={'_blank'} href={item?.link}>{item?.link}</a>
              </li>
            )
          })
        )
        }
      </ul>
    </section>
  )
}

export default HujjatlarMuhokamasi