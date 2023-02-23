import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// IMport Components
import HokimInfo from '../../HokimInfo/HokimInfo'
import SocialMedia from '../../SocialMedia/SocialMedia'
import SiteLoader from '../../SiteLoader/SiteLoader';
import './AndijonTumani.scss'

// Import Contexts
import { ContextLine } from "../../../Context/LineText";
import { Context } from '../../../Context/LangContext';
import content from '../../../Localization/content';


function AndijonTumani() {

  // APi
  let url = process.env.REACT_APP_URL;
  let httpUrl = process.env.REACT_APP_HTTPS;

  // Api State
  const { state } = useLocation()
  const [organizationsData, setOrganizationsData] = useState([])

  // Loader
  const [loader, setLoader] = useState(true);

  // Contexts
  const { lang, setLang } = useContext(Context);

  const { setText } = useContext(ContextLine)
  setText(lang == "uz" ? state?.title_uz
    : lang !== "ru" ? state?.title_en
    : state?.title_ru)

  return (
    <div className='AndijonTumani'>

      <p dangerouslySetInnerHTML={{ __html: state?.[`body_${lang}`] }}></p>

      <div className='hokim__wrapper'>
        <img src={`${httpUrl}${state?.hokim_image}`} alt="" />
        <div>
          <p dangerouslySetInnerHTML={{ __html: state?.[`hokim_text_${lang}`] }}></p>
        </div>
      </div>

      <HokimInfo data={state} />

      <div className="tuman__btns">
        <a href={`${httpUrl}${state?.decision}`} target={'_blank'} download className='qaror'>{content[lang]?.Andijon_tumani_hokimligi}</a>
        <a href={`${httpUrl}${state?.statute}`} target={'_blank'} download className='nizom'>{content[lang]?.Nizomi}</a>
      </div>

      <SocialMedia created_at={`${state?.updated_at?.slice(0, 10)} ${state?.updated_at?.slice(11, 16)}`} />
    </div>
  )
}

export default AndijonTumani 