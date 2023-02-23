// Import React 
import { useRef, useEffect, useState } from "react";
import { Router, Routes, Route, useLocation, Outlet, useParams } from "react-router-dom"

// Import Pack
import { ThemeColor, ChameleonThemeColor } from 'react-chameleon-theme-color'
import Swal from 'sweetalert2'
import disableDevtool from'disable-devtool';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import 
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";

// Import Components
import './App.scss';
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import VHokimligi from "./Pages/VHokimligi/VHokimligi";
import VHaqida from "./Pages/VHaqida/VHaqida";
import ShaharTuman from "./Pages/ShaharTuman/ShaharTuman";
import Malumotnoma from "./Pages/Malumotnoma/Malumotnoma";
import MahalliyKengash from "./Pages/MahalliyKengash/MahalliyKengash";
import InterAktiv from "./Pages/InterAktiv/InterAktiv";
import Xabarlar from "./Components/ViloyatHokimligi/Xabarlar/Xabarlar";
import Hokim from "./Components/ViloyatHokimligi/Hokimlar/Hokimlar";
import Kengashlar from "./Components/ViloyatHokimligi/Kengashlar/Kengashlar";
import IshKunTartibi from "./Components/ViloyatHokimligi/IshKunTartibi/IshKunTartibi";
import VHokimiMaruzalari from "./Components/ViloyatHokimligi/VHokimiMaruzalari/VHokimiMaruzalari";
import DavlatDasturlari from "./Components/ViloyatHokimligi/DavlatDasturlari/DavlatDasturlari";
import HujjatlarMuhokamasi from "./Components/ViloyatHokimligi/HujjatlarMuhokamasi/HujjatlarMuhokamasi";
import JYSHVQQilish from "./Components/ViloyatHokimligi/JYSHVQQilish/JYSHVQQilish";
import Manzil from "./Components/ViloyatHokimligi/Manzil/Manzil";
import MatbuotXizmati from "./Components/ViloyatHokimligi/MatbuotXizmati/MatbuotXizmati";
import MDHokimyati from "./Components/ViloyatHokimligi/MDHokimyati/MDHokimyati";
import OKYHujjatlar from "./Components/ViloyatHokimligi/OKYHujjatlar/OKYHujjatlar";
import OMORejalari from "./Components/ViloyatHokimligi/OMORejalari/OMORejalari";
import ORQHujjatlari from "./Components/ViloyatHokimligi/ORQHujjatlari/ORQHujjatlari";
import VHRekvizitlari from "./Components/ViloyatHokimligi/VHRekvizitlari/VHRekvizitlari";
import VHTTashkilotlar from "./Components/ViloyatHokimligi/VHTTashkilotlar/VHTTashkilotlar";
import VXTQQQarorlar from "./Components/ViloyatHokimligi/VXTQQQarorlar/VXTQQQarorlar";
import Xamkorliklar from "./Components/ViloyatHokimligi/Xamkorliklar/Xamkorliklar";
import AIKorsatkichlar from "./Components/ViloyatHaqida/AIKorsatkichlar/AIKorsatkichlar";
import AVBTBVInshootlar from "./Components/ViloyatHaqida/AVBTBVInshootlar/AVBTBVInshootlar";
import BIOrinlari from "./Components/ViloyatHaqida/BIOrinlari/BIOrinlari";
import ElektronHukumat from "./Components/ViloyatHaqida/ElektronHukumat/ElektronHukumat";
import Investitsiyalar from "./Components/ViloyatHaqida/Investitsiyalar/Investitsiyalar";
import MatbuotXizmatii from "./Components/ViloyatHaqida/MatbuotXizmati/MatbuotXizmati";
import MIBoglari from "./Components/ViloyatHaqida/MIBoglari/MIBoglari";
import OchiqMalumotlar from "./Components/ViloyatHaqida/OchiqMalumotlar/OchiqMalumotlar";
import OOYurtlari from "./Components/ViloyatHaqida/OOYurtlari/OOYurtlari";
import Turizm from "./Components/ViloyatHaqida/Turizm/Turizm";
import UmumiyMalumotlar from "./Components/ViloyatHaqida/UmumiyMalumotlar/UmumiyMalumotlar";
import FuqarolarUchun from "./Components/InterAktiv/FuqarolarUchun/FuqarolarUchun";
import HujjatlarBlankalar from "./Components/InterAktiv/HujjatlarBlankalar/HujjatlarBlankalar";
import QoshimchaHizmatlar from "./Components/InterAktiv/QoshimchaHizmatlar/QoshimchaHizmatlar";
import SYMajlislari from "./Components/InterAktiv/SYMajlislari/SYMajlislari";
import TEAHTekshirish from "./Components/InterAktiv/TEAHTekshirish/TEAHTekshirish";
import TenderSavdolari from "./Components/InterAktiv/TenderSavdolari/TenderSavdolari";
import XizmatRestri from "./Components/InterAktiv/XizmatRestri/XizmatRestri";
import AQTTogrisida from "./Components/Malumotnoma/AQTTogrisida/AQTTogrisida";
import AVHTCELBMRoyxati from "./Components/Malumotnoma/AVHTCELBMRoyxati/AVHTCELBMRoyxati";
import DavlatMukofotlari from "./Components/Malumotnoma/DavlatMukofotlari/DavlatMukofotlari";
import DavlatRamzlari from "./Components/Malumotnoma/DavlatRamzlari/DavlatRamzlari";
import DOSaytlari from "./Components/Malumotnoma/DOSaytlari/DOSaytlari";
import GMUANarxlar from "./Components/Malumotnoma/GMUANarxlar/GMUANarxlar";
import Konstitutsiya from "./Components/Malumotnoma/Konstitutsiya/Konstitutsiya";
import MBMSanalar from "./Components/Malumotnoma/MBMSanalar/MBMSanalar";
import RepsublikViloyatlar from "./Components/Malumotnoma/RepsublikViloyatlar/RepsublikViloyatlar";
import KengashTarkibi from "./Components/MahalliyKengash/KengashTarkibi/KengashTarkibi";
import Senatorlar from "./Components/MahalliyKengash/Senatorlar/Senatorlar";
import SKTartibi from "./Components/MahalliyKengash/SKTartibi/SKTartibi";
import VKDeputatlar from "./Components/MahalliyKengash/VKDeputatlar/VKDeputatlar";
import SYMajlislarii from "./Components/MahalliyKengash/SYMajlislari/SYMajlislari";
import AndijonTumani from "./Components/ShaxarVaTumanlar/AndijonTumani/AndijonTumani";
import HokimlarPage from "./Pages/HokimlarPage/HokimlarPage";
import HokimlarProfil from "./Components/ViloyatHokimligi/HokimlarProfil/HokimlarProfil";
import SiteLoader from "./Components/SiteLoader/SiteLoader";
import DoimiyKomisyalar from "./Components/MahalliyKengash/DoimiyKomisyalar/DoimiyKomisyalar";
import VHTTashkilotlarProfil from "./Components/ViloyatHokimligi/VHTTashkilotlarProfil/VHTTashkilotlarProfil";
import OchiqMalumotlarProfil from "./Components/ViloyatHaqida/OchiqMalumotlarProfil/OchiqMalumotlarProfil";
import InvestitsiyaItem from "./Components/ViloyatHaqida/Investitsiyalar/InvestitsiyaItem/InvestitsiyaItem";
import TurizmItem from "./Components/ViloyatHaqida/Turizm/TurizmItem/TurizmItem";
import ElektronHukumatItem from "./Components/ViloyatHaqida/ElektronHukumat/ElektronHukumatItem/ElektronHukumatItem";
import SenatorInner from "./Components/MahalliyKengash/Senatorlar/SenatorInner/SenatorInner";
import XabarlarItem from "./Components/ViloyatHokimligi/Xabarlar/XabarlarItem/XabarlarItem";
import VKDeputatlarItem from "./Components/MahalliyKengash/VKDeputatlar/VKDeputatlarItem/VKDeputatlarItem";
import AOS from "aos";
import XamkorliklarInner from "./Components/ViloyatHokimligi/Xamkorliklar/XamkorliklarInner/XamkorliklarInner";
import QoshimchaXizmatlarInner from "./Components/Home/QoshimchaXizmatlar/QoshimchaXizmatlarInner/QoshimchaXizmatlarInner";
import SearchMain from "./Pages/Search/SearchMain/SearchMain";

function App() {

  const location = useLocation().pathname
  const elBody = document.body
  const elFooter = useRef()

  // Loader State
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const { userId } = useParams()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  window.scrollTo(0, 0)

  if (location == '/') {
    elBody.style.paddingTop = "0";
  } else {
    elBody.style.paddingTop = "200px";
  }

  if (location == '*') {
    elBody.style.overflow = "hidden";
  }

  // TODO LOADER TAYYOR FACAT PROJECT TUGAGANDAN KEGIN OCHILADI COMMETAN
  // window.addEventListener('load', function () {
  //   setLoading(false)
  //   setShow(show);
  //   elBody.style.overflow = "hidden";
  // })
  // elBody.style.overflow = "auto";

  // if (loading) return <SiteLoader />

  // TODO POSMOTRET CODNI OCHIRADIGON FUNCTION
  // elBody.addEventListener('contextmenu', function (ev) {
  //   ev.preventDefault();
  //   return false;
  // }, false);

  // document.onkeydown = keyboardDown;
  // document.onkeyup = keyboardUp;

  // document.oncontextmenu = function (e) {
  //   var evt = new Object({ keyCode: 93 });
  //   stopEvent(e);
  //   keyboardUp(evt);
  // }
  // function stopEvent(event) {
  //   if (event.preventDefault != undefined)
  //     event.preventDefault();
  //   if (event.stopPropagation != undefined)
  //     event.stopPropagation();
  // }
  // function keyboardDown(event) {
  //   if (event.preventDefault != undefined)
  //     event.preventDefault();
  //   if (event.stopPropagation != undefined)
  //     event.stopPropagation();
  // }
  // function keyboardUp(event) {
  //   if (event.preventDefault != undefined)
  //     event.preventDefault();
  //   if (event.stopPropagation != undefined)
  //     event.stopPropagation();
  // }

  // disableDevtool();


  window.oncontextmenu = function (e) { if (e.button !== 2) e.preventDefault(); }

  useEffect(() => {
    AOS.init({});
    AOS.refresh();
  }, []);


  return (
    <div className="App">
      {/* <SiteLoader /> */}
      <ThemeColor color="#00005A" contrastRatio={1.6} />
      <div className="App__inner">
      <Header />
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/searchmain" element={<SearchMain />} />
        {/* <Route path="/news" element={<News />} /> */}
        <Route path="/governorship" element={<HokimlarPage />} />
        <Route path="/hokimlar-profil/:hokimlarId" element={<HokimlarProfil />} />
        <Route path="/v-governorship" element={<VHokimligi />} >
          <Route path="councils" element={<Kengashlar />} />
          <Route path="work-schedule" element={<IshKunTartibi />} />
          <Route path="speeches" element={<VHokimiMaruzalari />} />
          <Route path="programs" element={<DavlatDasturlari />} />
          <Route path="discussions" element={<HujjatlarMuhokamasi />} />
          <Route path="reception-times" element={<JYSHVQQilish />} />
          <Route path="contact" element={<Manzil />} />
          <Route path="press-page" element={<MatbuotXizmati />} />
          <Route path="local-page" element={<MDHokimyati />} />
          <Route path="old-documents" element={<OKYHujjatlar />} />
          <Route path="plans" element={<OMORejalari />} />
          <Route path="documents" element={<ORQHujjatlari />} />
          <Route path="rekvizits" element={<VHRekvizitlari />} />
          <Route path="organizations" element={<VHTTashkilotlar />} />
          <Route path="organizations-inner/:contentId" element={<VHTTashkilotlarProfil />} />
          <Route path="decisions" element={<VXTQQQarorlar />} />
          <Route path="posts" element={<Xabarlar />} />
          <Route path="post/:contentId" element={<XabarlarItem />} />
          <Route path="partners" element={<Xamkorliklar />} />
          <Route path="partners-inner/:contentSlug" element={<XamkorliklarInner />} />
          <Route path="services/:contentSlug" element={<QoshimchaXizmatlarInner />} />
        </Route>
        <Route path="/v-about" element={<VHaqida />} >
          <Route path="indicators" element={<AIKorsatkichlar />} />
          <Route path="buildings" element={<AVBTBVInshootlar />} />
          <Route path="vacancies" element={<BIOrinlari />} />
          <Route path="governments" element={<ElektronHukumat />} />
          <Route path="governments-inner/:contentId" element={<ElektronHukumatItem />} />
          <Route path="investments" element={<Investitsiyalar />} />
          <Route path="investments-inner/:contentId" element={<InvestitsiyaItem />} />
          <Route path="parks" element={<MIBoglari />} />
          <Route path="open-infos" element={<OchiqMalumotlar />} />
          <Route path="open-infos-inner/:contentId" element={<OchiqMalumotlarProfil />} />
          <Route path="universities" element={<OOYurtlari />} />
          <Route path="tourisms" element={<Turizm />} />
          <Route path="tourisms-inner/:contentId" element={<TurizmItem />} />
          <Route path="general-info" element={<UmumiyMalumotlar />} />
        </Route>
        <Route path="/cities" element={<ShaharTuman />} >
          <Route path="inner/:innerSlug" element={<AndijonTumani />} />
        </Route>
        <Route path="/reference" element={<Malumotnoma />} >
          <Route path="accreditations" element={<AQTTogrisida />} />
          <Route path="informations" element={<AVHTCELBMRoyxati />} />
          <Route path="awards" element={<DavlatMukofotlari />} />
          <Route path="symbols" element={<DavlatRamzlari />} />
          <Route path="organs" element={<DOSaytlari />} />
          <Route path="car-prices" element={<GMUANarxlar />} />
          <Route path="constitution" element={<Konstitutsiya />} />
          <Route path="holidays" element={<MBMSanalar />} />
          <Route path="region-websites" element={<RepsublikViloyatlar />} />
        </Route>
        <Route path="/local-council" element={<MahalliyKengash />} >
          <Route path="agendas" element={<SKTartibi />} />
          <Route path="meetings" element={<SYMajlislarii />} />
          <Route path="comissions" element={<DoimiyKomisyalar />} />
          <Route path="deputats-composition" element={<KengashTarkibi />} />
          <Route path="senators" element={<Senatorlar />} />
          <Route path="senators-inner/:userId" element={<SenatorInner />} />
          <Route path="deputats" element={<VKDeputatlar />} />
          <Route path="deputats-inner/:userSlug" element={<VKDeputatlarItem />} />
        </Route>

        {/* TODO: ROUNTLARNI TOGIRLASH KEREK */}
        <Route path="/inter-aktiv" element={<InterAktiv />} >
          <Route path="citizens" element={<FuqarolarUchun />} />
          {/* TODO: BEKEND YOK YOKI CHUNARSIZ */}
          {/* <Route path="HujjatlarBlankalar" element={<HujjatlarBlankalar />} /> */}
          <Route path="extra-services" element={<QoshimchaHizmatlar />} />
          <Route path="app-form" element={<SYMajlislari />} />
          {/* TODO: BEKEND YOK YOKI CHUNARSIZ */}
          {/* <Route path="TEAHTekshirish" element={<TEAHTekshirish />} /> */}
          <Route path="tenders" element={<TenderSavdolari />} />
          {/* TODO: BEKEND YOK YOKI CHUNARSIZ */}
          <Route path="services-restri" element={<XizmatRestri />} />
        </Route>
      </Routes>
      </div>
      <Footer elFooter={elFooter} />
    </div>
  );
}

export default App;
