// IMport React
import { useEffect, useContext, useState } from 'react';

// Import Contexts
import { ContextLine } from "../../../Context/LineText";
import { Context } from '../../../Context/LangContext';
import content from '../../../Localization/content';

// IMport Pack
import axios from 'axios';
import Accordion from 'react-bootstrap/Accordion';

// IMport Components
import './AVBTBVInshootlar.scss';
import SiteLoader from '../../SiteLoader/SiteLoader';
import SokialMedia from "../../SocialMedia/SocialMedia"

function AVBTBVInshootlar() {

  // APi
  let url = process.env.REACT_APP_URL;

  // Api State
  const [buildingsData, setBuildingsData] = useState([])

  // Loader
  const [loader, setLoader] = useState(true);

  // Contexts
  const { lang, setLang } = useContext(Context);
  const { setText } = useContext(ContextLine)
  setText(content[lang]?.AndijonViloyatidagiBoshTurganBinoInshoatlar)

  useEffect(() => {
    axios.get(`${url}buildings`).then((res) => {
      setBuildingsData(res.data?.data)
    }).catch((error) => {
      console.log('Xatolik Yuzberdi');
    }).finally(() => {
      setLoader(false)
      document.body.style.overflow = 'auto';
    })
  }, [])

  return (
    <section className='buildings'>
      <Accordion defaultActiveKey="0">
        {
          loader ? (
            <SiteLoader />
          ) : (
            buildingsData.map((item) => {
              return (
                <Accordion.Item className='buildings__accor-item' eventKey={item.id}>
                  <Accordion.Header>
                    {item?.[`title_${lang}`]}
                  </Accordion.Header>
                  <Accordion.Body className='buildings__accor-body'>
                    <p dangerouslySetInnerHTML={{ __html: item?.[`body_${lang}`]}}></p>
                  </Accordion.Body>
                </Accordion.Item>
              )
            })
          )
        }
      </Accordion>

      <SokialMedia created_at={`${buildingsData?.[buildingsData.length -1]?.updated_at?.slice(0, 10)} ${buildingsData?.[buildingsData.length -1]?.updated_at?.slice(11, 16)}`} />
    </section>
  )
}

export default AVBTBVInshootlar 