// Import React
import React, { useEffect, useState, useContext, useRef } from "react";
import { useLocation, NavLink as Link, useNavigate } from "react-router-dom";

// Import Pack
import Offcanvas from "react-bootstrap/Offcanvas";
import Accordion from "react-bootstrap/Accordion";

// Import Components
import "../Header/Header.scss";
import Container from "../Container/Container";
import Navbar from "../Navbar/Navbar";
import NavbarTop from "../NavbarTop/NavbarTop";
import WeatherNav from "../WeatherNav/WeatherNav";
import Logo from "../Logo/Logo";

import { Context } from "../../Context/LangContext";
import content from "../../Localization/content";

import Swal from "sweetalert2";
import MaxsusImkoniyatlar from "../MaxsusImkoniyatlar/MaxsusImkoniyatlar";
import { SearchContext } from "../../Context/SearchContext";

function Header() {
  const navigate = useNavigate();

  const elHeader = useRef();

  // Weather State
  const [weatherTem, setWeatherTem] = useState("");

  // lang Active
  const [mobilActive, setMobilActive] = useState(0);

  // Lang State
  const { lang, setLang } = useContext(Context);
  const { searchText, setSearchText } = useContext(SearchContext);
  const refValue = useRef();

  const handlerSearchValue = (e) => {
    e.preventDefault();
    setSearchText(refValue.current.value);
    navigate("/searchmain");
    refValue.current.value = "";
  };

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  //offcanvas-backdrop
  //offcanvas-end

  const handleClose = () => setShow(false);
  const [header, setHeader] = useState(false);

  // =============================== // Header Navbar Scroll Function // ======================================== //
  const changeBaz = () => {
    if (window.scrollY >= 80) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  // =============================== // Header path Loacation Function // ======================================== //
  window.addEventListener("scroll", changeBaz);
  const location = useLocation().pathname;
  // =============================== // Weather Api Function // ======================================== //
  const getWeather = () => {
    const lat = 40.82;
    const lon = 72.28;
    const api = "26cef269b671e50cb02f7035722833fd";

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${api}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setWeatherTem(data?.main?.temp);
        console.log(data);
      });
  };

  useEffect(() => {
    getWeather();
    console.log(weatherTem);
    console.log("weatherTem");
  }, []);

  function clickClos() {
    document.body.classList.remove("modal-open");
  }
  const btnLang = [
    { value: "uz", label: "Uz" },
    { value: "kr", label: "Ўз" },
    { value: "ru", label: "Ру" },
    { value: "en", label: "En" },
  ];

  const modalRef = useRef < HTMLDivElement > null;

  // function openWin() {
  //     window.open(window.location.href, "_blank", "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=350, height=400");
  // }

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
  // TODO ULANMAGAN SHAHARLAR VA TUMANLAR
  const NavListThreeOne = [
    {
      name: content[lang].AndijonShaxri,
      link: "",
    },
    {
      name: content[lang].BaliqchiTumani,
      link: "",
    },
    {
      name: content[lang].BostonTumani,
      link: "",
    },
    {
      name: content[lang].PaxtabodTumani,
      link: "",
    },
    {
      name: content[lang].IzboskanTumani,
      link: "",
    },
    {
      name: content[lang].OltinkolTumani,
      link: "",
    },
    {
      name: content[lang].ShaxrixonTumani,
      link: "",
    },
    {
      name: content[lang].AsakaTumani,
      link: "",
    },
    {
      name: content[lang].UlugnorTumani,
      link: "",
    },
    {
      name: content[lang].JalaquduqTumani,
      link: "",
    },
    {
      name: content[lang].MarxamatTumani,
      link: "",
    },
    {
      name: content[lang].XojabodTumani,
      link: "",
    },
    {
      name: content[lang].QorgontepaTumani,
      link: "",
    },
    {
      name: content[lang].XonabodShaxri,
      link: "",
    },
  ];

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
      <div
        className="modal fade"
        id="exampleModal"
        aria-hidden="false"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <MaxsusImkoniyatlar />
            </div>
          </div>
        </div>
      </div>

      <header
        ref={elHeader}
        className={header ? "header activ" : "header"}
        id={location == "/" ? "" : "header__home"}
      >
        <Container>
          <div className="header__wrapper">
            <Link to="/">
              <Logo />
            </Link>

            <div className="header__box">
              <div className="header__nav-box">
                <NavbarTop />
                <WeatherNav weather={weatherTem} />
              </div>
              <Navbar />
            </div>

            <button className="header__menu-btn" onClick={handleShow}>
              <div>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </Container>

        <Offcanvas show={show} onHide={handleClose} placement={"end"}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <Logo />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="header__input-box">
              <form onSubmit={handlerSearchValue} action="#">
                <input
                  ref={refValue}
                  className="header__nav-menu-input"
                  type="text"
                  placeholder="Search..."
                />
                <button
                  onClick={() => setShow(false)}
                  className="header__nav-menu-btn"
                  type="submit"
                >
                  <ion-icon name="search-outline"></ion-icon>
                </button>
              </form>
            </div>
            <div className="header__mobile__lang">
              {btnLang?.map((e, i) => (
                <button
                  key={i}
                  className={lang == e.value ? "mobile__lang__active" : null}
                  onClick={() => {
                    setLang(e.value);
                    setMobilActive(i);
                    setShow(false);
                  }}
                >
                  {e.label}
                </button>
              ))}
            </div>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <Link to={"/v-hokimligi/xabarlar"}>
                    {content[lang].messages}
                  </Link>
                </Accordion.Header>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Viloyat hokimligi</Accordion.Header>
                {NavListOneOne?.map((dat, index) => {
                  return (
                    <Accordion.Body key={index}>
                      <Link
                        className={"header__nav-dom-link"}
                        to={dat.link}
                        onClick={() => {
                          "#modalExample [data-dismiss=modal]".trigger({
                            type: "click",
                          });
                          setShow(false);
                        }}
                      >
                        {dat.name}
                      </Link>
                    </Accordion.Body>
                  );
                })}
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Viloyat haqida</Accordion.Header>
                {NavListTwoOne?.map((dat, index) => {
                  return (
                    <Accordion.Body key={index}>
                      <Link
                        onClick={() => setShow(false)}
                        className={"header__nav-dom-link"}
                        to={dat.link}
                      >
                        {dat.name}
                      </Link>
                    </Accordion.Body>
                  );
                })}
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Shaxar va tumanlar</Accordion.Header>
                {NavListThreeOne?.map((dat, index) => {
                  return (
                    <Accordion.Body key={index}>
                      <Link
                        onClick={() => setShow(false)}
                        className={"header__nav-dom-link"}
                        to={dat.link}
                      >
                        {dat.name}
                      </Link>
                    </Accordion.Body>
                  );
                })}
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Mahalliy kengash</Accordion.Header>
                {NavListFourOne?.map((dat, index) => {
                  return (
                    <Accordion.Body key={index}>
                      <Link
                        onClick={() => setShow(false)}
                        className={"header__nav-dom-link"}
                        to={dat.link}
                      >
                        {dat.name}
                      </Link>
                    </Accordion.Body>
                  );
                })}
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Ma’lumotnoma</Accordion.Header>
                {NavListFiveOne?.map((dat, index) => {
                  return (
                    <Accordion.Body key={index}>
                      <Link
                        onClick={() => setShow(false)}
                        className={"header__nav-dom-link"}
                        to={dat.link}
                      >
                        {dat.name}
                      </Link>
                    </Accordion.Body>
                  );
                })}
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>Interaktiv</Accordion.Header>
                {NavListSixOne?.map((dat, index) => {
                  return (
                    <Accordion.Body key={index}>
                      <Link
                        onClick={() => setShow(false)}
                        className={"header__nav-dom-link"}
                        to={"/"}
                      >
                        {dat.name}
                      </Link>
                    </Accordion.Body>
                  );
                })}
              </Accordion.Item>
            </Accordion>
          </Offcanvas.Body>
        </Offcanvas>
      </header>
    </>
  );
}

export default Header;
