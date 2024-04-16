import React from "react";
import { Icons } from "../../assets/icons/icons";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="Header mainFont w-full flex justify-center items-center">
      <div className="2xl:w-[1440px] w-[1240px]  flex justify-between items-center ">
        <div className="">
          <Link href="/">
            <Icons.logo />
          </Link>
        </div>
        <div className="flex justify-center items-center gap-9">
          <div className="flex justify-center  items-center border border-[#D2D2D2] rounded-[100px]">
            <a
              href="tel:+998904299019"
              className="text-textColor text-lg font-medium p-3"
            >
              +998(90) 429-90-19
            </a>

            <div className="flex justify-center items-center bg-mainColor p-2 rounded-full w-12 h-12 cursor-pointer">
              <Icons.phoneIcon />
            </div>
          </div>
          <Link href="https://t.me/merax_admin" target="_blank">
            <div className="flex justify-center items-center bg-mainColor rounded-xl active:scale-75 transition-all duration-300">
              <button className="px-4 py-3 font-bold text-lg text-white">
                Bepul konsultatsiya
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
