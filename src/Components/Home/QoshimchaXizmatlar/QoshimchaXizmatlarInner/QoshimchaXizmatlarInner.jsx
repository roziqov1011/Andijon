// Import React
import { useContext } from "react";
import {useLocation} from "react-router-dom";

// Import Components
import "./QoshimchaXizmatlarInner.scss";

// Import Context
import { Context } from "../../../../Context/LangContext";
import { ContextLine } from "../../../../Context/LineText";
import content from "../../../../Localization/content";

function QoshimchaXizmatlarInner() {

    const { state } = useLocation()

    const { lang, setLang } = useContext(Context);
    const { setText } = useContext(ContextLine);
    setText(state.type == '1' ? content[lang]?.Murojat_markazi2 : state.type == '2' ? content[lang]?.Murojat_markazi3 : '')

    const metaDescrip = document.querySelector('meta[name="description"]')
    metaDescrip.content = `${state?.meta_description}`

    const metaKey = document.querySelector('meta[name="keywords"]')
    metaKey.content = `${state?.meta_keywords}`

    return (
        <>
            {
                <section className="news-item">
                    <h2 className="news-item__title">
                        {lang == "uz" ? state?.title_uz : lang !== "ru" ? state?.title_en : state?.title_ru}
                    </h2>
                    <div className="new-item__p">
                        <p dangerouslySetInnerHTML={{ __html: lang == "uz" ? state?.body_uz : lang !== "ru" ? state?.body_en : state?.body_ru }}></p>
                    </div>
                </section>
            }
        </>
    )
}

export default QoshimchaXizmatlarInner