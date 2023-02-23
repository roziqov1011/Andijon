import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ContextLine } from '../../../Context/LineText'
import './TEAHTekshirish.scss'

function TEAHTekshirish() {
  const { setText } = useContext(ContextLine)
  useEffect(() => {
    setText('Taqdim etilgan arizalar holatini tekshirish')
  }, [])
  return (
    <div className='TEAHTekshirish'>
        <h3>Kirish</h3>
        <form className='TEAHTekshirish__form'  action="#">
          <div>
            <label htmlFor="ular">Ular sizning identifikatoringizni pichirlashadi</label>
            <input id='ular' type="text" />
          </div>
          <div>
            <label htmlFor="parol">Parol</label>
            <input id='parol' type="text" />
          </div>
          <button>Kirish</button>
        </form>
        <Link to='/inter-aktiv/TEAHTekshirishinner' className='TEAHTekshirish__btn'>Murojat qiling</Link>
        <button className='TEAHTekshirish__btn'>Fuqarolarning murojatlarini ko’rib chiqish</button>
    </div>
  )
}

export default TEAHTekshirish