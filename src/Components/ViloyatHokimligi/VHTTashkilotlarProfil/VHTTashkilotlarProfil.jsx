// Import React
import { useEffect, useContext, useState } from "react";
import { useLocation } from "react-router-dom";

// Import Pack
import axios from "axios";

// Import Contexts
import { ContextLine } from "../../../Context/LineText";
import { Context } from '../../../Context/LangContext';
import content from '../../../Localization/content';

// Import Components
import "./VHTTashkilotlarProfil.scss";
import SiteLoader from "../../SiteLoader/SiteLoader";

function VHTTashkilotlarProfil() {

    // APi
    let url = process.env.REACT_APP_URL;
    let httpUrl = process.env.REACT_APP_HTTPS;

    const { state } = useLocation()

    // Api State
    const [organizationsSlugData, setOrganizationsSlugData] = useState([])

    // Loader
    const [loader, setLoader] = useState(true);

    // Context
    const { lang, setLang } = useContext(Context);
    const { setText } = useContext(ContextLine)
    setText(content[lang]?.МViloyatHokimligiTasarrufidagiTashkilotlar)

    useEffect(() => {
        axios.get(`${url}organizations/${state}`).then((res) => {
            setOrganizationsSlugData(res.data?.data)
        }).catch((error) => {
            console.log('Xatolik Yuzberdi');
        }).finally(() => {
            setLoader(false)
            document.body.style.overflow = 'auto';
        })
    }, [])

    const dataIcon = [
        {
            icon: <i class="bi bi-telegram"></i>,
            link: organizationsSlugData?.director_telegram,
        },
        {
            icon: <i class="bi bi-instagram"></i>,
            link: organizationsSlugData?.director_facebook,
        },
        {
            icon: <i class="bi bi-facebook"></i>,
            link: organizationsSlugData?.director_instagram,
        },
    ]

    return (
        <>
            <section className="organizations-profil">
                {
                    loader ? (
                        <SiteLoader />
                    ) : (
                        <>
                            <div className="organizations-profil__top">
                                <img src={`${httpUrl}${organizationsSlugData?.director_image}`} alt="" width={315} height={370} />

                                <div className="organizations-profil__top-right">
                                    <h4>{organizationsSlugData?.director}</h4>
                                    <p>
                                        {organizationsSlugData?.[`director_info_${lang}`]?.slice(0, 120)}
                                    </p>

                                    {/* ========TASHKILOT INFONI ICHIDAGI SOCIAL MEDIA VA NUMBER KISMI=========== */}
                                    <div className="organizations-profil__top-right-bottom">
                                        <ul className="organizations-profil__top-right-bottom-list">
                                            {
                                                dataIcon.map((dat, index) => {
                                                    return (
                                                        <li key={index}>
                                                            <a href={dat.link} target={'_blank'}>
                                                                {dat.icon}
                                                            </a>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>

                                        <a href={`tel:${organizationsSlugData?.phone}`}>{organizationsSlugData?.phone}</a>
                                    </div>
                                </div>
                            </div>

                            <div className="organizations-profil__info">
                                <h3 className="organizations-profil__info-title">Tashkilot Nizomi</h3>

                                <ul className="organizations-profil__info-list">
                                    <li className="organizations-profil__info-item">
                                        <div>{content[lang]?.Vmanzil}</div>
                                        <p>
                                            {organizationsSlugData?.[`addres_${lang}`]?.slice(0, 120)}
                                        </p>
                                    </li>
                                    <li className="organizations-profil__info-item">
                                        <div>Telefon</div>
                                        <a href={`tel:${organizationsSlugData?.phone}`}>{organizationsSlugData?.phone}</a>
                                    </li>
                                    <li className="organizations-profil__info-item">
                                        <div>Faks</div>
                                        <a href={`tel:${organizationsSlugData?.fax}`}>{organizationsSlugData?.fax}</a>
                                    </li>
                                    <li className="organizations-profil__info-item">
                                        <div>Web Sayt</div>
                                        <a href={`${organizationsSlugData?.website}`} target={'_blank'}>{organizationsSlugData?.website}</a>
                                    </li>
                                    <li className="organizations-profil__info-item">
                                        <div>E-mail</div>
                                        <a href={`mailto:${organizationsSlugData?.email}`}>
                                            {organizationsSlugData?.email}
                                        </a>
                                    </li>
                                    <li className="organizations-profil__info-item">
                                        <div>Fuqarolarni qabul qilish vaqti</div>
                                        <p>
                                            {organizationsSlugData?.[`reception_time_${lang}`]?.slice(0, 120)}
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </>
                    )
                }
            </section>
        </>
    )
}

export default VHTTashkilotlarProfil