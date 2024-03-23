"use client";
import React from "react";
type Props = {
  courseInfo: any;
};

export default function CourseInfo({ courseInfo }: Props) {
  return (
    <div className="Advantages w-full flex justify-between items-center mt-40 mainFont">
      <div className="flex flex-col justify-center items-start gap-10">
        <p className="font-semibold text-3xl text-textColor mb-2">
         Kursda nimalarni o'rganasiz?
        </p>
        <div className="flex flex-col justify-center items-start gap-7">
          {courseInfo.map((item:any) => (
            <div
              className="flex justify-center items-center gap-5"
              key={item.id}
            >
              <div className="w-12 h-12  rounded-full border-2 border-mainColor flex justify-center items-center">
                <p className="font-semibold text-3xl text-black">{item.id}</p>
              </div>
              <p className=" font-medium text-textColor text-xl">
                {item.info}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
