import { useContext, useEffect, useState } from 'react'
import SocialMedia from '../../SocialMedia/SocialMedia'
import './SKTartibi.scss';
import SiteLoader from "../../SiteLoader/SiteLoader.jsx"

import axios from 'axios'

// Import Contexts
import { ContextLine } from "../../../Context/LineText";
import { Context } from '../../../Context/LangContext';
import content from '../../../Localization/content';


function SKTartibi() {

  // APi
  let url = process.env.REACT_APP_URL;

  // Api State
  const [agendasData, setAgendasData] = useState([])

  // Loader
  const [loader, setLoader] = useState(true);

  // Contexts
  const { lang } = useContext(Context);
  const { setText } = useContext(ContextLine)
  setText(content[lang]?.Sessiya_kun_tartibi)

  useEffect(() => {
    axios.get(`${url}agendas`).then((res) => {
      setAgendasData(res.data?.data)
    }).catch((error) => {
      console.log('Xatolik Yuzberdi');
    }).finally(() => {
      setLoader(false)
      document.body.style.overflow = 'auto';
    })
  }, [])

  return (
    <div className='SKTartibi'>
      <ul className='SKTartibi__list'>
        {
          loader ? (
            <SiteLoader />
          ) : (
            agendasData?.map((item) => {
              return (
                <li key={item?.id}>
                  <p>
                    {
                      lang == "uz"
                        ? item?.title_uz?.slice(0, 120)
                        : lang !== "ru" ? item?.title_en?.slice(0, 120)
                          : item?.title_ru?.slice(0, 120)
                    }
                  </p>
                  <a href={item?.file} download>Yuklab Olish</a>
                  {/* <span>PDF formatidagi hujjat ({item?.file[0].size})</span> */}
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

export default SKTartibi

