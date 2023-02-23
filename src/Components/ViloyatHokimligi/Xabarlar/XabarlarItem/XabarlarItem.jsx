// Import React
import { useContext, useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

// IMport Pack
import axios from "axios";

// Import Components
import "./XabarlarItem.scss";
import SiteLoader from "../../../SiteLoader/SiteLoader";

// Import Context
import { Context } from "../../../../Context/LangContext";
import { ContextLine } from "../../../../Context/LineText";
import content from "../../../../Localization/content";

function XabarlarItem() {

    // .ENV
    let url = process.env.REACT_APP_URL;
    let httpUrl = process.env.REACT_APP_HTTPS;
    const { contentId } = useParams()

    // Lang State
    const { lang, setLang } = useContext(Context);
    const { setText } = useContext(ContextLine);
    setText(content[lang]?.messages)
    const [loading, setLoading] = useState(true)

    // Post Data
    const [postInnerData, setPostInnerData] = useState([]);

    const metaDescrip = document.querySelector('meta[name="description"]')
    metaDescrip.content = `${postInnerData?.meta_description}`

    const metaKey = document.querySelector('meta[name="keywords"]')
    metaKey.content = `${postInnerData?.meta_keywords}`

    useEffect(() => {
        // console.log('aa');
        axios.get(`${url}posts/${contentId}`).then((res) => {
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
                    <section className="news-item">
                        <div className="news-item__meta">
                            <div className="news-item__date"><ion-icon name="today-outline"></ion-icon>{`${postInnerData?.created_at?.slice(8, 10)}.${postInnerData?.created_at?.slice(5, 7)}.${postInnerData?.created_at?.slice(0, 4)}`}</div>
                            <div className="news-item__view"><ion-icon name="time-outline"></ion-icon>{`${postInnerData?.created_at?.slice(12, 16)}`}</div>
                            <div className="news-item__view"><ion-icon name="eye-outline"></ion-icon>{postInnerData?.view}</div>
                        </div>
                        <h2 className="news-item__title">
                            {lang == "uz" ? postInnerData?.title_uz : lang !== "ru" ? postInnerData?.title_en : postInnerData?.title_ru}
                        </h2>
                        <p className="news-item__desc">
                            {lang == "uz" ? postInnerData?.description_uz : lang !== "ru" ? postInnerData?.description_en : postInnerData?.description_ru}
                        </p>
                        <img className="news-item__img" src={`${httpUrl}${postInnerData?.image}`} alt="img" width={950} />
                        <div className="new-item__p">
                            <p dangerouslySetInnerHTML={{ __html: lang == "uz" ? postInnerData?.body_uz : lang !== "ru" ? postInnerData?.body_en : postInnerData?.body_ru }}></p>
                        </div>
                    </section>
                )
            }
        </>
    )
}

export default XabarlarItem