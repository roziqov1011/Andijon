// Import React
import { useContext } from "react";

// Import Lang
import { Context } from '../../Context/LangContext';

// IMport Components
import "./ListCard.scss";

function ListCard({ data }) {

    // Lang State
    const { lang, setLang } = useContext(Context);

    return (
        <section className="list-card">
            <ul className="list-card__list">
                {
                    data?.map((item) => {
                        return (
                            <li className="list-card__item" key={item.id}>
                                <p className="list-card__doc-title">
                                    {item?.[`title_${lang}`]?.slice(0,120)}
                                </p>
                                <a className="list-card__link" href={item.file} download>Yuklab Olish</a>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default ListCard