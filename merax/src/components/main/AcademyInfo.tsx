"use client";
import React, { useState } from "react";
import InfoCard from "./InfoCard";
import { TAcademyInfo } from "@/context/PagesInfoTypes/PagesInfoTypes";

type Props = {};



export default function AcademiyInfo({}: Props) {
    const [info, setInfo] = useState<TAcademyInfo[]>([
        {
            title: "Katta loyihalarda tajribaga ega bo'lgan mentorlar ",
            description:
                "Mentorlarimiz eng kamida 3 tadan ko'p bo'lgan loyihalarda ishtirok etishgan.",
        },
        {
            title: "O'z ishini ustasi bo'lgan mutaxassislar",
            description:
                "Mentorlarimiz hozirgi kunda katta kompaniyalarda o'z faoliyatini olib borishadi.",
        },
        {
            title: "Kelajak uchun kafolatlangan poydevor",
            description:
                "Mentorlarimiz hozirgi kunda katta kompaniyalarda o'z faoliyatini olib borishadi.",
        },
    ]);

    return (
        <div className="AkademiyInfo w-full flex  flex-col justify-center items-center gap-12 mt-24 mainFont bg-color">
            <p className="colorGradient font-bold text-4xl leading-10 p-4">
                Nega aynan biz?
            </p>
            <div className="w-full flex justify-center items-center gap-5">
                {info.map((item, index) => (
                    <InfoCard item={item} key={index} />
                ))}
            </div>
        </div>
    );
}
