import React from "react";

type Props = {};

export default function GetInfo({}: Props) {
  return (
    <div className="GetInfo w-full flex justify-between items-center mt-40 mainFont">
      <div className="flex flex-col justify-center items-start gap-4">
        <p className="font-semibold text-3xl leading-8 text-textColor">Kasb tanlashda qiyanlyapsizmi?</p>
        <span className=" w-[695px] font-medium text-lg leading-7 text-[#979797]">
          Bepul maslahat olish uchun so'rov qoldiring va biz sizga to'g'ri
          tanlov qilishga yordam beramiz
        </span>
      </div>
      <div className="flex justify-center items-center bg-mainColor rounded-xl active:scale-75 transition-all duration-300">
        <button className="px-4 py-3 font-bold text-lg text-white">
          Maslahat olish
        </button>
      </div>
    </div>
  );
}
