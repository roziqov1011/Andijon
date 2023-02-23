// Import React
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// IMport Pack
import axios from 'axios';

// Import Contexts
import { ContextLine } from "../../../Context/LineText";
import { Context } from '../../../Context/LangContext';
import content from '../../../Localization/content';

// Import Components;
import './Turizm.scss';
import SiteLoader from "../../SiteLoader/SiteLoader";
import SocialMedia from "../../SocialMedia/SocialMedia";

function Turizm() {

  // APi
  let url = process.env.REACT_APP_URL;
  let httpUrl = process.env.REACT_APP_HTTPS;

  // Api State
  const [tourismsData, setTourismsData] = useState([])

  // Loader
  const [loader, setLoader] = useState(true);

  // Contexts
  const { lang, setLang } = useContext(Context);
  const { setText } = useContext(ContextLine)
  setText(content[lang]?.Turizm)

  useEffect(() => {
    axios.get(`${url}tourisms`).then((res) => {
      setTourismsData(res.data?.data)
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
    navigate(`/v-about/tourisms-inner/${item.slug}`, { state: item })
  }

  return (
    <section className='tourisms'>
      <ul className='tourisms__list'>
        {
          loader ? (
            <SiteLoader />
          ) : (
            tourismsData?.map((item) => {
              return (
                <li className='tourisms__item' key={item?.id} onClick={() => toDetalsData(item)}>
                  <img className='tourisms__item-img' src={`${httpUrl}${item?.image}`} alt="tourisms-img" width={315} height={190} />
                  <div className="tourisms__item-wrapper">
                    <h4 className='tourisms__item-title'>
                      {item?.[`title_${lang}`]?.slice(0,120)}
                    </h4>
                  </div>
                </li>
              )
            })
          )
        }
      </ul>

      <SocialMedia created_at={`${tourismsData?.[tourismsData?.length -1]?.updated_at?.slice(0, 10)} ${tourismsData?.[tourismsData?.length -1]?.updated_at?.slice(11, 16)}`} />
    </section>
  )
}

export default Turizm 