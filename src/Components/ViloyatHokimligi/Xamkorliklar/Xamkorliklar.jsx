// Import React
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

// Import Components
import './Xamkorliklar.scss';
import SiteLoader from "../../SiteLoader/SiteLoader";

// Import Contexts
import {ContextLine} from "../../../Context/LineText";
import { Context } from '../../../Context/LangContext';
import content from '../../../Localization/content';

// Import Pack
import ReactPaginate from 'react-paginate';


function Xamkorliklar() {

  // APi
  let url = process.env.REACT_APP_URL;
  let httpUrl = process.env.REACT_APP_HTTPS;

  // Context
  const { lang, setLang } = useContext(Context)
  const { setText } = useContext(ContextLine)
  setText(content[lang]?.VHamkorlik)

  // Api DATA STATE
  const [postData, setPostData] = useState([]);
  const [loader, setLoader] = useState(true);

  // Fetch
  useEffect(() => {
    fetch(`${url}partners`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setPostData(data?.data)
      }).finally(() => {
        setLoader(false);
        document.body.style.overflow = 'auto';
      })
  }, [])

  // Shaire Api Data
  const navigate = useNavigate();
  const toDetalsData = (item) => {
    console.log(item);
    navigate(`/v-governorship/partners-inner/${item.slug}`, { state: item.slug })
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

  return (
    <section className='partnerships'>
      <ul className="partnerships__list">
        {
          loader ? (
            <SiteLoader />
          ) : (
            currentItems?.map((data) => {
              return (
                <li className="partnerships__item" key={data.id} onClick={() => toDetalsData(data)}>
                  <img className="partnerships__item-img" src={`${httpUrl}${data?.image}`} alt="" width={315} height={220} />

                  <div className="partnerships__item-box">
                    <h3 className="partnerships__item-title">{data?.[`title_${lang}`].slice(0,120)}</h3>
                    <p className="partnerships__item-desc">
                      {data?.[`description_${lang}`]?.slice(0,300)}
                    </p>
                    <time className="partnerships__item-time">
                      <ion-icon name="today-outline"></ion-icon>
                      {` ${data?.created_at.slice(8, 10)}.${data?.created_at?.slice(5, 7)}.${data?.created_at?.slice(0, 4)}`}
                      <ion-icon name="time-outline"></ion-icon>
                      {` ${data?.created_at.slice(12, 16)}`}
                    </time>
                  </div>
                </li>
              )
            })
          )
        }
      </ul>

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
    </section>
  )
}

export default Xamkorliklar