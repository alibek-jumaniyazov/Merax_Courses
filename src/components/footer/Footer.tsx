"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Icons } from "@/assets/icons/icons";
import { Ticon } from "@/context/PagesInfoTypes/PagesInfoTypes";
type Props = {};

export default function Footer({}: Props) {
  const [footerIcons, setFooterIcons] = useState<Ticon[]>([
    {
      image: <Icons.youtube />,
      url: "https://www.youtube.com/@meraxuz",
    },
    {
      image: <Icons.telegramIcon />,
      url: "https://t.me/meraxuz",
    },
    {
      image: <Icons.instagramIcon />,
      url: "https://www.instagram.com/meraxuz",
    },
  ]);

  return (
    <div className="Footer mainFont w-full flex justify-center items-center mainFont">
      <div className="2xl:w-[1440px] w-[1240px] flex flex-col justify-center items-start">
        <div className="w-full flex justify-between items-center border-b border-[#DEDEDE] pb-12 ">
          <Link href="/">
            <Icons.logo />
          </Link>
          <div className="flex gap-4 ">
            {footerIcons.map((item, index) => (
              <Link
                className="bg-mainColor p-2 w-8 h-8 rounded-full flex justify-center items-center"
                href={item.url}
                key={index}
              >
                {item.image}
              </Link>
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
