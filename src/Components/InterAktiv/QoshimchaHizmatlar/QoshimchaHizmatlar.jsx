import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../Context/LangContext";
import { ContextLine } from "../../../Context/LineText";
import content from "../../../Localization/content";
import SiteLoader from "../../SiteLoader/SiteLoader";
import SocialMedia from "../../SocialMedia/SocialMedia";
import "./QoshimchaHizmatlar.scss";

function QoshimchaHizmatlar() {
  const { lang } = useContext(Context);
  const [loader, setLoader] = useState(true);

  let url = process.env.REACT_APP_URL;
  const navigate = useNavigate();
  const { setText } = useContext(ContextLine);
  const [data, setData] = useState();
  setText(content[lang]?.Qoshimcha_xizmatlar);

  useEffect(() => {
    fetch(`${url}extra-services`)
      .then((res) => res.json())
      .then((data) => setData(data.data))
      .catch(function (error) {
        alert("Malumot Olishda Xatolik Yuzberdi");
      })
      .finally(() => {
        setLoader(false);
        document.body.style.overflow = "auto";
      });
  }, []);
  const handlerNavigate = (e) => {
    navigate("/inter-aktiv/tenders", { state: e });
  };
  return (
    <div className="QoshimchaHizmatlar">
      <h2>Fuqarolar uchun</h2>
      <ul className="QoshimchaHizmatlar__list">
        {loader ? (
          <SiteLoader />
        ) : (
          data &&
          data.map((e, i) => (
            <li key={i}>
              <button href="#" onClick={() => handlerNavigate(e)}>
                {e?.[`title_${lang}`]}
              </button>
            </li>
          ))
        )}
      </ul>

      <SocialMedia
        view={"50"}
        created_at={`${data?.updated_at?.slice(
          0,
          10
        )} ${data?.updated_at?.slice(11, 16)}`}
      />
    </div>
  );
}

export default QoshimchaHizmatlar;
