// Import React
import { useEffect, useContext, useState } from 'react'

// IMport Pack
import axios from 'axios';

// Import Contexts
import { ContextLine } from "../../../Context/LineText";
import { Context } from '../../../Context/LangContext';
import content from '../../../Localization/content';

// Import Components
import './MIBoglari.scss';
import SiteLoader from '../../SiteLoader/SiteLoader';

function MIBoglari() {

  // APi
  let url = process.env.REACT_APP_URL;

  // Api State
  const [parksData, setParksData] = useState([])

  // Loader
  const [loader, setLoader] = useState(true);

  // Contexts
  const { lang, setLang } = useContext(Context);
  const { setText } = useContext(ContextLine)
  setText(content[lang]?.MadaniyatIstirohatBoglari)

  useEffect(() => {
    axios.get(`${url}parks`).then((res) => {
      setParksData(res.data?.data)
    }).catch((error) => {
      console.log('Xatolik Yuzberdi');
    }).finally(() => {
      setLoader(false)
      document.body.style.overflow = 'auto';
    })
  }, [])

  return (
    <section className='parks'>
      <ul className='parks__list'>
        {
          loader ? (
            <SiteLoader />
          ) : (
            parksData.map((item) => {
              return (
                <li className='parks__item' key={item?.id}>
                  <h5 className='parks__item-title'>{item?.[`title_${lang}`]?.slice(0,120)}</h5>
                  <p dangerouslySetInnerHTML={{ __html: item?.[`body_${lang}`] }}></p>
                </li>
              )
            })
          )
        }
      </ul>
    </section>
  )
}

export default MIBoglari