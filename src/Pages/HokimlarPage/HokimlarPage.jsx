// Import React
import {useState, useEffect, useContext} from "react";
import { Container } from "react-bootstrap";

// IMport Components
import Hokimlar from "../../Components/ViloyatHokimligi/Hokimlar/Hokimlar"

import {Context} from "../../Context/LangContext";
import content from "../../Localization/content";

function HokimlarPage() {

    const {lang} = useContext(Context);

    return (
        <>
            <Container>
                <h1 className='hokimlar__title'>{content[lang]?.andijan_hokim}</h1>
                <Hokimlar />
            </Container>
        </>
    )
}

export default HokimlarPage