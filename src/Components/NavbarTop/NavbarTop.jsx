// Import React
import React, { useState, useRef, useContext } from 'react';
import { NavLink } from 'react-router-dom';

// Import Pack
import WeatherNav from "../WeatherNav/WeatherNav";
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import Select from 'react-select';

// Import Components
import "../NavbarTop/NavbarTop.scss";
import { Context } from "../../Context/LangContext";
import content from "../../Localization/content";

function NavbarTop() {

    const { lang, setLang } = useContext(Context);
    const [show, setShow] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };

    const Selecting = (e) => {
        setLang(e.value)
    }

    const options = [
        { value: 'uz', label: 'O‘zbekcha' },
        { value: 'kr', label: 'Ўзбекча' },
        { value: 'ru', label: 'Русский' },
        { value: 'en', label: 'English' },
    ];

    const customStyles = {
        menu: (provided, state) => ({
            ...provided,
            width: '110px',
            padding: 5,
        }),
    }



    // TODO ESLATMA FOYDALI FUNCTION
    // function openWin() {
    //     window.open(window.location.href, "_blank", "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=350, height=400");
    // }

    return (
        <>

            <div className="navbar-top">

                <ul>
                    <li>
                        <NavLink to={'/'}>
                            <button>{content[lang]?.homepage}<ion-icon name="home-outline"></ion-icon></button>
                        </NavLink>
                    </li>
                    <li>
                        <button data-bs-toggle="modal" href="#exampleModal" role="button">{content[lang].specialopportunities}<ion-icon name="eye-outline"></ion-icon></button>
                    </li>
                    <li>
                        <div ref={ref}>
                            <button onClick={() => {
                                window.open(window.location.href, "_blank", "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=350, height=600");
                            }}>
                                {content[lang].mobile_version}
                                <ion-icon name="phone-portrait-outline"></ion-icon>
                            </button>
                        </div>
                    </li>
                    <li>
                        <Select
                            defaultValue={lang == 'uz' ? "UZ" : lang == 'kr' ? 'УЗ' : 'EN'}
                            placeholder={lang == 'uz' ? "O‘zbekcha" : lang == 'kr' ? 'Ўзбекча' : lang == 'en' ? "English" : lang == 'ru' ? 'Русский' : ''}
                            styles={customStyles}
                            // onChange={setSelectedOption}
                            options={options}
                            onChange={(evt) => Selecting(evt)}
                            isSearchable={false}
                            width='250px'
                        />
                    </li>
                </ul>

            </div>
        </>
    )
}

export default NavbarTop