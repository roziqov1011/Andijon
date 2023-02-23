// Import React
import { useContext, useEffect, useState } from "react";

// Import Components
import Container from "../../Container/Container";
import "./FoydaliSaytlar.scss";
import Hline from "../Hline/Hline";

// Import Lang
import { Context } from "../../../Context/LangContext";
import content from "../../../Localization/content";

// IMport Pack
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from "axios";

function FoydaliSaytlar() {
    // APi
    let url = process.env.REACT_APP_URL;
    let httpUrl = process.env.REACT_APP_HTTPS;

    // API data State
    // const [data, setData] = useState([])
    const [specialData, setSpecialData] = useState([])
    const [loading, setLoading] = useState(true)

    // Lang State
    const { lang, setLang } = useContext(Context);

    useEffect(() => {
        axios.get(`${url}sites`).then((res) => {
            setSpecialData(res.data.data)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    return (
        <>
            <section className="useful-sites">

                <Container>

                    <Hline title={content[lang]?.hfoydaliSayt} />

                    <ul className="useful-sites__list">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={40}
                            slidesPerView={6}
                            navigation
                            breakpoints={{
                                190: {
                                    slidesPerView: 1,
                                    spaceBetween: 50,
                                },
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                425: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 5,
                                    spaceBetween: 50,
                                },
                            }}
                        >
                            {
                                specialData?.map((item) => {
                                    return (
                                        <SwiperSlide className="useful-sites__swiper" key={item?.id}>
                                            <li className="useful-sites__item"  onClick={item.link}>
                                                <img className="useful-sites__item-img" src={`${httpUrl}${item?.image}`} alt="logo" width={100} height={100} />
                                                <div className="useful-sites__item-title">{item?.[`title_${lang}`].slice(0, 70)}</div>
                                                <a className="useful-sites__item-btn" href={item?.link} target={'_blank'}>{content[lang]?.Sayitga_kirish}</a>
                                            </li>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </ul>
                </Container>
            </section>
        </>
    )
}

export default FoydaliSaytlar
