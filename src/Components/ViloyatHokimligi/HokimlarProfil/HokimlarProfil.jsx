// Import React
import { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Import Components
import "./HokimlarProfil.scss";
import Container from "../../Container/Container";
import SiteLoader from "../../SiteLoader/SiteLoader";

// Import Lang
import { Context } from '../../../Context/LangContext';


function HokimlarProfil() {

    // .ENV
    let url = process.env.REACT_APP_URL;
    let httpUrl = process.env.REACT_APP_HTTPS;

    // Lang State
    const { lang, setLang } = useContext(Context);

    const { state } = useLocation()

    // Api Data State
    const [governorsData, setGovernorsData] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        fetch(`${url}governors`).then((response) => response.json())
            .then((data) => {
                setGovernorsData(data.data)
            }).finally(() => {
                setLoader(false)
                document.body.style.overflow = 'auto'
            })
    }, [])

    const navigate = useNavigate();

    const toDetalsData = (item) => {
        navigate(`/hokimlar-profil/${item.id}`, { state: item })
    }

    return (
        <Container>
            <section className="hokimlar-profil">
                <div className="hokimlar-profil__content">
                    <img className="hokimlar-profil__content-img" src={`${httpUrl}${state?.image}`} alt="hokimlar-img" width={315} height={350} />
                    <div className="hokimlar-profil__content-box">
                        <h2 className="hokimlar-profil__content-box-name">
                            {state?.[`title_${lang}`]?.slice(0, 120)}
                        </h2>
                        <h6 className="hokimlar-profil__content-box-des">
                            {state?.[`position_${lang}`]?.slice(0, 120)}
                        </h6>
                        <div>
                            <p dangerouslySetInnerHTML={{ __html: state?.[`body_${lang}`]?.slice(0, 120)}}></p>
                        </div>
                    </div>
                </div>

                <div className="hokimlar-profil__main">
                    <ul className="hokimlar-profil__main-list">
                        {
                            loader ? (
                                <SiteLoader />
                            ) : (
                                governorsData?.map((data) => {
                                    if (data.id !== state.id) {
                                        return (
                                            <>
                                                <li className='hokimlar-profil__main-item' key={data.id} onClick={() => toDetalsData(data)}>
                                                    <img className='hokimlar-profil__main-img' src={`${httpUrl}${data?.image}`} alt="img" width={200} height={250} />
                                                    <h5 className='hokimlar-profil__main-name'>
                                                        {data?.[`name_${lang}`].slice(0, 120)}
                                                    </h5>
                                                    <p className='hokimlar-profil__main-district'>
                                                        {data?.[`position_${lang}`]?.slice(0, 120)}
                                                    </p>
                                                </li>
                                            </>
                                        )
                                    } else {
                                        console.log('');
                                    }
                                })
                            )
                        }
                    </ul>
                </div>
            </section>
        </Container>
    )
}

export default HokimlarProfil