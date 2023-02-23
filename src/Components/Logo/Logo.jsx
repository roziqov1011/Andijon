// Import React 
import React,{useContext,} from "react";

// Import Components
import  "../Logo/Logo.scss";
import { Context } from "../../Context/LangContext";
import content from "../../Localization/content";

// Import Img
import LogoImg from "../../Assets/Svg/new-logo.svg";

function Logo() {

    const { lang } = useContext(Context);

    return (
        <>
            <div className="logo">
                <img className="logo__img" src={LogoImg} alt="logo" width={195} height={80} />
                <div className="logo__text">{content[lang]?.logo}</div>
            </div>
        </>
    )
}

export default Logo