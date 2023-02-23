// Import React
import { useContext, useState, useEffect } from "react";

// Import Components
import "../ViloyatTarkib/ViloyatTarkib.scss";
import SiteLoader from "../SiteLoader/SiteLoader"

// Import Lang
import { Context } from '../../Context/LangContext';
import content from "../../Localization/content";

function ViloyatTarkib() {

    // APi
    let url = process.env.REACT_APP_URL;
    let httpUrl = process.env.REACT_APP_HTTPS;

    // Lang State
    const { lang, setLang } = useContext(Context);

    // Api State
    const [councilsData, setCouncilsData] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        fetch(`${url}councils`).then(response => response.json())
            .then((data) => {
                setCouncilsData(data?.data)
            }).finally(() => {
                setLoader(false)
                document.body.style.overflow = 'auto';
            })
    }, [])

    return (
        <section className="viloyat-tarkib">
            <h1 className="viloyat-tarkib__title">{councilsData[0]?.title_uz}</h1>
            <h3 className="viloyat-tarkib__h3">{content[lang]?.Tarkib}</h3>

            <ul className="viloyat-tarkib__list">
                {
                    loader ? (
                        <SiteLoader />
                    ) : (
                        councilsData[0]?.members?.map((data) => {

                            return (
                                <li className="viloyat-tarkib__item" key={data.id}>
                                    {
                                        data.image == undefined || null ? (
                                            <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png' alt="img" width={120} height={120} />
                                        ) : (
                                            <img src={`${httpUrl}${data?.image}`} alt="img" width={120} height={120} />
                                        )
                                    }

                                    <div className="viloyat-tarkib__item-box">
                                        <h4>
                                            {data?.[`name_${lang}`]?.slice(0,120)}
                                        </h4>
                                        <p>
                                            {data?.[`description_${lang}`]?.slice(0,120)}
                                        </p>
                                        <hr />
                                        <div className="viloyat-tarkib__item-link">
                                            <a className="viloyat-tarkib__item-til" href={`tel: ${data?.phone}`}>
                                                <ion-icon name="call-sharp"></ion-icon>
                                                {data?.phone}
                                            </a>
                                            <a className="viloyat-tarkib__item-email" href={`mailto: ${data.email}`}>
                                                <ion-icon name="mail-sharp"></ion-icon>
                                                {data?.email}
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    )
                }
            </ul>
        </section>
    )
}

export default ViloyatTarkib