// Import React
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// IMport Pack
import axios from 'axios';

// Import Contexts
import { ContextLine } from "../../../Context/LineText";
import { Context } from '../../../Context/LangContext';
import content from '../../../Localization/content';

// IMport Components
import './Investitsiyalar.scss';
import SocialMedia from '../../SocialMedia/SocialMedia';
import SiteLoader from '../../SiteLoader/SiteLoader';

function Investitsiyalar() {

  // APi
  let url = process.env.REACT_APP_URL;
  let httpUrl = process.env.REACT_APP_HTTPS;

  // Api State
  const [investmentsData, setInvestmentsData] = useState([])

  // Loader
  const [loader, setLoader] = useState(true);

  // Contexts
  const { lang, setLang } = useContext(Context);
  const { setText } = useContext(ContextLine)
  setText(content[lang]?.Investitsiyalar)

  useEffect(() => {
    axios.get(`${url}investments`).then((res) => {
      setInvestmentsData(res.data?.data)
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
    navigate(`/v-about/investments-inner/${item.slug}`, { state: item })
  }

  return (
    <section className='investments'>
      <ul className='investments__list'>
        {
          loader ? (
            <SiteLoader />
          ) : (
            investmentsData?.map((item) => {
              return (
                <li className='investments__item' key={item?.id} onClick={() => toDetalsData(item)}>
                  <img className='investments__item-img' src={`${httpUrl}${item?.image}`} alt="investments-img" width={315} height={190} />
                  <div className="investments__item-wrapper">
                    <h4 className='investments__item-title'>
                      {item?.[`title_${lang}`]?.slice(0, 120)}
                    </h4>
                    <p className='investments__item-date'>{item?.created_at?.slice(0,10)}</p>
                  </div>
                </li>
              )
            })
          )
        }
      </ul>

      <SocialMedia created_at={`${investmentsData?.[investmentsData?.length -1]?.updated_at?.slice(0, 10)} ${investmentsData?.[investmentsData?.length -1]?.updated_at?.slice(11, 16)}`} />
    </section>
  )
}

export default Investitsiyalar