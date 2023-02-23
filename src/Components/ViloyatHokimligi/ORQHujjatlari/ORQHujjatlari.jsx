// Import React
import { useContext, useRef, useState, useEffect } from 'react';

// Import Components
import './ORQHujjatlari.scss';
import SocialMedia from "../../SocialMedia/SocialMedia";
import SiteLoader from "../../SiteLoader/SiteLoader";

// Import Contexts
import {ContextLine} from "../../../Context/LineText";
import { Context } from '../../../Context/LangContext';
import content from '../../../Localization/content';

// Import Pack
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import axios from 'axios';

function OKYHujjatlar() {

  // APi
  let url = process.env.REACT_APP_URL;
  let httpUrl = process.env.REACT_APP_HTTPS;

  // Contexts
  const { lang, setLang } = useContext(Context);
  const { setText } = useContext(ContextLine)
  setText(content[lang]?.OzbekistonRespublikasiQonunchilikHujjatlari)

  const [docData, setDocData] = useState()
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    axios.get(`${url}documents`).then((res) => {
      setDocData(res.data?.data)
    }).finally(() => {
      setLoader(false)
      document.body.style.overflow = 'auto'
    })
  }, [])

  return (
    <section className='expired-documents'>
      <div className="expired-documents-top">
          {
            loader ? (
              <SiteLoader />
            ) : (
              docData?.map((item) => {
                return (
                    <div className="expired-documents-top__card">
                      <div>
                        <h5 className='expired-documents-top__card-title'>
                          {item?.[`title_${lang}`]?.slice(0,120)}
                        </h5>
                      </div>
                      <img className='expired-documents-top__card-img' src={`${httpUrl}${item?.image}`} alt="img" />
                      <a className='expired-documents-top__card-link' href={item?.link} target={'_blank'}>Saytga kirish</a>
                    </div>
                )
              })
            )
          }
      </div>

      <SocialMedia created_at={`${docData?.[docData?.length - 1]?.updated_at?.slice(0, 10)} ${docData?.[docData?.length - 1]?.updated_at?.slice(11, 16)}`} />

    </section>
  )
}

export default OKYHujjatlar