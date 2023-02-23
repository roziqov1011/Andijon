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
import './DOSaytlari.scss'

function DOSaytlari() {

  // Api
  const url = process.env.REACT_APP_URL

  // Contexts
  const { lang } = useContext(Context);
  const { setText } = useContext(ContextLine)
  setText(content[lang]?.Davlat_organ_saytlari)

  const [organsData, setOrgansData] = useState([]);
  const [loader, setLoader] = useState(true);
  // Bu date bow emas ichida narsa bo 😄
  const date = []

  useEffect(() => {
    axios.get(`${url}organs`).then((res) => {
      setOrgansData(res.data?.data)
    }).catch(function (error) {
      alert('Malumot Olishda Xatolik Yuzberdi')
    }).finally(() => {
      setLoader(false);
      document.body.style.overflow = 'auto';
    })
  }, [])

  return (
    <div className='DOSaytlari'>
      {
        loader ? (
          <SiteLoader />
        ) : (
          organsData?.organs?.map((inner) => {
            return (
              <div className='dosaytlari__box' key={inner?.id}>
                <h3>
                  {inner?.[`title_${lang}`]?.slice(0,120)}
                </h3>
                <ul className='saytlari__list'>
                  {
                    inner?.websites?.map((item) => {
                      date.push(item?.updated_at?.slice(0, 10))
                      date.push(item?.updated_at?.slice(11, 16))

                  return (
                  <li className='saytlari__item' key={item?.id}>
                    <a href={item?.link} target={'_blank'}>
                      <p>
                        {item?.[`title_${lang}`]?.slice(0,120)}
                      </p>
                      <span>{item?.link}</span>
                    </a>
                  </li>
                  )
                    })
                  }
                </ul>
              </div>
            )
          })
        )
      }
      
      <SocialMedia view={'150'} created_at={`${date[0]} ${date[1]}`} />
    </div>
  )
}

export default DOSaytlari

