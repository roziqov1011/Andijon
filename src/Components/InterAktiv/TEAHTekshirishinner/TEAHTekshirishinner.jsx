import React, { useContext, useEffect } from 'react'
import { Context } from '../../../Context/LineText'
import './TEAHTekshirishinner.scss'

function TEAHTekshirishinner() {
    const { setText } = useContext(Context)
  useEffect(() => {
    setText('Taqdim etilgan arizalar holatini tekshirish')
  }, [])
  return (
    <div className='TEAHTekshirishinner'>
        <h3>Interaktiv xizmatlar uchun onlayn ariza yuboring</h3>
        <p>  Ushbu shakl orqali siz portalda taqdim etilayotgan interaktiv xizmatlarga ariza topshirish imkoniyatiga egasiz.</p>
        <form className='TEAHTekshirishinner__form' action="#">
           <div>
                <span>
                    <label htmlFor="familya">Familya</label>
                    <input id='familya' type="text"  name='familya'/>
                </span>
                <span>
                    <label htmlFor="manzil">Manzil</label>
                    <input id='manzil' type="text"  name='manzil'/>
                </span>
                <span>
                    <label htmlFor="email">Email</label>
                    <input id='email' type="text"  name='email'/>
                </span>
                <span>
                    <label htmlFor="malumot matni">Malumot matni <i>Kamida 100 ... </i></label>
                    <input id='malumot matni' type="text"  name='malumot matni'/>
                </span>
                <button>Murojat qiling</button>
           </div>
           <div>
                <span>
                    <label htmlFor="nomi">Nomi</label>
                    <input id='nomi' type="text"  name='nomi'/>
                </span>
                <span>
                    <label htmlFor="telefon raqam">Telefon raqam</label>
                    <input id='telefon raqam' type="text"  name='telefonraqam'/>
                </span>
                <span>
                    <label htmlFor="xizmatturinitanlang">Xizmat turini tanlang</label>
                    <input id='xizmatturinitanlang' type="text"  name='xizmatturinitanlang'/>
                </span>
                <span>
                    <label htmlFor="ushbu kodlash">Ushbu kodlash</label>
                    <input id='ushbu kodlash' type="text"  name='ushbukodlash'/>
                </span>
           </div>

        </form>
    </div>
  )
}

export default TEAHTekshirishinner