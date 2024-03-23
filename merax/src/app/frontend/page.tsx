"use client"
import CourseDate from "@/components/frontend/CourseDate";
import Banner from "@/components/main/Banner";
import React, { useState } from "react";

type Props = {};
export type TInfo = {
    til: string;
    date: string;
    hard: string;
    create: string;
  };
export default function page({}: Props) {


  const [courseHeadInfo, setCourseHeadInfo] = useState<TInfo[]>([
    {
      til: "O’zbek",
      date: "5 oy",
      hard: "Boshlang'ich",
      create: "Portolio",
    },
  ]);

  return (
    <div className="">
      <Banner />
      {
        courseHeadInfo.map((item) => (
            <CourseDate item={item}/>
        ))
      }
    </div>
  );
}
