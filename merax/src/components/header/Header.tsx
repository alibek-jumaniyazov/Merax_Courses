import React from "react";
import logo from "../../assets/icons/logo.svg";
import phoneIcon from "../../assets/icons/phoneIcon.svg";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="Header mainFont w-full flex justify-center items-center">
      <div className="w-[1440px] flex justify-between items-center ">
        <div className="">
          <Link href="/">
            <Image src={logo} alt="" />
          </Link>
        </div>
        <div className="flex justify-center items-center gap-9">
          <div className="flex justify-center  items-center border border-[#D2D2D2] rounded-[100px]">
            <p className="text-textColor text-lg font-medium p-3">
              +998(90) 429-90-19
            </p>
            <div className="flex justify-center items-center bg-mainColor p-2 rounded-full w-12 h-12 cursor-pointer">
              <Image src={phoneIcon} alt="" width={26} className=" " />
            </div>
          </div>
          <div className="flex justify-center items-center bg-mainColor rounded-xl active:scale-75 transition-all duration-300">
            <button className="px-4 py-3 font-bold text-lg text-white">
              Bepul konsultatsiya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
