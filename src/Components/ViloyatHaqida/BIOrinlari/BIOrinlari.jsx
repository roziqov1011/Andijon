// Import React
import { useContext, useEffect, useState } from 'react';

// IMport Pack
import axios from 'axios';

// Import Contexts
import { ContextLine } from "../../../Context/LineText";
import { Context } from '../../../Context/LangContext';
import content from '../../../Localization/content';

// Import Components
import './BIOrinlari.scss';
import SiteLoader from '../../SiteLoader/SiteLoader';
import SocialMedia from '../../SocialMedia/SocialMedia';

function BIOrinlari() {

  // APi
  let url = process.env.REACT_APP_URL;

  // Api State
  const [vacanciesData, setVacanciesData] = useState([])

  // Loader
  const [loader, setLoader] = useState(true);

  // Contexts
  const { lang, setLang } = useContext(Context);
  const { setText } = useContext(ContextLine)
  setText(content[lang]?.ViloyatdagiBoshIshOrinlar)

  useEffect(() => {
    axios.get(`${url}vacancies`).then((res) => {
      setVacanciesData(res.data?.data)
    }).catch((error) => {
      console.log('Xatolik Yuzberdi');
    }).finally(() => {
      setLoader(false)
      document.body.style.overflow = 'auto';
    })
  }, [])

  return (
    <section className='vacancies'>
      <ul className='vacancies__list'>
        {
          loader ? (
            <SiteLoader />
          ) : (
            vacanciesData.map((item) => {
              return (
                <li className='vacancies__item'>
                  <div>
                    <p className='vacancies__item-text'>
                      {item?.[`title_${lang}`].slice(0,120)}
                    </p>
                    <a className='vacancies__item-link' href={item?.link} target={'_blank'}>{item?.link}</a>
                  </div>

                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </li>
              )
            })
          )
        }
      </ul>

      <SocialMedia  created_at={`${vacanciesData?.[vacanciesData?.length -1]?.updated_at?.slice(0, 10)} ${vacanciesData?.[vacanciesData?.length -1]?.updated_at?.slice(11, 16)}`} />
    </section>
  )
}

export default BIOrinlari