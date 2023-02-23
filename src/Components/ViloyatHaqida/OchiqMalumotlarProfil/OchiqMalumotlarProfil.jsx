// Import React
import { useRef, useEffect, useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

// IMport Pack
import axios from 'axios';

// Import Contexts
import { ContextLine } from "../../../Context/LineText";
import { Context } from '../../../Context/LangContext';
import content from '../../../Localization/content';

// Import Components
import './OchiqMalumotlarProfil.scss'
import SiteLoader from '../../SiteLoader/SiteLoader';


function OchiqMalumotlarProfil() {

    const elOpenInfosBtnOne = useRef();
    const elOpenInfosBtnTwo = useRef();

    // APi
    let url = process.env.REACT_APP_URL;

    // Api State
    const [openInfosData, setOpenInfosData] = useState([])
    const { state } = useLocation()

    // Loader
    const [loader, setLoader] = useState(true);

    // Contexts
    const { lang, setLang } = useContext(Context);
    const { setText } = useContext(ContextLine)
    setText(content[lang]?.OchiqMalumotlar)

    const [activeClass, setActiveClass] = useState(false)

    useEffect(() => {
        axios.get(`${url}open-infos/${state}`).then((res) => {
            setOpenInfosData(res.data?.data)
        }).catch((error) => {
            console.log('Xatolik Yuzberdi');
        }).finally(() => {
            setLoader(false)
            document.body.style.overflow = 'auto';
        })
    }, [])

    return (
        <section className='open-infos-profil'>
            <div className="open-infos-profil__wrapper">
                <button ref={elOpenInfosBtnOne} className='open-infos-profil__btn' onChange={(evt) => {
                }} onClick={(evt) => {
                    setActiveClass(1)
                    elOpenInfosBtnOne.current.classList.add('open-infos-profil__btn--active')
                    elOpenInfosBtnTwo.current.classList.remove('open-infos-profil__btn--active')
                }}>Malumotar To’plami Paspor</button>
                <button ref={elOpenInfosBtnTwo} className='open-infos-profil__btn open-infos-profil__btn--active' onClick={() => {
                    setActiveClass(2)
                    elOpenInfosBtnTwo.current.classList.add('open-infos-profil__btn--active')
                    elOpenInfosBtnOne.current.classList.remove('open-infos-profil__btn--active')
                }}>Malumotar To’plami jadvali</button>
            </div>
            {
                loader ? (
                    <SiteLoader />
                ) : (
                    activeClass == 1 ? (
                        <p dangerouslySetInnerHTML={{__html: openInfosData?.[`passport_${lang}`] }}></p>
                    ) : (
                        <p dangerouslySetInnerHTML={{ __html: openInfosData?.[`table_${lang}`] }}></p>
                    )
                )
            }
        </section>
    )
}

export default OchiqMalumotlarProfil 