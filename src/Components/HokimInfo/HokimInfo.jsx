import { useContext } from 'react';
import './HokimInfo.scss';

// Import Contexts
import { Context } from '../../Context/LangContext';
import content from '../../Localization/content';

function HokimInfo({ data }) {

  const { lang, setLang } = useContext(Context);

  return (
    <div className='HokimInfo'>
      <ul className='HokimInfo__list'>
        <li>
          <span>{content[lang]?.Manzili}</span>
          <p>
            {data?.[`addres_${lang}`]?.slice(0,120)}
          </p>
        </li>
        <li>
          <span>{content[lang]?.Ishonch_telefoni}</span>
          <p>{data?.phone1}</p>
        </li>
        <li>
          <span>{content[lang]?.exat}</span>
          <p>
            <a href={`mailto:${data?.exat}`}>{data?.exat}</a>
          </p>
        </li>
      </ul>
      <ul className='HokimInfo__list'>
        <li>
          <span>{content[lang]?.Telefon}</span>
          <p>{data?.phone2}</p>
        </li>
        <li>
          <span>{content[lang]?.Ish_tartibi}</span>
          <p>{data?.work_time}</p>
        </li>
        <li>
          <span>{content[lang]?.Web_site}</span>
          <p>
            <a href={data?.website} target='_blank'>{data?.website}</a>
          </p>
        </li>
      </ul>
    </div>
  )
}

export default HokimInfo