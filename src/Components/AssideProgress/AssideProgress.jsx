import { useContext } from "react";

// Importy Components
import { Context } from "../../Context/LangContext";
import content from "../../Localization/content";
import "./AssideProgress.scss";

function AssideProgres() {

    const {lang} = useContext(Context)

    return (
        <>
            <section className="aside-telegram">
                <h4 className="aside-telegram__title">{content[lang]?.Andijon_viloyatni_rasmi_telegram_kanali}</h4>
                <a href="https://t.me/andijan_press" target={'_blank'} className="aside-telegram__link">{content[lang]?.Azo}</a>
            </section>
        </>
    )
}

export default AssideProgres