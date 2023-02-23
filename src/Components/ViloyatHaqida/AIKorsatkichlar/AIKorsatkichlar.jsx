// IMport React
import { useContext, useEffect, useState } from 'react'

// Import Pack
import axios from 'axios';

// Import Contexts
import { ContextLine } from "../../../Context/LineText";
import { Context } from '../../../Context/LangContext';
import content from '../../../Localization/content';

// IMport Components
import './AIKorsatkichlar.scss';
import ListCard from '../../ListCard/ListCard';
import SiteLoader from '../../SiteLoader/SiteLoader';

function AIKorsatkichlar() {

  // Api
  const url = process.env.REACT_APP_URL

  // Contexts
  const { lang } = useContext(Context);
  const { setText } = useContext(ContextLine)
  setText(content[lang]?.AsosiyIqtisodiyKorsatkichlarStatistikalar)

  const [indicatorsData, setIndicatorsData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios.get(`${url}indicators`).then((res) => {
      setIndicatorsData(res.data?.data)
    }).catch(function (error) {
      alert('Malumot Olishda Xatolik Yuberdi :pensive:')
    }).finally(() => {
      setLoader(false);
      document.body.style.overflow = 'auto';
    })
  }, [])

  return (
    <section className='indicators'>
      <h6 className='indicators__title'>{content[lang]?.Andijon_viloyatining_statistik}</h6>
      <div className='indicators__headline'>{content[lang]?.Korsatkichlar}</div>
      {
        loader ? (
          <SiteLoader />
        ) : (
          <ListCard data={indicatorsData} />
        )
      }
    </section>
  )
}

export default AIKorsatkichlar