// Import React
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

// Import Pack
import ReactPaginate from 'react-paginate';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// Import Components
import './Xabarlar.scss'
import { ContextLine } from '../../../Context/LineText'

// Import Lang
import { Context } from '../../../Context/LangContext';
import content from '../../../Localization/content';
import SiteLoader from '../../SiteLoader/SiteLoader';


function Xabarlar() {

  // APi
  let url = process.env.REACT_APP_URL;
  let httpUrl = process.env.REACT_APP_HTTPS;

  // Lang State
  const { lang, setLang } = useContext(Context);
  const { setText } = useContext(ContextLine);
  setText(content[lang]?.messages)
  
  // Api DATA STATE
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch
  useEffect(() => {
    fetch(`${url}posts`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setPostData(data?.data)
      }).finally(() => {
        setTimeout(() => {
          setLoading(false)
          document.body.style.overflow = 'auto'
        }, 500)
      })
  }, [])

  // Shaire Api Data
  const navigate = useNavigate();
  const toDetalsData = (item) => {
    navigate(`/v-governorship/post/${item.slug}`, { state: item.slug })
  }

  const [currentItems, setCurrentItems] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(postData.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(postData.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, postData])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % postData.length;
    setItemOffset(newOffset);
  };

  // const elTitle = document.querySelectorAll("title");
  // console.log(elTitle[0].textContent = 'Yea');  
  // elTitle[0].textContent = 'Yea'
  // // elTitle[0].innerHTML = 'Yangiliklar'


  return (
    <section className="vmessages-section">

      <ul className="vmessages-card__list">
        {

          loading ? (
            <SiteLoader />
          ) : (
            currentItems?.map((data) => {
              return (
                <li className="vmessages-card__item" onClick={() => toDetalsData(data)} data-aos="fade-right"
                data-aos-once="true"
                data-aos-duration="1500">
                  <img className="vmessages-card__item-img" src={`${httpUrl}${data?.image}`} alt="" width={315} height={220} />
                  

                  <div className="vmessages-card__item-box">
                    <h3 className="vmessages-card__item-title">
                      {data?.[`title_${lang}`]?.slice(0,120)}
                    </h3>
                    <p className="vmessages-card__item-desc">
                    {data?.[`description_${lang}`]?.slice(0,300)}...
                    </p>
                    <time className="vmessages-card__item-time">
                      <ion-icon name="today-outline"></ion-icon>{` ${data?.created_at.slice(8, 10)}.${data?.created_at?.slice(5, 7)}.${data?.created_at?.slice(0, 4)}`}</time>
                  </div>
                </li>
              )
            })
          )
        }
      </ul>

      {/* <Items currentItems={currentItems} /> */}
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
    </section >
  )
}

export default Xabarlar