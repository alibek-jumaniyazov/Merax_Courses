"use client";
import React, { useState } from "react";
import courseIcon1 from "../../../assets/icons/courseIcon1.svg";
import courseIcon2 from "../../../assets/icons/courseIcon2.svg";
import courseIcon3 from "../../../assets/icons/courseIcon3.svg";
import CourseCard from "./CourseCard";

type Props = {};

export type TCourse = {
    id: number;
    title: string;
    description: string;
    url: string;
    icon: any;
};

export default function Courses({}: Props) {
    const [course, setCourse] = useState<TCourse[]>([
        {
            id: 1,
            title: "Frontend - React",
            description:
                "foydalanuvchiga ko’rinadigan sahifalarni, dashboardlarni yasash imkonini beradi",
            url: "frontend",
            icon: courseIcon1,
        },
        {
            id: 2,
            title: "Backend - Nodejs",
            description:
                "veb-saytlarning server kodini tezda yozish imkonini beradi",
            url: "backend",
            icon: courseIcon1,
        },
        {
            id: 3,
            title: "Foundation",
            description:
                "dasturlashga ilk qadam, kompyuter va umumiy dasturlash bilan tanishish",
            url: "foundation",
            icon: courseIcon2,
        },
        {
            id: 4,
            title: "Grafik Dizayn",
            description:
                "ijtimoiy tarmoqlar uchun posterlar, flyerlar, etiketka, bannerlarni ishlash",
            url: "gafikdizayn",
            icon: courseIcon2,
        },
        {
            id: 5,
            title: "IT English",
            description:
                "har qanday foydalanuvchi interfeyslarini foydalanishga qulay qilish",
            url: "itenglish",
            icon: courseIcon3,
        },
    ]);

    return (
        <div className="Courses w-full flex flex-col justify-center items-center gap-32 mt-24 mainFont">
            <p className="colorGradient font-bold text-4xl leading-10 p-4">
                O’z sohangizni tanlang
            </p>
            <div className="w-full flex justify-center items-center gap-5 flex-wrap">
                {course.map((item) => (
                    <CourseCard item={item} key={item.id} />
                ))}
            </div>
        </div>
    );
}
