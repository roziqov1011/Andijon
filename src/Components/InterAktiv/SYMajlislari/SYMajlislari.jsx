import React, { useContext, useEffect } from 'react'
import { ContextLine } from '../../../Context/LineText';
import { Context } from '../../../Context/LangContext';
import './SYMajlislari.scss'
import umarovHokim from '../../../Assets/Img/umarovhokim.png'
import content from '../../../Localization/content'

function SYMajlislari() {
  const { lang } = useContext(Context)
  const { setText } = useContext(ContextLine)
  setText(content[lang]?.Senat_yangi_majlislari)

  return (
    <div className='SYMajlislari'>
      <h2 className='SYMajlislari__title'>MUROJAAT TARTIBI </h2>
      <ol className='SYMajlislari__list'>
        <li>O‘zbekiston Respublikasining “Fuqarolarning murojaatlari bilan ishlash tartibi to‘g‘risida”gi qonuni va viloyat
          hokimining qarori asosida amalga oshiriladi.</li>
        <li>Fuqarolarning murojaatlari bilan ishlash mas’uliyati viloyat hokimining o‘rinbosarlari, umumiy boshqarma, guruh
          rahbarlari va kotiblarga yuklanadi</li>
        <li>Viloyat hokimligida fuqarolarni viloyat hokimi, hokim o‘rinbosarlari, hokimlik kotiblari, boshqarma va guruhlar
          rahbarlari qabulxonada qabul qiladi. Fuqarolarni qabul qilish viloyat hokimi qarori bilan tasdiqlangan jadval
          asosida amalga oshiriladi. Qabul qilish jadvali fuqarolar eʼtiboriga havola etiladi.</li>
        <li>Viloyat hokimi va hokimning o‘rinbosarlari fuqarolarni maxsus jadval asosida qabul qiladi</li>
      </ol>
      <h2 className='SYMajlislari__title'>Normativlar</h2>
      <span className='SYMajlislari__subtitle'>O‘ZBEKISTON RESPUBLIKASI “Jismoniy va yuridik shaxslarning murojaatlari to‘g‘risida”gi qonuniga o‘zgartish va
        qo‘shimchalar kiritish to‘g‘risida.</span>
      <span className='SYMajlislari__subtitle'>Qonunchilik palatasi tomonidan 2017-yil 15-avgustda qabul qilingan
        va Senat tomonidan 2017-yil 24-avgustda tasdiqlangan.</span>

      <div className="SYMajlislari__inner">
        <img src={umarovHokim} alt="" />
        <div>
          <h3>Uraimov Ismoiljon Dilmurodovich</h3>
          <b>Viloyat hokimligi Bosh boshqarmasi bosh mutaxassisi</b>
          <p>Tuman hokimi tumanda oliy mansabdor shaxs bo'lib, ayni bir vaqtda hududda vakillik va ijroiya hokimiyatini
            boshqaradi. O'z vakolatlarini yakkaboshchilik asosida amalga oshiradi. Tuman hokimi O'zbekiston Respublikasi
            Konstitutsiyasi, «Mahalliy davlat hokimiyati to'grisida» gi O'zbekiston Respublikasi Qonuni, O'zbekiston
            Respublikasi Prezidentining Farmonlari, qarorlari hamda Vazirlar Mahkamasi va viloyat hokimi qarorlari bilan
            belgilangan vakolatlar doirasida ijroiya hokimiyati faoliyatini tashkil etadi.
          </p>
        </div>
      </div>
      <ul className="SYMajlislari__info">
        <li>
          <span>Manzili</span>
          <a href='#'>170020, Andijon shahri, Navoiy shoh ko‘chasi, 71 uy</a>
        </li>
        <li>
          <span>Telefon</span>
          <a href='tel: 03742253270'>0(374)225-32-70</a>
        </li>
        <li>
          <span>Ishonch telefoni</span>
          <a href='tel:03742253270'>0 (374) 225-32-70</a>
        </li>
        <li>
          <span>e-mail</span>
          <a href='mailto: qabulhona@andijan.uz'>qabulhona@andijan.uz</a>
        </li>
      </ul>


    </div>

  )
}

export default SYMajlislari