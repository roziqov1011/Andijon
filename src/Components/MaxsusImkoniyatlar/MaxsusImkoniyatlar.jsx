// IMport React
import { useRef, useState, useEffect } from "react";

// Import Components
import "./MaxsusImkoniyatlar.scss";

function MaxsusImkoniyatlar() {

    const [rangeval, setRangeval] = useState(null);

    const elBody = document.body
    const elInputRang = useRef()

    var root = document.getElementsByTagName('html')[0];

    const myGrayscaleOne = localStorage.getItem('myGrayscale50');
    root.classList.add(myGrayscaleOne);

    const myGrayscaleTwo = localStorage.getItem('myGrayscale100');
    root.classList.add(myGrayscaleTwo);

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    // const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    return (
        <>
            <h4 className="maxsus-title">Кўриниш</h4>
            <button className="maxsus-btn maxsus-btn--blue" data-toggle="tooltip" onClick={() => {
                root.classList.remove("grayscale50")
                root.classList.remove("grayscale100")
                localStorage.removeItem('myGrayscale50');
                localStorage.removeItem('myGrayscale100');
            }}>A</button>
            <button className="maxsus-btn maxsus-btn--grey" onClick={() => {
                root.classList.add("grayscale50");
                root.classList.remove("grayscale100");
                localStorage.setItem('myGrayscale50', 'grayscale50');
                localStorage.removeItem('myGrayscale100');
            }}>A</button>
            <button className="maxsus-btn  maxsus-btn--black" onClick={() => {
                // document.html.style.filter = ' grayscale(50%)'
                localStorage.setItem('myGrayscale100', 'grayscale100');
                root.classList.add("grayscale100")
            }}>A</button>
            {/* <h4 className="maxsus-title">Шрифт ўлчами</h4> */}
            {/* <p className="maxsus-desc">{rangeval}% га катталаштириш</p> */}
            {/* <input ref={elInputRang} className="maxsus-input-range" type="range" min="0" max="100" orient="vertical" onChange={(event) => setRangeval(event.target.value)} /> */}
        </>
    )
}

export default MaxsusImkoniyatlar