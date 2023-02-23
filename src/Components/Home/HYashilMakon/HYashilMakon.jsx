// Import React 
import { useContext } from "react";

// Import Components
import "./HYashilMakon.scss";
import Container from "../../Container/Container";

// Import Lang
import { Context } from "../../../Context/LangContext";
import content from "../../../Localization/content";

// IMport Img 
import Logo from "../../../Assets/Img/yashil-makon-logo.png";

function HYashilMakon() {

    const { lang, setLang } = useContext(Context);

    return (
        <Container>
            <section className="hyashil">
                <div className="hyashil__box">
                    <img src={Logo} alt="img" />
                    <p>{content[lang]?.hyashilmakonTitle}</p>
                    <a href="http://yashilmakon.eco/#/ecofund-plantings/plantings-pop/eyJpZCI6MTA4LCJwbGFudGluZ19wbGFjZXNfdHlwZXNfaWQiOm51bGwsImJyYW5jaGVzX2xldmVsIjoyLCJwYXJlbnRfaWQiOjZ9" target={'_blank'}>{content[lang]?.view}</a>
                </div>
            </section>
        </Container>

    )
}

export default HYashilMakon