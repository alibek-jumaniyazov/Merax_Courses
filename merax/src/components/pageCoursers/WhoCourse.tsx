import { TWho } from "@/app/frontend/page";
import Image from "next/image";
import React from "react";

type Props = {
  item: TWho;
};

export default function WhoCourse({ item }: Props) {
  return (
    <div className="WhoCourse w-full flex justify-between items-start  mt-36 ">
         <div className="w-1/2 flex flex-col justify-center items-start gap-11">
        <p className="bg-mainColor text-white font-bold text-4xl p-3 rounded-md">{item.title}</p>
        <div className="flex flex-col justify-center items-start gap-2">
          <span className="font-semibold text-2xl text-textColor mb-2">{item.text}</span>
          <span className="w-[90%] font-medium text-textColor text-xl">{item.info}</span>
        </div>
      </div>
      <div className="w-[40%]">
        <Image src={item.image} alt="" className="w-full rounded-2xl"/>
      </div>
    
    </div>
  );
}
