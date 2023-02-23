// Import React
import { useContext, useEffect, useState } from "react";

// Import Components
import "./AssideCard.scss";

import { Context } from "../../Context/LangContext";
import "../AssideVoting/AssideVoting.scss";
import content from "../../Localization/content";
import SiteLoader from "../SiteLoader/SiteLoader";

import axios from "axios";


function AssideCard() {

    // APi
    let url = process.env.REACT_APP_URL;
    let httpUrl = process.env.REACT_APP_HTTPS;

    // API data State
    // const [data, setData] = useState([])
    const [adsData, setAdsData] = useState([])
    const [loading, setLoading] = useState(true)

    // Lang State
    const { lang, setLang } = useContext(Context);

    useEffect(() => {
        axios.get(`${url}ads`).then((res) => {
            setAdsData(res.data.data)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    return (
        <>
            {
                adsData == [] ? (
                    <SiteLoader />
                ) : (
                    <a href={adsData[0]?.link} target={'_blank'} className="asside-card__btn">
                        <section className="asside-card" style={{ backgroundImage: `url(${httpUrl}${adsData[0]?.image})` }}>
                            <div className="asside-card__title">{adsData[0]?.[`title_${lang}`]}</div>
                        </section>
                    </a>
                )
            }
        </>
    )
}

export default AssideCard