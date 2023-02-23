import { memo } from "react";
import "./Hline.scss";

function Hline({ title }) {

    return (
        <section className="h-line">
            <h2>{title}</h2>
            <hr />
        </section>
    )
}

export default memo(Hline)