import React from "react";
import Link from "next/link";
import { Icons } from "@/assets/icons/icons";
import { TCourse } from "@/context/PagesInfoTypes/PagesInfoTypes";

type Props = {
  item: TCourse;
};

export default function CourseCard({ item }: Props) {
  return (
    <div className="CourseCard courseCard  flex flex-col justify-center items-start gap-3 bg-white shadow-xl p-9 rounded-3xl relative mainFont">
      <p className="font-semibold text-2xl text-textColor leading-9">
        {item.title}
      </p>
      <span className="w-[348px] font-medium text-base text-[#909090]">
        {item.description}
      </span>
      <Link className="flex justify-center items-center gap-1" href={item.url}>
        <p className="font-normal text-base text-mainColor">Batafsil</p>
        <Icons.arrowRight />
      </Link>
      <div className="absolute bottom-0 right-0">{item.icon}</div>
    </div>
  );
}
