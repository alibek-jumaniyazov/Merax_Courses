import React, { useState } from "react";
import logo from "../../assets/icons/logo.svg";
import Image from "next/image";
type Props = {};

export default function Footer({}: Props) {

  type Ticon = {
    image:any,
    url:string,
  }

  const [footerIcons, setFooterIcons] = useState([
    {
      image:logo,
      url:""
    }
  ])

  return (
    <div className="Footer mainFont w-full flex justify-center items-center">
      <div className="w-[1440px] flex flex-col justify-center items-start">
        <div className="">
          <Image src={logo} alt="" />
          <div className="">

          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
