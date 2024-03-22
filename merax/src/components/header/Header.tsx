import React from 'react'
import logo from '../../assets/icons/logo.svg'
import phoneIcon from '../../assets/icons/phoneIcon.svg'
import Image from 'next/image'

type Props = {}

export default function Header({}: Props) {
  return (
    <div className='Header'>
      <div className="">
        <Image src={logo} alt=""/>
      </div>
      <div className="">
        <p className=''>+998(90) 429-90-19</p>
        <Image src={phoneIcon} alt=""/>
        <button>Bepul konsultatsiya</button>
      </div>
    </div>
  )
}