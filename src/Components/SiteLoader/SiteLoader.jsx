// Import React
import React from "react";

// Import Components
import "./SiteLoader.scss";
import LoaderGif from "../../Assets/Gif/loader-3.gif";


function SiteLoader() {

    const elSvg = document.querySelectorAll("#logo path");

    for (let i = 0; i < elSvg.length; i++) {
        console.log(`${i} ${elSvg[i].getTotalLength()}`);
    }

    document.body.style.overflow = 'hidden';

    return (
        <section className="loader">
            <img className="loader__img" src={LoaderGif} alt="loader-gif" width={110} height={110} />
        </section>
    )
}

export default SiteLoader