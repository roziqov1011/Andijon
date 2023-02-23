// IMport React
import { useContext, memo } from "react";
import { Link } from "react-router-dom";

// Import Components
import { ContextLine } from "../../Context/LineText";
import {Context} from "../../Context/LangContext";
import content from "../../Localization/content";
import "./Line.scss";

function Line() {
    const { text } = useContext(ContextLine)
    const {lang} = useContext(Context)
    return (
        <div className="line-box">
            <div className="line__wrapper">
                {/* <p>{text?.split(' ')?.splice(0, 5).join(' ')} {text.length > 40 ? '...' : '' }</p> */}
                <p>{text}</p>
                <span className="line__inner">
                    <Link to={'/inter-aktiv/citizens'}>
                        <button className="line__fuqoro">{content[lang]?.Fuqarolar_murojatlar}</button>
                    </Link>
                    <button className="line__yagona">{content[lang]?.Yagona_telefon_reglamenti}</button>
                </span>
            </div>
            <hr />
        </div>
    )
}

export default memo(Line)