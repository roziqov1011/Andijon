// Import React
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Import Pack
import axios from 'axios';

// Import Contexts
import {ContextLine} from "../../../Context/LineText";
import { Context } from '../../../Context/LangContext';
import content from '../../../Localization/content';

// Import Components
import './VHTTashkilotlar.scss';
import SiteLoader from "../../SiteLoader/SiteLoader";


function VHTTashkilotlar() {

  // APi
  let url = process.env.REACT_APP_URL;
  let httpUrl = process.env.REACT_APP_HTTPS;

  // Api State
  const [organizationsData, setOrganizationsData] = useState([])

  // Loader
  const [loader, setLoader] = useState(true);

  // Contexts
  const { lang, setLang } = useContext(Context);
  const { setText } = useContext(ContextLine)
  setText(content[lang]?.МViloyatHokimligiTasarrufidagiTashkilotlar)


  useEffect(() => {
    axios.get(`${url}organizations`).then((res) => {
      setOrganizationsData(res.data?.data.categories)
    }).catch((error) => {
      console.log('Xatolik Yuzberdi');
    }).finally(() => {
      setLoader(false)
      document.body.style.overflow = 'auto';
    })
  }, []);

    // Shaire Api Data
    const navigate = useNavigate();
    const toDetalsData = (item) => {
      navigate(`/v-governorship/organizations-inner/${item?.slug}`, { state: item?.slug })
    }

  return (
    <section className='vh-organizations'>
      <ul className='vh-organizations__list'>
        {
          loader ? (
            <SiteLoader />
          ) : (
            organizationsData?.map((item) => {
              return (
                <li className='vh-organizations__item' key={item.id} onClick={() => toDetalsData(item)}>
                  <img className='vh-organizations__img' src={`${httpUrl}${item?.image}`} alt="img" width={315} height={215} />
                  <div>
                    <h4 className='vh-organizations__item-title'>
                      {item?.[`title_${lang}`]?.slice(0,120)}
                    </h4>
                    <p className='vh-organizations__item-name'>
                      {item?.[`position_${lang}`]?.slice(0,120)}
                    </p>
                    <p className='vh-organizations__item-user-name'>{item?.director}</p>
                  </div>
                </li>
              )
            })
          )
        }
      </ul>
    </section>
  )
}

export default VHTTashkilotlar
