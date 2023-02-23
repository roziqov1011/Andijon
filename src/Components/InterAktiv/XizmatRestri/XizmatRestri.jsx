import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Context } from '../../../Context/LangContext';
import { ContextLine } from '../../../Context/LineText';
import './XizmatRestri.scss'

function XizmatRestri() {
  const { lang } = useContext(Context)
  // let httpUrl = process.env.REACT_APP_HTTPS;
  // let url = process.env.REACT_APP_URL;
  const { state } = useLocation();
  const { setText } = useContext(ContextLine)
  useEffect(() => {
    setText('Xizmat Restri')
  }, [])


  return (
    <div className='XizmatRestri'>
      <h3>{state[`title_${lang}`]}</h3>
      <p dangerouslySetInnerHTML={{ __html: state?.[`body_${lang}`] }}></p>
      <a href={state.file} target="_blank" download="rasm.png" >Yuklab Olish</a>
      
    </div>
  )
}

export default XizmatRestri