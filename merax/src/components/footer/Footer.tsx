"use client";
import React, { useState } from "react";
import logo from "../../assets/icons/logo.svg";
import youtubeIcon from "../../assets/icons/youtubeIcon.svg";
import telegramIcon from "../../assets/icons/telegramIcon.svg";
import instagramIcon from "../../assets/icons/instagramIcon.svg";
import Image from "next/image";
type Props = {};

export default function Footer({}: Props) {
  type Ticon = {
    image: any;
    url: string;
  };

  const [footerIcons, setFooterIcons] = useState<Ticon[]>([
    {
      image: youtubeIcon,
      url: "",
    },
    {
      image: telegramIcon,
      url: "",
    },
    {
      image: instagramIcon,
      url: "",
    },
  ]);

  return (
    <div className="Footer mainFont w-full flex justify-center items-center mainFont">
      <div className="w-[1440px] flex flex-col justify-center items-start">
        <div className="w-full flex justify-between items-center border-b border-[#DEDEDE] pb-12 ">
          <Image src={logo} alt="" />
          <div className="flex gap-4 ">
            {footerIcons.map((item , index) => (
              <a className="bg-mainColor p-2 w-8 h-8 rounded-full flex justify-center items-center" href={item.url} key={index}>
                <Image src={item.image} alt="" className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-between items-center pt-12 font-normal text-lg">
              <p>© Merax Academy 2023 All rights reserved</p>
              <span>by Appx Group</span>
        </div>
      </div>
    </div>
  );
}
