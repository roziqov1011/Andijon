// IMport React
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// IMport Pack
import axios from "axios";

// IMport Components
import SiteLoader from "../../SiteLoader/SiteLoader";

import "./QoshimchaXizmatlar.scss";
import Container from "../../Container/Container";

// Import Lang
import { Context } from "../../../Context/LangContext";
import content from "../../../Localization/content";
import Hline from "../Hline/Hline";


function QoshimchaXizmatlar() {

    let url = process.env.REACT_APP_URL;
    let httpUrl = process.env.REACT_APP_HTTPS;

    // Lang State
    const { lang, setLang } = useContext(Context);
    const [loading, setLoading] = useState(true)
    const [secondaryServicesData, setSecondaryServicesData] = useState([]);

 
    useEffect(() => {
        axios.get(`${url}secondary-services`).then((res) => {
            setSecondaryServicesData(res?.data?.data)
        }).catch((error) => {
            alert('xatolik!!')
        }).finally(() => {
            setLoading(false);
            document.body.style.overflow = 'auto'
        })
    }, [])

    // Shaire Data Navigation Function
    const navigate = useNavigate();
    const toDetalsData = (item) => {
        navigate(`/v-governorship/services/${item.slug}`, { state: item })
    }


    return (
        <Container>
            <section className="qoshimcha-xizmatlar">

                <Hline title={content[lang]?.Murojat_markazi} />

                <div className="qoshimcha-xizmatlar__main">
                    <div className="qoshimcha-xizmatlar__left">
                        <ul>
                            {
                                loading ? (
                                    <SiteLoader />
                                ) : (
                                    secondaryServicesData?.map((item) => {
                                        return (
                                            <li key={item.id} onClick={() => toDetalsData(item)}>
                                                <img src={`${httpUrl}${item?.image}`} alt={`${item.title_uz} icon`} />
                                                <h6>{lang == "uz" ? item?.title_uz
                                                    : lang !== "ru" ? item?.title_en
                                                        : item?.title_ru}</h6>
                                            </li>
                                        )
                                    })
                                )
                            }
                        </ul>
                    </div>          
                </div>
            </section>
        </Container>
    )
}

export default QoshimchaXizmatlar