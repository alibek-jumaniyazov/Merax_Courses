import { TInfo } from "@/app/frontend/page";
import React from "react";

type Props = {
  item: TInfo;
};

export default function CourseDate({ item }: Props) {
  return (
    <div className="CourseDate w-full flex justify-between items-center mt-40">
      <div className="flex flex-col justify-center items-start gap-1">
        <p className="font-medium text-2xl text-textColor">Ta’lim tili</p>
        <span className="font-semibold text-3xl text-mainColor">
          {item.til}
        </span>
      </div>
      <div className="bg-[#D9D9D9] w-28 h-[1px]"></div>
      <div className="flex flex-col justify-center items-start gap-1">
        <p className=" font-medium text-2xl text-textColor">Davomiyligi</p>
        <span className="font-semibold text-3xl text-mainColor">
          {item.date}
        </span>
      </div>
      <div className="bg-[#D9D9D9] w-28 h-[1px]"></div>
      <div className="flex flex-col justify-center items-start gap-1">
        <p className="font-medium text-2xl text-textColor">Dars</p>
        <span className="font-semibold text-3xl text-mainColor">
          {item.hard}
        </span>
      </div>
      <div className="bg-[#D9D9D9] w-28 h-[1px]"></div>
      <div className="flex flex-col justify-center items-start gap-1">
        <p className="font-medium text-2xl text-textColor">Siz yaratasiz</p>
        <span className="font-semibold text-3xl text-mainColor">
          {item.create}
        </span>
      </div>
    </div>
  );
}
