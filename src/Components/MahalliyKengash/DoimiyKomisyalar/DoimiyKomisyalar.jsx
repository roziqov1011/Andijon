import { useContext, useEffect, useState } from 'react'

// Import Contexts
import { ContextLine } from "../../../Context/LineText";
import { Context } from '../../../Context/LangContext';
import content from '../../../Localization/content';

// Import Pack
import axios from 'axios';

// Import Components
import './DoimiyKomisyalar.scss';
import SiteLoader from '../../SiteLoader/SiteLoader';

function DoimiyKomisyalar() {

    // Api
    const url = process.env.REACT_APP_URL
    const httpUrl = process.env.REACT_APP_HTTPS;

    // Contexts
    const { lang } = useContext(Context);
    const { setText } = useContext(ContextLine)
    setText(content[lang]?.Doimiy_komisyalar)

    const [comissionsData, setComissionsData] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        axios.get(`${url}comissions`).then((res) => {
            setComissionsData(res.data?.data)
        }).catch(function (error) {
            alert('Malumot Olishda Xatolik Yuberdi :pensive:')
        }).finally(() => {
            setLoader(false);
            document.body.style.overflow = 'auto';
        })
    }, [])

    return (
        <div className='comissions'>
            <h3 className='comissions__title'>
                {comissionsData[0]?.comissions?.[`title_${lang}`]}
            </h3>
            <h4>{content[lang]?.Tarkib}</h4>
            <ul className="comissions__list">
                {
                    loader ? (
                        <SiteLoader />
                    ) : (
                        comissionsData[0]?.comissions.members.map((data) => {
                            return (
                                <li className="comissions__item" key={data.id}>
                                    {
                                        data.image == undefined || null ? (
                                            <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png' alt="img" width={120} height={120} />
                                        ) : (
                                            <img src={`${httpUrl}${data?.image}`} alt="img" width={120} height={120} />
                                        )
                                    }

                                    <div className="comissions__item-box">
                                        <h4>
                                            {data?.[`name_${lang}`]?.slice(0,120)}
                                        </h4>
                                        <p>
                                            {data?.[`description_${lang}`]?.slice(0,120)}
                                        </p>
                                        <hr />
                                        <div className="comissions__item-link">
                                            <a className="comissions__item-til" href={`tel: ${data?.phone}`}>
                                                <ion-icon name="call-sharp"></ion-icon>
                                                {data?.phone}
                                            </a>
                                            <a className="comissions__item-email" href={`mailto: ${data.email}`}>
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
        </div>
    )
}

export default DoimiyKomisyalar