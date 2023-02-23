// IMport React
import { useState, useContext } from "react";
import Container from "../../Container/Container";

import AssdeVoting from "../../AssideVoting/AssideVoting.jsx"
// IMport Components
import { Context } from "../../../Context/LangContext";
import content from "../../../Localization/content";
import "./Questionnaires.scss";

function Questionnaires() {

    const {lang} = useContext(Context)

    return (
        <Container>
            <section className="questionnaires">

                <div className="questionnaires__left">
                    <div className="questionnaires__left-title">{content[lang].Sorovnomalar}</div>
                    <div className="questionnaires__left-desc">
                        Hokimiyat tomonidan e’lon qilinayotgan so‘rovnomalarda
                        faol bo‘ling, befarq bo‘lmang, sizning fikringiz biz uchun juda muhim!
                    </div>
                </div>

                <AssdeVoting />

            </section>
        </Container>
    )
}

export default Questionnaires