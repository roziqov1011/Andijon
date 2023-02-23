import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Context } from "../../../Context/LangContext";
import { ContextLine } from "../../../Context/LineText";
import content from "../../../Localization/content";
import "./TenderSavdolari.scss";

function TenderSavdolari() {
  const { lang } = useContext(Context)
  const { setText } = useContext(ContextLine);
  const { state } = useLocation()
  setText(content[lang]?.Tender_savdolari);

  return (
    <div className="TenderSavdolari">
      <h3>{state?.[`title_${lang}`]}</h3>
      <span>{state?.[`body_${lang}`]}</span>
    </div>
  );
}

export default TenderSavdolari;
