import { Icons } from "@/assets/icons/icons";
import Link from "next/link";
import React from "react";

type Props = {};

export default function GetInfo({}: Props) {
  return (
    <div className="GetInfo w-full flex items-center mt-40 mainFont  justify-between bg-backgroundColor p-14 rounded-[20px]">
      <div className="flex flex-col justify-center items-start gap-12">
        <div className="flex flex-col justify-center items-start gap-4">
          <p className="font-semibold text-3xl leading-8 text-textColor">
            Kasb tanlashda qiyanlyapsizmi?
          </p>
          <span className=" w-[695px] font-medium text-lg leading-7 text-[#979797]">
            Bepul maslahat olish uchun so&apos;rov qoldiring va biz sizga
            to&apos;g&apos;ri tanlov qilishga yordam beramiz
          </span>
        </div>
        <Link href="https://t.me/merax_admin">
          <div className="w-[228px] flex justify-center items-center bg-mainColor rounded-xl active:scale-75 transition-all duration-300 cursor-pointer">
            <button className="px-4 py-3 font-bold text-lg text-white">
              Maslahat olish
            </button>
          </div>
        </Link>
      </div>
      <div className="">
        <Icons.bgQuest width={400}/>
      </div>
    </div>
  );
}
