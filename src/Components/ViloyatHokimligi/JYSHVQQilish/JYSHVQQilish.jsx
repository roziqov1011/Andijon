// Import React
import { useEffect, useState, useContext } from 'react';

// Import Pack
import axios from 'axios';

// Import Contexts
import {ContextLine} from "../../../Context/LineText";
import { Context } from '../../../Context/LangContext';
import content from '../../../Localization/content';

// Import Components
import './JYSHVQQilish.scss';
import SocialMedia from "../../SocialMedia/SocialMedia";

function JYSHVQQilish() {

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
  setText(content[lang]?.VJismoniy_qabul_qilish)

  useEffect(() => {
    axios.get(`${url}reception-times`).then((res) => {
      setData(res.data?.data)
    }).catch((error) => {
      console.log(`Xatolik ${error}`)
    }).finally(() => {
      setLoader(false)
      document.body.style.overflow = 'auto';
    })
  }, [])

  return (
    <section className='reception-times'>
      <h3 className='reception-times__title'>{content[lang]?.Jismoniy_va_yuridik}</h3>

      <div className='reception-times__caption'>{content[lang]?.Jadvali}</div>

      <ul className='reception-times__list'>
        {
          data?.map((item) => {
            return (
              <li className='reception-times__item'>
                <img className='reception-times__item-img' src={`${httpUrl}${item?.image}`} alt="img" width={100} />

                <div className='reception-times__item-box'>
                  <h4 className='reception-times__item-title'>
                    {item?.[`title_${lang}`]?.slice(0,120)}
                  </h4>
                  <p dangerouslySetInnerHTML={{ __html: item?.[`body_${lang}`] }}></p>
                </div>
              </li>
            )
          })
        }
      </ul>

      <SocialMedia created_at={`${data?.[data.length -1]?.updated_at?.slice(0, 10)} ${data?.[data.length -1]?.updated_at?.slice(11, 16)}`} />
    </section>
  )
}

export default JYSHVQQilish