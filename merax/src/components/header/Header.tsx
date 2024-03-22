import React from "react";
import logo from "../../assets/icons/logo.svg";
import phoneIcon from "../../assets/icons/phoneIcon.svg";
import Image from "next/image";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="Header mainFont w-full flex justify-center items-center">
      <div className="w-[1440px] flex justify-between items-center">
        <div className="">
          <Image src={logo} alt="" />
        </div>
        <p className="">+998(90) 429-90-19</p>
        <Image src={phoneIcon} alt="" />
        <div className="flex justify-center items-center gap-">
          <button className="">Bepul konsultatsiya</button>
        </div>
      </div>
    </div>
  );
}
