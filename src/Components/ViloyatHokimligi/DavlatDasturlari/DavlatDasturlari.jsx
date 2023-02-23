// Import React
import { useContext, useEffect, useState } from 'react';

// Import Contexts
import { ContextLine } from "../../../Context/LineText";
import { Context } from '../../../Context/LangContext';
import content from '../../../Localization/content';

// IMport Components
import './DavlatDasturlari.scss';
import ListCard from '../../ListCard/ListCard';
import axios from 'axios';
import SiteLoader from '../../SiteLoader/SiteLoader';

function DavlatDasturlari() {

  // Api
  const url = process.env.REACT_APP_URL

  const [programsData, setProgramsData] = useState([]);
  const [loader, setLoader] = useState(true);

  // Contexts
  const { lang, setLang } = useContext(Context);
  const { setText } = useContext(ContextLine)
  setText(content[lang]?.VDavlatDasturlari)

  useEffect(() => {
    axios.get(`${url}programs`).then((res) => {
      setProgramsData(res.data?.data)
    }).catch(function (error) {
      alert('Malumot Olishda Xatolik Yuberdi :pensive:')
    }).finally(() => {
      setLoader(false);
      document.body.style.overflow = 'auto';
    })
  }, [])

  return (
    <div>
      {
        loader ? (
          <SiteLoader />
        ) : (
          <ListCard data={programsData} />
        )
      }
    </div>
  )
}

export default DavlatDasturlari