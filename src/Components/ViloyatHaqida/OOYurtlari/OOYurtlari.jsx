// Import React
import { useEffect, useContext, useState } from 'react';

// Import Pack
import axios from 'axios';
import Accordion from 'react-bootstrap/Accordion';

// Import Contexts
import { ContextLine } from "../../../Context/LineText";
import { Context } from '../../../Context/LangContext';
import content from '../../../Localization/content';

// Import Components
import './OOYurtlari.scss';
import SiteLoader from '../../SiteLoader/SiteLoader';
import SokialMedia from "../../SocialMedia/SocialMedia";

function OOYurtlari() {

  // APi
  let url = process.env.REACT_APP_URL;

  // Api State
  const [universitiesData, setUniversitiesData] = useState([])

  // Loader
  const [loader, setLoader] = useState(true);

  // Contexts
  const { lang, setLang } = useContext(Context);
  const { setText } = useContext(ContextLine)
  setText(content[lang]?.OliyOquvYurtlari)

  useEffect(() => {
    axios.get(`${url}universities`).then((res) => {
      setUniversitiesData(res?.data.data);
    }).catch((error) => {
      console.log(`Xatolik Yuzberdi ${error}`);
    }).finally(() => {
      setLoader(false);
      document.body.style.overflow = 'auto';
    })
  }, [])

  return (
    <section className='universities'>
      <Accordion defaultActiveKey="0">
        {
          loader ? (
            <SiteLoader />
          ) : (
            universitiesData?.map((item) => {
              return (
                <Accordion.Item className='universities__accor-item' eventKey={item.id}>
                  <Accordion.Header>
                    {item?.[`title_${lang}`]}
                  </Accordion.Header>
                  <Accordion.Body className='universities__accor-body'>
                    <p dangerouslySetInnerHTML={{ __html: item?.[`body_${lang}`] }}></p>
                  </Accordion.Body>
                </Accordion.Item>
              )
            })
          )
        }
      </Accordion>

      <SokialMedia created_at={`${universitiesData?.[universitiesData.length -1]?.updated_at?.slice(0, 10)} ${universitiesData?.[universitiesData.length -1]?.updated_at?.slice(11, 16)}`} />
    </section>
  )
}

export default OOYurtlari

