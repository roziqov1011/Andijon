// Import React
import { useContext, useState, useEffect } from 'react';

// Import Pack
import axios from 'axios';

// Import Context
import {ContextLine} from "../../../Context/LineText";
import { Context } from '../../../Context/LangContext';
import content from '../../../Localization/content';

// IMport Components
import ListCard from '../../ListCard/ListCard';
import './VXTQQQarorlar.scss';
import SiteLoader from "../../SiteLoader/SiteLoader";

function VXTQQQarorlar() {

  // Api 
  const url = process.env.REACT_APP_URL
  const httpUrl = process.env.REACT_APP_HTTPS;

  // Lang State
  const { lang, setLang } = useContext(Context)
  const { setText } = useContext(ContextLine)
  setText(content[lang]?.VViloyatHokimligiTomonidanQabulQilinganQarorlar)

  const [decisionsData, setDecisionsData] = useState([]);
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    axios.get(`${url}decisions`).then((res) => {
      setDecisionsData(res.data?.data)
    }).catch((error) => {
      alert(`${error} xatolik yuzberdi`)
    }).finally(() => {
      setLoader(false)
      document.body.style.overflow = 'auto'
    })
  }, [])

  return (
    <section className='vdecisions'>
      {
        loader ? (
          <SiteLoader />
        ) : (
          <ListCard data={decisionsData} />
        )
      }
    </section>
  )
}

export default VXTQQQarorlar