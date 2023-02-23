// Import React
import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// IMport Pack
import axios from 'axios';

// Import Contexts
import { ContextLine } from "../../../Context/LineText";
import { Context } from '../../../Context/LangContext';
import content from '../../../Localization/content';

// IMport Components
import './ElektronHukumat.scss';
import SocialMedia from '../../SocialMedia/SocialMedia';
import SiteLoader from '../../SiteLoader/SiteLoader';

function ElektronHukumat() {

  // APi
  let url = process.env.REACT_APP_URL;
  let httpUrl = process.env.REACT_APP_HTTPS;

  // Api State
  const [governmentsData, setGovernmentsData] = useState([])

  // Loader
  const [loader, setLoader] = useState(true);

  // Contexts
  const { lang } = useContext(Context);
  const { setText } = useContext(ContextLine)
  setText(content[lang]?.ElektromHukumat)

  useEffect(() => {
    axios.get(`${url}governments`).then((res) => {
      setGovernmentsData(res.data?.data)
    }).catch((error) => {
      console.log('Xatolik Yuzberdi');
    }).finally(() => {
      setLoader(false)
      document.body.style.overflow = 'auto';
    })
  }, [])

  // Shaire Api Data
  const navigate = useNavigate();
  const toDetalsData = (item) => {
    navigate(`/v-about/governments-inner/${item.slug}`, { state: item.slug })
  }

  return (
    <section className='governments'>
      <ul className='governments__list'>
        {
          loader ? (
            <SiteLoader />
          ) : (
            governmentsData?.map((item) => {
              return (
                <li className='governments__item' key={item?.id} onClick={() => toDetalsData(item)}>
                  <p className='governments__item-text'>
                    {item?.[`title_${lang}`]?.slice(0,120)}
                  </p>
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </li>
              )
            })
          )
        }
      </ul>

      <SocialMedia />
    </section>
  )
}

export default ElektronHukumat