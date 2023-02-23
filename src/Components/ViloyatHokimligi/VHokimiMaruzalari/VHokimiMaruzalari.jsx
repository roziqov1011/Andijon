// Import React 
import { useContext, useEffect, useState } from 'react';

// Import Pack
import axios from 'axios';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";
import ReactPaginate from 'react-paginate';

// Import Components
import './VHokimiMaruzalari.scss';
import { Context } from "../../../Context/LangContext";
import { ContextLine } from "../../../Context/LineText";
import content from "../../../Localization/content";
import SiteLoader from '../../SiteLoader/SiteLoader';

function VHokimiMaruzalari() {

  // APi
  let url = process.env.REACT_APP_URL;
  let httpUrl = process.env.REACT_APP_HTTPS;

  // Api State
  const [speechesData, setSpeechesData] = useState([])

  // Loader
  const [loader, setLoader] = useState(true);

  // Lang
  const { lang, setLang } = useContext(Context);
  const { setText } = useContext(ContextLine)
  setText(content[lang].VViloyatHokimMaruzalari)

  useEffect(() => {
    axios.get(`${url}speeches`).then((res) => {
      setSpeechesData(res.data?.data)
    }).catch((error) => {
      console.log('Xatolik Yuzberdi');
    }).finally(() => {
      setLoader(false)
      document.body.style.overflow = 'auto';
    })
  }, [])

  const [currentItems, setCurrentItems] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(speechesData?.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(speechesData?.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, speechesData])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % speechesData?.length;
    setItemOffset(newOffset);
  };

  const dataIcon = [
    {
      icon: <i class="bi bi-telegram"></i>,
      link: '#',
    },
    {
      icon: <i class="bi bi-instagram"></i>,
      link: '#',
    },
    {
      icon: <i class="bi bi-youtube"></i>,
      link: '#',
    },
    {
      icon: <i class="bi bi-facebook"></i>,
      link: '#',
    },
  ]

  Fancybox.bind('[data-fancybox="gallery"]', {
    Thumbs: {
      Carousel: {
        fill: false,
        center: true,
      },
    },
  });

  return (
    <section className='vhmaruzalari-card'>
      <h4 className='vhmaruzalari-card__title'>{content[lang]?.Hokim_maruza}</h4>
      <div className="vhmaruzalari-card__list">
        {
          loader ? (
            <SiteLoader />
          ) : (
            speechesData?.map((item) => {
              return (
                <a
                  data-fancybox="gallery"
                  data-caption={item?.[`title_${lang}`]?.slice(0,120)}
                  href={`${httpUrl}${item?.file}`}>
                  <div className="vhmaruzalari-card__item">
                    <img src={`${httpUrl}${item?.image}`} alt="img" width={430} height={460} />
                    <div className="vhmaruzalari-card__item-box">
                      <p>
                        {item?.[`title_${lang}`]?.slice(0,120)}
                        {lang == "uz" ? item?.title_uz?.slice(0, 130) : lang !== "ru" ? item?.title_en?.slice(0, 130) : item?.title_ru?.slice(0, 130)}
                      </p>
                      <time>
                        <ion-icon name="today-outline"></ion-icon>{` ${item?.created_at?.slice(8, 10)}.${item?.created_at?.slice(5, 7)}.${item?.created_at?.slice(0, 4)}`}
                      </time>
                    </div>
                  </div>
                </a>
              )
            })
          )
        }
      </div>
      <div className='vhmaruzalari-card__center'>
        <ReactPaginate
          breakLabel="..."
          nextLabel={<ion-icon name="chevron-forward-outline"></ion-icon>}
          previousLabel={<ion-icon name="chevron-back-outline"></ion-icon>}
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          containerClassName="pogination"
          pogeLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="active"
        />
      </div>
    </section>
  )
}

export default VHokimiMaruzalari