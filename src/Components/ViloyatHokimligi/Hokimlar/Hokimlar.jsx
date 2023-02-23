// IMport React
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Import Context
import { Context } from '../../../Context/LangContext';
import content from '../../../Localization/content';

// Import Components
import SiteLoader from '../../SiteLoader/SiteLoader';
import './Hokimlar.scss'

function Hokim() {

  // APi
  let url = process.env.REACT_APP_URL;
  let httpUrl = process.env.REACT_APP_HTTPS;

  // Contexts
  const { lang, setLang } = useContext(Context);

  // Api Data State
  const [governorsData, setGovernorsData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch(`${url}governors`).then((response) => response.json())
      .then((data) => {
        setGovernorsData(data?.data)
      }).finally(() => {
        setLoader(false)
        document.body.style.overflow = 'auto';
      })
  }, [])

  const navigate = useNavigate();

  const toDetalsData = (item) => {
    navigate(`/hokimlar-profil/${item.id}`, { state: item })
  }

  return (
    <section className='hokimlar'>
      <ul className='hokimlar__list'>
        {
          loader ? (
            <SiteLoader />
          ) : (
            governorsData?.map((data) => {
              return (
                <>
                  <li className='hokimlar__item' key={data?.id} onClick={() => toDetalsData(data)}>
                    <img className='hokimlar__img' src={`${httpUrl}${data?.image}`} alt="img" width={200} height={250} />
                    <h5 className='hokimlar__name'>
                      {data?.[`name_${lang}`].slice(0, 120)}
                    </h5>
                    <p className='hokimlar__district'>
                      {data?.[`position_${lang}`]?.slice(0, 120)}
                    </p>
                  </li>
                </>
              )
            })
          )
        }
      </ul>
    </section>
  )
}

export default Hokim