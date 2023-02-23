// Import React
import React, { useContext, useEffect, useState } from "react";
import { NavLink as Link, useNavigate } from "react-router-dom";

// Import Components
import "../Navbar/Navbar.scss";
import { Context } from "../../Context/LangContext";
import content from "../../Localization/content";
import { useRef } from "react";
import { SearchContext } from "../../Context/SearchContext";

function Navbar() {
  const navigate = useNavigate();
  const { lang, setLang } = useContext(Context);

  const { searchText, setSearchText } = useContext(SearchContext);
  const refValue = useRef();

  const handlerSearchValue = (e) => {
    e.preventDefault();
    setSearchText(refValue.current.value);
    navigate("/searchmain");
    refValue.current.value = "";
  };

  // APi
  let url = process.env.REACT_APP_URL;

  // Api Data State
  const [citiesData, setCitiesData] = useState([]);

  useEffect(() => {
    fetch(`${url}cities`)
      .then((response) => response.json())
      .then((data) => {
        setCitiesData(data?.data);
      })
      .finally(() => {
        document.body.style.overflow = "auto";
      });
  }, []);

  const toDetalsData = (item) => {
    navigate(`/cities/inner/${item.slug}`, { state: item });
  };

  // ======================== //
  //  One Drop Viloyat hokimligi
  //========================= //

  const NavListOneOne = [
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
  ];

  const NavListOneTwo = [
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
  ];

  const NavListOneThree = [
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
  ];

  // ======================== //
  //  Two Drob Viloyat haqida
  //========================= //

  const NavListTwoOne = [
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
  ];

  const NavListTwoTwo = [
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
  ];

  // ======================== //
  //  Thee Drob Shaxar va tumanlar
  //========================= //

  // ======================== //
  //  Thee Drob Mahalliy kengash
  //========================= //

  const NavListFourOne = [
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
  ];

  // ======================== //
  //  Thee Drob Ma’lumotnoma
  //========================= //

  const NavListFiveOne = [
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
  ];

  // ======================== //
  //  Thee Drob Ma’lumotnoma
  //========================= //

  const NavListSixOne = [
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

  return (
    <>
      <nav className="navbar">
        <ul className="navbar__list">
          <li className="navbar__item">
            <Link to={"/v-governorship/posts"} className="navbar__link">
              {content[lang].messages}
            </Link>
          </li>
          <li className="navbar__item">
            <div className="navbar__link">{content[lang].provincial}</div>

            <div className="navbar__drob">
              <ul>
                {NavListOneOne.map((dat, index) => {
                  return (
                    <li key={index}>
                      <Link className={"navbar__drob-link"} to={dat.link}>
                        {dat.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <ul>
                {NavListOneTwo.map((dat, index) => {
                  return (
                    <li key={index}>
                      <Link className={"navbar__drob-link"} to={dat?.link}>
                        {dat?.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <ul>
                {NavListOneThree.map((dat, index) => {
                  return (
                    <li key={index}>
                      <Link className={"navbar__drob-link"} to={dat?.link}>
                        {dat?.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
          <li className="navbar__item">
            <div className="navbar__link">{content[lang].aboutprovince}</div>
            <div className="navbar__drob">
              <ul>
                {NavListTwoOne.map((dat, index) => {
                  return (
                    <li key={index}>
                      <Link className={"navbar__drob-link"} to={dat.link}>
                        {dat.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <ul>
                {NavListTwoTwo.map((dat, index) => {
                  return (
                    <li key={index}>
                      <Link className={"navbar__drob-link"} to={dat?.link}>
                        {dat?.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
          <li className="navbar__item">
            <div className="navbar__link">
              {content[lang].citiesAnddistricts}
            </div>
            <div className="navbar__drob">
              <ul>
                {citiesData.slice(0, 7)?.map((dat, index) => {
                  return (
                    <li
                      className={"navbar__drob-link"}
                      key={index}
                      onClick={() => toDetalsData(dat)}
                    >
                      {dat?.[`title_${lang}`]?.slice(0, 120)}
                    </li>
                  );
                })}
              </ul>
              <ul>
                {citiesData.slice(7, 20)?.map((dat, index) => {
                  return (
                    <li
                      className={"navbar__drob-link"}
                      key={index}
                      onClick={() => toDetalsData(dat)}
                    >
                      {dat?.[`title_${lang}`]?.slice(0, 120)}
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
          <li className="navbar__item">
            <div className="navbar__link">{content[lang].localcouncil}</div>
            <div className="navbar__drob">
              <ul>
                {NavListFourOne?.map((dat, index) => {
                  return (
                    <li key={index}>
                      <Link className={"navbar__drob-link"} to={dat.link}>
                        {dat.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
          <li className="navbar__item">
            <div className="navbar__link">{content[lang].Information}</div>
            <div className="navbar__drob">
              <ul>
                {NavListFiveOne?.map((dat, index) => {
                  return (
                    <li key={index}>
                      <Link className={"navbar__drob-link"} to={dat.link}>
                        {dat.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
          <li className="navbar__item">
            <div className="navbar__link">{content[lang].Interactive}</div>
            <div className="navbar__drob">
              <ul>
                {NavListSixOne?.map((dat, index) => {
                  return (
                    <li key={index}>
                      <Link className={"navbar__drob-link"} to={dat.link}>
                        {dat.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>

          <li className="navbar__item">
            <form action="#" onSubmit={handlerSearchValue}>
              <input
                ref={refValue}
                placeholder="Search..."
                className="js-search"
                type="text"
              />
            </form>
            {/* <ion-icon name="search-outline"></ion-icon> */}
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
