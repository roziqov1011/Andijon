import {useContext, useEffect} from 'react'

// Import Components
import './Kengashlar.scss'
import ViloyatTarkib from '../../ViloyatTarkib/ViloyatTarkib'

// Import Context and Lang
import {ContextLine} from "../../../Context/LineText";
import { Context } from '../../../Context/LangContext';
import content from '../../../Localization/content';


function Kengashlar() {

  const {lang, setLang} = useContext(Context)
  const { setText } = useContext(ContextLine)
  setText(content[lang].VKengashlar)

  return (
    <div>
        <ViloyatTarkib />
    </div>
  )
}

export default Kengashlar