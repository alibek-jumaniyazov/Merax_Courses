"use client"
import Image from "next/image";
import React, { useState } from "react";
import SelectImg from "../../assets/images/SelectImg.png";
type Props = {};

export default function Advantages({}: Props) {
  type TAdvantages = {
    id: number;
    info: string;
  };

  const [advantages, setAdvantages] = useState<TAdvantages[]>([
    {
        id:1,
        info:"80% tajriba va ko'nikma"
    },
    {
        id:2,
        info:"Mentorlarimiz eng kamida 2 yil dasturlashda tajribaga ega"
    },
    {
        id:3,
        info:"Co-working’dan 24/7 foydalanish imkonyati"
    },
    {
        id:4,
        info:"Kurs oxirida tajriba o’tash uchun labaratoriya"
    },
    
  ]);

  return (
    <div className="Advantages w-full flex justify-between items-center mt-40 mainFont bg-backgroundColor rounded-[20px]">
      <div className="flex flex-col justify-center items-start gap-10 p-9">
        <p className="font-semibold text-3xl text-textColor mb-2">Bizda o&apos;qishning afzalliklari</p>
        <div className="flex flex-col justify-center items-start gap-7">
            {
                advantages.map((item) => (
                    <div className="flex justify-center items-center gap-5" key={item.id}>
                        <div className="w-12 h-12 bg-[#FEBA0D] rounded-lg flex justify-center items-center">
                            <p className="font-semibold text-3xl text-black">{item.id}</p>
                        </div>
                        <p className="w-[504px] font-medium text-textColor text-xl">{item.info}</p>
                    </div>
                ))
            }
        </div>
      </div>
      <div className="">
        <Image src={SelectImg} alt="select image" />
      </div>
    </div>
  );
}
