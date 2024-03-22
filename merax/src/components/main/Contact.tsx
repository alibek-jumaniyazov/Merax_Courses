import React from "react";

type Props = {};

export default function Contact({}: Props) {
  return (
    <div className="Contact w-full flex justify-between items-center mt-40 mb-40 mainFont">
      <div className="flex flex-col justify-center items-start gap-5">
        <p className="font-semibold text-5xl text-textColor">
          Yana savollaringiz qoldimi?
        </p>
        <span className=" w-[698px] font-medium text-xl text-[#979797] leading-8">
          Agar sizda format haqida savollaringiz bo'lsa yoki nimani tanlashni
          bilmasangiz, raqamingizni qoldiring va operatorlarimiz sizga qayta
          qo'ng'iroq qilishadi.
        </span>
      </div>
      <div className="flex flex-col justify-center items-start bg-[#ebeaea] gap-6 rounded-3xl py-10 px-12">
        <input type="name" name="name" placeholder="Ismingizni kiriting" className="w-full p-4 outline-none rounded-xl border border-[#D0D0D0] "/>
        <input type="tel" name="tel" placeholder="" className="w-full p-4 outline-none rounded-xl border border-[#D0D0D0] " />
        <div className="w-[383px] flex justify-center items-center bg-mainColor rounded-xl active:scale-75 transition-all duration-300">
          <button className="px-4 py-3 font-bold text-lg text-white">
            Yuborish
          </button>
        </div>
      </div>
    </div>
  );
}
