import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../Context/LangContext";
import { ContextLine } from "../../../Context/LineText";
import content from "../../../Localization/content";
import SiteLoader from "../../SiteLoader/SiteLoader";
import SocialMedia from "../../SocialMedia/SocialMedia";
import "./FuqarolarUchun.scss";

function FuqarolarUchun() {
  const { lang } = useContext(Context);
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  const [data, setData] = useState();
  const { setText } = useContext(ContextLine);
  setText(content[lang]?.Fuqarolar_uchun);

  let url = process.env.REACT_APP_URL;
  useEffect(() => {
    fetch(`${url}citizens`)
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

  const handlerNavigate = (state) => {
    navigate("/inter-aktiv/services-restri", { state });
  };
  return (
    <div className="fuqarolar_uchun">
      <div className="fuqorolar__inner">
        {loader ? (
          <SiteLoader />
        ) : (
          data &&
          data.map((e, i) => (
            <button
              key={i}
              onClick={() => handlerNavigate(e)}
              className="FuqarolarUchun__link"
            >
              {e?.[`title_${lang}`]}
            </button>
          ))
        )}
      </div>

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

export default FuqarolarUchun;
