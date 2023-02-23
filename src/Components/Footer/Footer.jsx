// Import React
import { useRef, useContext } from "react";
import { useLocation } from "react-router-dom";

// Import Lang
import content from "../../Localization/content";
import { Context } from "../../Context/LangContext";

// Import Pack

// Import Components
import "../Footer/Footer.scss";
import Logo from "../Logo/Logo";
import Container from "../Container/Container";

// Import Img
import ImgOne from "../../Assets/Img/footer-1.png";
import ImgTwo from "../../Assets/Img/footer-2.png";
import ImgThree from "../../Assets/Img/footer-3.png";


function Footer() {


    const { lang, setLang } = useContext(Context);
    const elFooter = useRef()
    const location = useLocation().pathname


    if(location == "*") {
        elFooter.style.display="none";
    }

    const footerNewData1 = [
        {
            id: 1,
            title: content[lang].homepage,
            link: '/'
        },
        {
            id: 2,
            title: content[lang].site_map,
            link: '/'
        },
        {
            id: 3,
            title: content[lang].footerTezTezSavol,
            link: '/'
        },
        {
            id: 4,
            title: content[lang].footerSavolJavob,
            link: '/'
        },
        {
            id: 5,
            title: content[lang].footerForum,
            link: '/'
        },
    ]

    const footerNewData2 = [
        {
            id: 1,
            title: content[lang].footerStatistika,
            link: '/'
        },
        {
            id: 2,
            title: content[lang].footerHozirOnline,
            link: '/'
        },
        {
            id: 3,
            title: content[lang].footerRoyhatanOtganlar,
            link: '/'
        },
        {
            id: 4,
            title: content[lang].footerMehmonlar,
            link: '/'
        },
    ]

    const footerBottomData = [
        {
            id: 1,
            img: ImgOne,
            link: 'https://regulation.gov.uz/oz'
        },
        {
            id: 2,
            img: ImgTwo,
            link: 'https://my.gov.uz/uz'
        },
        {
            id: 3,
            img: ImgThree,
            link: 'https://data.gov.uz/rus'
        },
    ]

    return (
        <>
            <section ref={elFooter} className="footer">
                <Container>
                    <ul className="footer__list">
                        <li className="footer__item">
                            <div className="footer__logo">
                                <Logo />
                            </div>
                            <h4 className="footer__item-title--info">{content[lang].footerCall}</h4>
                            <a className="footer__item-link" href="tel: 8(374) 225-80-00">8(374) 225-80-00</a>
                        </li>

                        <li className="footer__item">
                            <ul>
                                {
                                    footerNewData1.map((dat) => {
                                        return (
                                            <li key={dat.id}>
                                                <a href={dat.link}>{dat.title}</a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </li>

                        <li className="footer__item">
                            <ul>
                                {
                                    footerNewData2.map((dat) => {
                                        return (
                                            <li key={dat.id}>
                                                <a href={dat.link}>{dat.title}</a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </li>
                    </ul>
                    <dir className="footer__bottom-in">
                        <div className="footer__bottom-in-box">
                        {
                            footerBottomData.map((data) => {
                                return (
                                    <a key={data.id} className="footer__bottom-in-link" target={'_blank'} href={data.link}>
                                        <img className="footer__bottom-link" src={data.img} alt="img" />
                                    </a>
                                )
                            })
                        }
                        </div>
                    </dir>
                    <p className="footer__info-inner">OOO «DigitalCity» 2022</p>
                </Container>
            </section>
        </>
    )
}

export default Footer