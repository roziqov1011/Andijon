//
import { useContext, useEffect, useState } from "react";

// Import Components
import "../SocialMedia/SocialMedia.scss";
import SiteLoader from "../SiteLoader/SiteLoader";

// Import Img
import IconIns from "../../Assets/Icon/icon-instagram.svg";
import IconTelegram from "../../Assets/Icon/icon-telegram.svg";
import IconOdna from "../../Assets/Icon/icon-odnaklasnik.svg";
import IconGmail from "../../Assets/Icon/icon-gmail.svg";
import IconFace from "../../Assets/Icon/icon-facebook.svg";
import IconG from "../../Assets/Icon/icon-@.svg";
import content from "../../Localization/content";
import { Context } from "../../Context/LangContext";

import axios from "axios";

function SocialMedia({ view, created_at }) {
  // APi
  let url = process.env.REACT_APP_URL;
  let httpUrl = process.env.REACT_APP_HTTPS;

  // API data State
  // const [data, setData] = useState([])
  const [networksData, setNetworksData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Lang State
  const { lang, setLang } = useContext(Context);

  useEffect(() => {
    axios
      .get(`${url}networks`)
      .then((res) => {
        setNetworksData(res.data.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const socialMediaDat = [
    {
      icon: IconIns,
      link: "",
    },
    {
      icon: IconTelegram,
      link: "",
    },
    {
      icon: IconOdna,
      link: "",
    },
    {
      icon: IconGmail,
      link: "",
    },
    {
      icon: IconFace,
      link: "",
    },
    {
      icon: IconG,
      link: "",
    },
  ];

  return (
    <section className="social-media">
      <p>
        {content[lang]?.Oxirgi_ozgarish} {`${created_at}`}
      </p>

      <ul className="social-media-list">
        {networksData.map((item) => {
          return (
            <li key={item?.id}>
              <a href={item?.link} target={"_blank"}>
                <img src={`${httpUrl}${item?.image}`} alt="icon-socila-media" />
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default SocialMedia;
