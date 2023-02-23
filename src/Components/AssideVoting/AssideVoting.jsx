import { useContext, useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import { Context } from "../../Context/LangContext";
import "../AssideVoting/AssideVoting.scss";
import content from "../../Localization/content";
import SiteLoader from "../SiteLoader/SiteLoader";

import axios from "axios";
import Swal from 'sweetalert2'

function AssideVoting({ style }) {

    let url = process.env.REACT_APP_URL;
    let httpUrl = process.env.REACT_APP_HTTPS;

    const { lang } = useContext(Context);
    const [loading, setLoading] = useState(true)

    const [questionsData, setQuestionsData] = useState([]);
    const [questionId, setQuestionId] = useState(null);
    const [answersId, setAnswersId] = useState(null);
    const [disBtn, setDisBtn] = useState(true)

    const location = useLocation().pathname

    useEffect(() => {
        axios.get(`${url}questions`).then((res) => {
            setQuestionsData(res?.data?.data.questions)
        }).catch((error) => {
            alert('xatolik!!')
        }).finally(() => {
            setLoading(false);
            document.body.style.overflow = 'auto'
        })
    }, [])


    function onSubmit(e) {
        e.preventDefault();

        if (questionId == null || answersId == null) {
            console.log('Check klin');
        } else {
            axios.post(`${url}vote`, {
                answer_id: answersId,
                question_id: questionId,
            })
                .then((response) => {
                    if(response.status == 204) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Ovoz berildi',
                            timer: 3500,
                            color: '#000',
                            iconColor: '#0B0B92',
                            confirmButtonColor: '#0B0B92',
                        })
                    } else {
                        Swal.fire({
                            icon: 'warning',
                            title: 'Siz ovoz bergansiz',
                            timer: 2500,
                            color: '#000',
                            iconColor: '#0B0B92',
                            confirmButtonColor: '#0B0B92',
                        })
                    }
                    setAnswersId(null)
                    setQuestionId(null)
                }, (error) => {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Siz ovoz bergansiz',
                        timer: 2500,
                        color: '#000',
                        iconColor: '#0B0B92',
                        confirmButtonColor: '#0B0B92',
                    })

                    setAnswersId(null)
                    setQuestionId(null)
                });
        }
    }

    return (
        <>
            <section className="asside-voting">

                <div className="asside-voting__right" id={location == '/' ? "asside-voting__active" : "" }>
                    <form>
                        <h5>{questionsData[0]?.[`title_${lang}`]}</h5>
                        {
                            loading ? (
                                <SiteLoader />
                            ) : (
                                questionsData[0]?.answers.map((item) => {

                                    return (
                                        <div className="form-item__box" key={item?.id} onChange={(e) => setQuestionId(item?.question_id)}>
                                            <div className="form-check form-check-cus">
                                                <input className="form-check-input in" type="checkbox" defaultValue id={item?.id} onChange={(e) => setAnswersId(e.target.id)} />
                                                <label className="form-check-label" htmlFor={item?.id}>
                                                    {item?.[`title_${lang}`]}
                                                </label>
                                            </div>
                                        </div>
                                    )
                                })
                            )
                        }
                        <button style={location == '/' ? {margin:'20px 0 0 0'} : {margon: '0 auto'}} onClick={(e) => onSubmit(e)} disabled={answersId == null ? true : false}>{content[lang]?.hcheckBtn}</button>
                    </form>
                </div>

            </section>
        </>
    )
}

export default AssideVoting