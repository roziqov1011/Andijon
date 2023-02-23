// Import React
import { useContext, useEffect, useState } from 'react';

// Import Context
import { ContextLine } from "../../../Context/LineText";
import { Context } from '../../../Context/LangContext';
import content from '../../../Localization/content';

// Import Pack
import axios from 'axios';

// Import Components
import SiteLoader from '../../SiteLoader/SiteLoader';
import SocialMedia from '../../SocialMedia/SocialMedia'
import './GMUANarxlar.scss'


function GMUANarxlar() {

  // Api
  const url = process.env.REACT_APP_URL
  const httpUrl = process.env.REACT_APP_HTTPS;

  // Contexts
  const { lang } = useContext(Context);
  const { setText } = useContext(ContextLine)
  setText(content[lang]?.GM_uzbekistan_avto_narxlar)

  const [carPricesData, setCarPricesData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios.get(`${url}car-prices`).then((res) => {
      setCarPricesData(res.data?.data)
    }).catch(function (error) {
      alert('Malumot Olishda Xatolik Yuzberdi')
    }).finally(() => {
      setLoader(false);
      document.body.style.overflow = 'auto';
    })
  }, [])

  return (
    <div className='GMUANarxlar'>
      <h2>{content[lang]?.GM_uzbekistan_avto_narxlari}{new Date().getFullYear()}</h2>
      <ul className='GMUANarxlar__list'>
        {
          loader ? (
            <SiteLoader />
          ) : (
            carPricesData?.map((inner) => {
              return (
                <li className='GMUANarxlar__item' key={inner.id}>
                  <img src={`${httpUrl}${inner?.image}`} alt="img-car" width={270} height={230} />
                  <div>
                    <h3>
                      {inner?.[`body_${lang}`]?.slice(0,120)}
                    </h3>
                    <p dangerouslySetInnerHTML={{ __html: inner?.[`body_${lang}`] }}></p>
                  </div>
                </li>
              )
            })
          )
        }
      </ul>
      <SocialMedia view={'12'} created_at={`${carPricesData[carPricesData.length -1]?.updated_at?.slice(0, 10)} ${carPricesData[carPricesData.length -1]?.updated_at?.slice(11, 16)}`} />
    </div>
  )
}

export default GMUANarxlar