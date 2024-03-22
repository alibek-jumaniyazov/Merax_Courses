import React from 'react'
import { Tinfo } from './AkademiyInfo'

type Props = {
    item:Tinfo,
}

export default function InfoCard({item}: Props) {
  return (
    <div className='borderColor px-4 py-7 w-[400px] flex flex-col justify-center items-start gap-4'>
        <p className='font-semibold text-2xl leading-9 text-textColor'>{item.title}</p>
        <span className='font-medium text-base text-[#909090]'>{item.description}</span>
    </div>
  )
}