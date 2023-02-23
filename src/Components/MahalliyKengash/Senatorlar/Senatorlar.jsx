// Import React
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Import Contexts
import { ContextLine } from "../../../Context/LineText";
import { Context } from '../../../Context/LangContext';
import content from '../../../Localization/content';

// Import Pack
import axios from 'axios';

// Import Compinents
import './Senatorlar.scss'
import SiteLoader from '../../SiteLoader/SiteLoader';

function Senatorlar() {

  // APi
  let url = process.env.REACT_APP_URL;
  let httpUrl = process.env.REACT_APP_HTTPS;

  // Api State
  const [senatorsData, setSenatorsData] = useState([])

  // Loader
  const [loader, setLoader] = useState(true);

  // Contexts
  const { lang } = useContext(Context);
  const { setText } = useContext(ContextLine)
  setText(content[lang]?.Senatorlar)

  useEffect(() => {
    axios.get(`${url}senators`).then((res) => {
      setSenatorsData(res.data?.data)
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
    navigate(`/local-council/senators-inner/${item.slug}`, { state: item.slug })
  }

  return (
    <div className='senatorlar'>
      <h4>{content[lang]?.Senat_azolari}</h4>
      <ul className='senatorlar__list'>
        {
          loader ? (
            <SiteLoader />
          ) : (
            senatorsData?.map((item) => {
              return (
                <li className="senatorlar__item" key={item.id} onClick={() => toDetalsData(item)}>
                  {
                    item.image == undefined || null ? (
                      <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png' alt="img" width={120} height={120} />
                    ) : (
                      <img src={`${httpUrl}${item?.image}`} alt="img" width={120} height={120} />
                    )
                  }

                  <div className="senatorlar__item-box">
                    <h4>
                      {item?.[`name_${lang}`]?.slice(0,120)}
                    </h4>
                    <p>
                      {item?.[`description_${lang}`]?.slice(0,120)}
                    </p>
                  </div>
                </li>
              )
            })
          )
        }
      </ul>
    </div>
  )
}

export default Senatorlar