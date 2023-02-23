// Import React
import { useContext, useState, useEffect } from 'react';

// Import Contexts
import {ContextLine} from "../../../Context/LineText";
import { Context } from '../../../Context/LangContext';
import content from '../../../Localization/content';

// Import Components
import './Manzil.scss';
import SiteLoader from '../../SiteLoader/SiteLoader';

function Manzil() {

  // APi
  let url = process.env.REACT_APP_URL;

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  // Lang State
  const { lang, setLang } = useContext(Context);
  const { setText } = useContext(ContextLine)
  setText(content[lang]?.Vmanzil)

  useEffect(() => {
    fetch(`${url}contact`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data.data)
      }).finally(() => {
        setLoading(false)
        document.body.style.overflow = 'auto';
      })
  }, [])

  return (
    <section className='address'>
      <h3 className='address__title'>{content[lang]?.Viloyat_hokimligi_manzili}</h3>

      {
        loading == true || undefined ? (
          <SiteLoader />
          
        ) : (
          <div className="address__card">

            <p dangerouslySetInnerHTML={{ __html: data?.[`body_${lang}`] }}></p>

            <p dangerouslySetInnerHTML={{ __html: data?.[`body_${lang}`] }}></p>

          </div>
        )
      }

      <div className='address__map'>
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <a href="https://yandex.uz/maps/org/52146867777/?utm_medium=mapframe&utm_source=maps" style={{ color: '#eee', fontSize: 12, position: 'absolute', top: 0 }}>Хокимият Андижанской области</a>
          <a href="https://yandex.uz/maps/10329/andijan/category/government_administration/184105658/?utm_medium=mapframe&utm_source=maps" style={{ color: '#eee', fontSize: 12, position: 'absolute', top: 14 }}>Администрация в Андижане</a>
          <a href="https://yandex.uz/maps/10329/andijan/category/government_ministries_services/184105716/?utm_medium=mapframe&utm_source=maps" style={{ color: '#eee', fontSize: 12, position: 'absolute', top: 28 }}>Министерства, ведомства, государственные службы в Андижане</a>
          <iframe src="https://yandex.uz/map-widget/v1/-/CCUbQ2TfcB" width={'100%'} height={400} frameBorder={1} style={{ position: 'relative' }} /></div>
      </div>
    </section>
  )
}

export default Manzil
