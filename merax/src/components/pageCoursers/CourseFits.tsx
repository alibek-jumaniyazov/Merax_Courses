import React from "react";

type Props = {
  courseFits: any;
};

export default function CourseFits({ courseFits }: Props) {
  return (
    <div className="CourseFits w-full flex flex-col justify-center items-center gap-24  mt-36">
        <p className="font-bold text-4xl text-mainColor leading-10">Kurs kimlarga mos keladi?</p>
      <div className="w-full flex justify-between items-start">
        {courseFits.one.map((item: any) => (
          <div className="w-1/2 p-11 flex flex-col justify-center items-start gap-4">
            <p className="w-[70%] font-bold text-4xl text-[#747474] leading-10">
              {item.title}
            </p>
            <span className="font-semibold text-xl text-[#979797]">
              {item.info}
            </span>
          </div>
        ))}
        {courseFits.tow.map((item: any) => (
          <div className="w-1/2 bg-mainColor rounded-r-2xl p-11 flex flex-col justify-center items-start gap-4">
            <p className="w-[73%] font-bold text-4xl text-white leading-10">
              {item.title}
            </p>
            <span className=" font-semibold text-xl text-white">
              {item.info}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
