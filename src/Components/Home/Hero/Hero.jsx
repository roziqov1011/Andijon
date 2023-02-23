// Impotr React
import { useEffect, useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";

// IMport Components
import Container from "../../Container/Container"
import "../Hero/Hero.scss"

// Import Lang
import { Context } from "../../../Context/LangContext";
import content from "../../../Localization/content";
import SiteLoader from "../../SiteLoader/SiteLoader";
import axios from "axios";


function Hero() {

    // APi
    let url = process.env.REACT_APP_URL;
    let httpUrl = process.env.REACT_APP_HTTPS;

    // API data State
    // const [data, setData] = useState([])
    const [specialData, setSpecialData] = useState([])
    const [loading, setLoading] = useState(true)

    // Lang State
    const { lang, setLang } = useContext(Context);
    const elSliderContainer = useRef()
    const ref1 = useRef()

    // const elNoName 

    useEffect(() => {
        return () => {
            elSliderContainer.current?.classList?.add('active');
        };
    }, [loading, setLoading]);

    useEffect(() => {
        axios.get(`${url}posts/special`).then((res) => {
            setSpecialData(res.data.data)
        }).finally(() => {
            setLoading(false);
        })
    }, [])



    const navigate = useNavigate();

    const toDetalsData = (item) => {
        navigate(`/v-governorship/post/${item.slug}`)
    }

    return (
        <>
            <section className="hero">
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner" >
                        {
                            loading ? (
                                <SiteLoader />
                            ) : (
                                <div >
                                    {
                                        specialData?.map((inner, index) => {
                                            return (
                                                <div ref={index === 0 ? elSliderContainer : ref1} className="carousel-item" key={inner?.id}>
                                                    <div className="hero__bg" style={{ backgroundImage: `url(${httpUrl}${inner?.image})` }}></div>
                                                    <Container>
                                                        <p className="hero__title">
                                                            {inner?.[`title_${lang}`]?.slice(0, 100)}...
                                                        </p>
                                                        <button className="hero__btn" onClick={() => toDetalsData(inner)}>{content[lang]?.indetail}</button>
                                                    </Container>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        }
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </button>
                </div>

            </section>
        </>
    )
}

export default Hero