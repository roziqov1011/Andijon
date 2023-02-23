// Import React
import { useContext, useEffect, useState } from "react";
import { useNavigate, Link} from "react-router-dom";

// IMport Lang
import { Context } from "../../../Context/LangContext";
import content from "../../../Localization/content";

// Import Components
import Container from "../../Container/Container";
import Line from "../../Line/Line";
import "./Hxabarlar.scss";

// Import Pack
import SiteLoader from "../../SiteLoader/SiteLoader";
import Hline from "../Hline/Hline";
import axios from "axios";


function Hxabarlar() {

    // APi
    let url = process.env.REACT_APP_URL;
    let httpUrl = process.env.REACT_APP_HTTPS;

    // Post Data
    const [postData, setPostData] = useState([]);
    const [loading, setLoading] = useState(true)
    
    // Lang
    const { lang, setLang } = useContext(Context);

    useEffect(() => {
        axios.get(`${url}posts`).then((res) => {
            setPostData(res?.data?.data)
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
        navigate(`/v-governorship/post/${item.slug}`)
    }

    return (
        <Container>

            <section className="h-messages">
                <Hline title={content[lang]?.messages} />
                {/* <h4 className="h-messages__title">{content[lang].hxabarlarTitle}</h4> */}
                <ul className="h-messages__list">
                    {
                        loading ? (
                            <SiteLoader />
                        ) : (
                            postData?.slice(0, 6)?.map((item) => {
                                return (
                                    <li className="h-messages__item" key={item?.id} onClick={() => toDetalsData(item)}>
                                        <img className="h-messages__img" src={`${httpUrl}${item?.image}`} alt="img" width={440} height={280} />

                                        <div className="h-messages__item-content">
                                            <h5 className="h-messages__item-content-title">
                                                {item?.[`title_${lang}`]?.slice(0,100)}..
                                            </h5>

                                            <div className="h-messages__item-bottom">
                                                {/* <span className="h-messages__item-bottom-new">News</span> */}

                                                <div className="h-messages__item-bottom-box">
                                                    <div><ion-icon name="calendar-outline"></ion-icon>{` ${item?.created_at.slice(8, 10)}.${item?.created_at.slice(5, 7)}.${item?.created_at.slice(0, 4)}`}</div>
                                                    <div><ion-icon name="eye-outline"></ion-icon>{item?.view}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        )
                    }
                </ul>

                <Link to='/v-governorship/posts' className="h-messages__btn">{content[lang]?.indetail}</Link>
            </section>
        </Container>
    )
}

export default Hxabarlar