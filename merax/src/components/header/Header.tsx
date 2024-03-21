import React from 'react'
import logo from '../../assets/icons/logo.svg'
import phoneIcon from '../../assets/icons/phoneIcon.svg'

type Props = {}

export default function Header({}: Props) {
  return (
    <div className='Header'>
      <div className="">
        <img src={logo} alt="" />
      </div>
      <div className="">
        <p className=''>+998(90) 429-90-19</p>
        <img src={phoneIcon} alt="" />
        <button>Bepul konsultatsiya</button>
      </div>
    </div>
  )
}