import React from 'react'

type Props = {}

export default function Contact({}: Props) {
  return (
    <div className='Contact w-full flex justify-between items-center mt-40 mainFont'>
        <div className="">
            <p className=''>Yana savollaringiz qoldimi?</p>
            <span className=''>Agar sizda format haqida savollaringiz bo'lsa yoki nimani tanlashni bilmasangiz, raqamingizni qoldiring va operatorlarimiz sizga qayta qo'ng'iroq qilishadi.</span>
        </div>
        <div className="">
            <input type="text" placeholder='Ismingizni kiriting'/>
            <InputMask type="tel" name="tel" id="phone" mask="(99) 999-99-99" placeholder="Telefon Raqamingiz" value={formData.tel} onChange={inputValue}></InputMask>
            <button>Yuborish</button>
        </div>
    </div>
  )
}