// IMport React
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';

// Import Contexts
import { ContextLine } from "../../../../Context/LineText";
import { Context } from '../../../../Context/LangContext';
import content from '../../../../Localization/content';


// IMport Components
import './TurizmItem.scss';
import SiteLoader from '../../../SiteLoader/SiteLoader';

function TurizmItem() {

    // APi
    let url = process.env.REACT_APP_URL;
    let httpUrl = process.env.REACT_APP_HTTPS;

    // Api State
    const { state } = useLocation()

    // Contexts
    const { lang, setLang } = useContext(Context);
    const { setText } = useContext(ContextLine)
    setText(content[lang]?.Turizm)

    return (
        <section className='tourisms-item'>
            {
                state == undefined || state == [] ? (
                    <SiteLoader />
                ) : (
                    <>
                        <h2 className='tourisms-item__title'>
                            {state?.[`title_${lang}`]?.slice(0,120)}
                        </h2>

                        <img className='tourisms-item__img' src={`${httpUrl}${state?.image}`} alt="" />

                        <p dangerouslySetInnerHTML={{ __html: state?.[`body_${lang}`] }}></p>
                    </>
                )
            }
        </section>
    )
}

export default TurizmItem 