// Import React
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Import Pack
import axios from "axios";

// Import Lang
import { Context } from "../../../Context/LangContext";
import content from "../../../Localization/content";

// Import Components
import "./HXizmatlar.scss"
import Container from "../../Container/Container"
import Hline from "../Hline/Hline";
import SiteLoader from "../../SiteLoader/SiteLoader";

function HXizmatlar() {

    let url = process.env.REACT_APP_URL;
    let httpUrl = process.env.REACT_APP_HTTPS;

    // Lang State
    const { lang, setLang } = useContext(Context);
    const [loading, setLoading] = useState(true)
    const [servicesData, setServicesData] = useState([]);

    useEffect(() => {
        axios.get(`${url}main-services`).then((res) => {
            setServicesData(res?.data?.data)
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
            <section className="hservices">

                <Hline title={content[lang]?.hxizmatlarTitle} />

                <ul className="hservices__list">
                    {
                        loading ? (
                            <SiteLoader /> 
                        ) : (
                            servicesData?.map((item) => {
                                return (
                                    <li className="hservices__item" key={item.id} onClick={() => toDetalsData(item)}>
                                        <img src={`${httpUrl}${item?.image}`} alt="img" />
                                        <h5>
                                            {lang == "uz" ? item?.title_uz
                                                : lang !== "ru" ? item?.title_en
                                                    : item?.title_ru}
                                        </h5>
                                    </li>
                                )
                            })
                        )
                    }
                </ul>
            </section>
        </Container>
    )
}

export default HXizmatlar