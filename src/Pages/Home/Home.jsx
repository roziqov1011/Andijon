// Import React
import { useState, useEffect } from "react";
import Container from "../../Components/Container/Container";

// Import Components
import FoydaliSaytlar from "../../Components/Home/FoydaliSaytlar/FoydaliSaytlar";
import Hero from "../../Components/Home/Hero/Hero";
import Hxabarlar from "../../Components/Home/Hxabarlar/Hxabarlar";
import HXizmatlar from "../../Components/Home/HXizmatlar/HXizmatlar";

import HYashilMakon from "../../Components/Home/HYashilMakon/HYashilMakon";
import QoshimchaXizmatlar from "../../Components/Home/QoshimchaXizmatlar/QoshimchaXizmatlar";
import Questionnaires from "../../Components/Home/Questionnaires/Questionnaires";
import XaritaMain from "../../Components/Xarita/Xarita";

function Home() {


    return (
        <>
            <Hero />
            <Hxabarlar />
            <HXizmatlar />
            <HYashilMakon />
            <Container>
                <XaritaMain />
            </Container>
            <Questionnaires />
            <QoshimchaXizmatlar />
            <FoydaliSaytlar />
        </>
    )
}

export default Home

