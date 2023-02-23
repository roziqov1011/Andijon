// Import React
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// IMport Pack
import axios from "axios";

// Import Components
import "./XamkorliklarInner.scss";
import SiteLoader from "../../../SiteLoader/SiteLoader";

// Import Context
import { Context } from "../../../../Context/LangContext";
import { ContextLine } from "../../../../Context/LineText";
import content from "../../../../Localization/content";

function XamkorliklarInner() {

    // .ENV
    let url = process.env.REACT_APP_URL;
    let httpUrl = process.env.REACT_APP_HTTPS;
    const { contentSlug } = useParams()
    // Lang State
    const { lang, setLang } = useContext(Context);
    const { setText } = useContext(ContextLine);
    setText(content[lang]?.VHamkorlik)
    const [loading, setLoading] = useState(true)

    // Post Data
    const [postInnerData, setPostInnerData] = useState([]);

    const metaDescrip = document.querySelector('meta[name="description"]')
    metaDescrip.content = `${postInnerData?.meta_description}`

    const metaKey = document.querySelector('meta[name="keywords"]')
    metaKey.content = `${postInnerData?.meta_keywords}`

    useEffect(() => {
        axios.get(`${url}partners/${contentSlug}`).then((res) => {
            setPostInnerData(res?.data?.data)
        }).catch((error) => {
            alert('xatolik!!')
        }).finally(() => {
            setLoading(false);
            document.body.style.overflow = 'auto'
        })
    }, [])

    return (
        <>
            {
                loading ? (
                    <SiteLoader />
                ) : (
                    <section className="cooperation-inner">
                        <div className="cooperation-inner__meta">
                            <div className="cooperation-inner__date"><ion-icon name="today-outline"></ion-icon>{`${postInnerData?.created_at?.slice(8, 10)}.${postInnerData?.created_at?.slice(5, 7)}.${postInnerData?.created_at?.slice(0, 4)}`}</div>
                            <div className="cooperation-inner__view"><ion-icon name="time-outline"></ion-icon>{`${postInnerData?.created_at?.slice(12, 16)}`}</div>
                        </div>
                        <h2 className="cooperation-inner__title">
                            {postInnerData?.[`title_${lang}`]?.slice(0, 120)}
                        </h2>
                        <p className="cooperation-inner__desc">
                            {postInnerData?.[`description_${lang}`]?.slice(0, 120)}
                        </p>
                        <img className="cooperation-inner__img" src={`${httpUrl}${postInnerData?.image}`} alt="img" width={950} />
                        <div className="new-item__p">
                            <p dangerouslySetInnerHTML={{ __html: postInnerData?.[`body_${lang}`] }}></p>
                        </div>
                    </section>
                )
            }
        </>
    )
}

export default XamkorliklarInner