import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../../Components/Container/Container";
import { Context } from "../../../Context/LangContext";
import { SearchContext } from "../../../Context/SearchContext";
import content from "../../../Localization/content";
import "./SearchMain.scss";

function SearchMain() {
  let url = process.env.REACT_APP_URL;
  let https = process.env.REACT_APP_HTTPS;
  const { lang, setLang } = useContext(Context);

  const allRoutes = [
    {
      name: content[lang].VKengashlar,
      link: "/v-governorship/posts",
    },
    {
      name: content[lang].VKengashlar,
      link: "/v-governorship/councils",
    },
    {
      name: content[lang].VIshKunTartibi,
      link: "/v-governorship/work-schedule",
    },
    {
      name: content[lang].VViloyatHokimMaruzalari,
      link: "/v-governorship/speeches",
    },
    {
      name: content[lang].VHamkorlik,
      link: "/governorship",
    },
    {
      name: content[lang].Viloyat_hokimligi_manzili,
      link: "/v-governorship/contact",
    },
    {
      name: content[lang].VViloyatHokimligiTomonidanQabulQilinganQarorlar,
      link: "/v-governorship/decisions",
    },
    {
      name: content[lang].VHamkorlik,
      link: "/v-governorship/partners",
    },
    {
      name: content[lang].МViloyatHokimligiTasarrufidagiTashkilotlar,
      link: "/v-governorship/organizations",
    },
    {
      name: content[lang].VMatbuotXizmati,
      link: "/v-governorship/press-page",
    },
    {
      name: content[lang].VMahalliyDavlatHokimyati,
      link: "/v-governorship/local-page",
    },
    {
      name: content[lang].VOzKuchiniYoqotganHujjatlar,
      link: "/v-governorship/old-documents",
    },
    {
      name: content[lang].VDavlatDasturlari,
      link: "/v-governorship/programs",
    },
    {
      name: content[lang].VJismoniy_qabul_qilish,
      link: "/v-governorship/reception-times",
    },
    {
      name: content[lang].VOchiqMajlislarOtkazishRejalari,
      link: "/v-governorship/plans",
    },
    {
      name: content[lang].VViloyatHokimligiRekvizitlari,
      link: "/v-governorship/rekvizits",
    },
    {
      name: content[lang].VXujjatlarMuhokamasi,
      link: "/v-governorship/discussions",
    },
    {
      name: content[lang].OzbekistonRespublikasiQonunchilikHujjatlari,
      link: "/v-governorship/documents",
    },
    {
      name: content[lang].AsosiyIqtisodiyKorsatkichlarStatistikalar,
      link: "/v-about/indicators",
    },
    {
      name: content[lang].MadaniyatIstirohatBoglari,
      link: "/v-about/parks",
    },
    {
      name: content[lang].OliyOquvYurtlari,
      link: "/v-about/universities",
    },
    {
      name: content[lang].AndijonViloyatidagiBoshTurganBinoInshoatlar,
      link: "/v-about/buildings",
    },
    {
      name: content[lang].OchiqMalumotlar,
      link: "/v-about/open-infos",
    },
    {
      name: content[lang].Investitsiyalar,
      link: "/v-about/investments",
    },
    {
      name: content[lang].Turizm,
      link: "/v-about/tourisms",
    },
    {
      name: content[lang].ViloyatdagiBoshIshOrinlar,
      link: "/v-about/vacancies",
    },
    {
      name: content[lang].UmumiyMalumotlar,
      link: "/v-about/general-info",
    },
    {
      name: content[lang].ElektromHukumat,
      link: "/v-about/governments",
    },
    {
      name: content[lang].Sessiya_kun_tartibi,
      link: "/local-council/agendas",
    },
    {
      name: content[lang].Senat_yangi_majlislari,
      link: "/local-council/meetings",
    },
    {
      name: content[lang].Doimiy_komisyalar,
      link: "/local-council/comissions",
    },
    {
      name: content[lang].Senatorlar,
      link: "/local-council/senators",
    },
    {
      name: content[lang].Viloyat_kengash_deputatlari,
      link: "/local-council/deputats",
    },
    {
      name: content[lang].Kengash_tartibi,
      link: "/local-council/deputats-composition",
    },
    {
      name: content[lang].Andijon_viloyati_malumotlar_royxati,
      link: "/reference/informations",
    },
    {
      name: content[lang].Davlat_mukofotlari,
      link: "/reference/awards",
    },
    {
      name: content[lang].Milliy_bayram_muhim_sanalar,
      link: "/reference/holidays",
    },
    {
      name: content[lang].Davlat_organ_saytlari,
      link: "/reference/organs",
    },
    {
      name: content[lang].Akkreditatsiya_qilish_tartibi_togrisida,
      link: "/reference/accreditations",
    },
    {
      name: content[lang].Davlat_Ramzlari,
      link: "/reference/symbols",
    },
    {
      name: content[lang].Konstitutsiya,
      link: "/reference/constitution",
    },
    {
      name: content[lang].Repsublik_Viloyatlar,
      link: "/reference/region-websites",
    },
    {
      name: content[lang].GM_uzbekistan_avto_narxlar,
      link: "/reference/car-prices",
    },
    {
      name: content[lang].Fuqarolar_uchun,
      link: "/inter-aktiv/citizens",
    },
    {
      name: content[lang].Tender_savdolari,
      link: "/inter-aktiv/tenders",
    },
    {
      name: content[lang].Qoshimcha_xizmatlar,
      link: "/inter-aktiv/extra-services",
    },
    {
      name: content[lang].Senat_yangi_majlislari,
      link: "/inter-aktiv/app-form",
    },
  ];

  const { searchText, setSearchText } = useContext(SearchContext);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  function searchList(e) {
    e.preventDefault();
    fetch(`${url}search?key=${searchText}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }

  console.log();
  useEffect(() => {
    fetch(`${url}search?key=${searchText}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [searchText]);
  const pageNavigate = (e) => {
    allRoutes.map((item) => {
      let a = item.link.split("/")[2];

      if (a == e.type) {
        navigate(`${item.link}`, { item });
      }
    });
    let findLink = allRoutes.find((item) => item.link.split("/")[2] == e.type);

    if (findLink == undefined) {
      navigate("/");
      console.log("ok");
    }
  };
  return (
    <Container>
      <div>
        <ul className="SearchMain__list">
          {data.length > 0 ? (
            data.map((e, i) => (
              <li
                className="SearchMain__item"
                key={i}
                onClick={() => pageNavigate(e)}
              >
                <img src={https + e.searchable?.image} alt="" />
                <div>
                  <span>
                    {e.searchable?.[`title_${lang}`]
                      ?.split("")
                      .slice(0, 40)
                      .join("")}
                    ...
                  </span>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: e.searchable?.[`body_${lang}`]
                        ?.split("")
                        .slice(0, 100)
                        .join(""),
                    }}
                  ></p>
                </div>
              </li>
            ))
          ) : (
            <h3>bunday malumotlar topilmadi ...</h3>
          )}
        </ul>
      </div>
    </Container>
  );
}

export default SearchMain;
