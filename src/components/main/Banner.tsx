import Image from "next/image";
import React from "react";
import infoImg from "../../assets/images/infoImg.png";
import lines from "../../assets/images/lines.png";
import topWhite from "../../assets/images/topWhite.png";
import bottomWhite from "../../assets/images/bottomWhite.png";
import { Icons } from "@/assets/icons/icons";
import Link from "next/link";

type Props = {};

export default function Banner({}: Props) {
  return (
    <div className="Banner w-full h-[481px] bg-gradient-to-r from-[#01BD80] to-[#39E1AB] rounded-2xl flex justify-start items-center 2xl:gap-[5%] pl-12 pr-12 relative overflow-hidden">
      <div className="flex flex-col justify-center items-start gap-3 z-10">
        <p className="font-semibold text-textColor text-5xl w-[530px] leading-[69px]">
          Amaliyot va nazariya asosida yuksalish
        </p>
        <span className="font-medium text-2xl text-[#4D4D4D]">
          Xalqaro IT mutaxassislarini yetishtirish
        </span>
        <Link href="#contact">
          <button className="bg-textColor px-8 py-4 text-mainColor text-lg font-bold rounded-lg mt-4 active:scale-75 transition-all duration-300">
            Ariza qoldiring
          </button>
        </Link>
      </div>
      <div className="relative h-full flex justify-center items-center">
        <Image src={topWhite} alt="" className="absolute top-0 left-32   z-0" />
        <Image src={infoImg} alt="" />
        <Image
          src={bottomWhite}
          alt=""
          className="absolute bottom-0 left-32 z-0"
        />
      </div>
      <div className="">
        <Image src={lines} alt="" className="absolute top-0 left-0 z-0" />
        <div className="">
          <div className="absolute bottom-4 right-12 z-0">
            <Icons.topBannerIcons />
          </div>
          <div className="absolute top-20 2xl:right-12 right-3 z-0">
            <Icons.textInfo />
          </div>
        </div>
      </div>
    </div>
  );
}
