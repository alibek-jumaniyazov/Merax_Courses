"use client";
import React, { useState } from "react";
import CourseCard from "./CourseCard";
import { Icons } from "@/assets/icons/icons";
import { TCourse } from "@/context/PagesInfoTypes/PagesInfoTypes";

type Props = {};

export default function Courses({}: Props) {
  const [course, setCourse] = useState<TCourse[]>([
    {
      id: 1,
      title: "Frontend - React",
      description:
        "foydalanuvchiga ko’rinadigan sahifalarni yasash imkonini beradi",
      url: "frontend",
      icon: <Icons.courseIcon1 />,
    },
    {
      id: 2,
      title: "Backend - Nodejs",
      description: "veb-saytlarning server kodini tezda yozish imkonini beradi",
      url: "backend",
      icon: <Icons.courseIcon1 />,
    },
    {
      id: 3,
      title: "Foundation",
      description:
        "dasturlashga ilk qadam, kompyuter va umumiy dasturlash bilan tanishish",
      url: "foundation",
      icon: <Icons.courseIcon2 />,
    },
    {
      id: 4,
      title: "Grafik Dizayn",
      description:
        "ijtimoiy tarmoqlar uchun posterlar, flyerlar, etiketka, bannerlarni ishlash",
      url: "grafik-dizayn",
      icon: <Icons.courseIcon2 />,
    },
    {
      id: 5,
      title: "IT English",
      description:
        "it bo'yicha ingliz tili so'zlar va meetinglarda ravon gaprish",
      url: "it-english",
      icon: <Icons.courseIcon3 />,
    },
  ]);

  return (
    <div className="Courses w-full flex flex-col justify-center items-center gap-12  mt-24  mainFont ">
      <p className="colorGradient font-bold text-4xl leading-10 p-4">
        O’z sohangizni tanlang
      </p>
      <div className="w-full flex justify-center items-center gap-5 flex-wrap py-12 bg-[#EDF8F5]">
        {course.map((item) => (
          <CourseCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
