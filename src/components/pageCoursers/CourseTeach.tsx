import { TTeach } from "@/context/PagesInfoTypes/PagesInfoTypes";
import Image from "next/image";
import React from "react";

type Props = {
    item: TTeach;
};

export default function CourseTeach({ item }: Props) {
    return (
        <div className="CourseTeach w-full flex justify-between items-center mt-40 bg-mainColor rounded-[20px] p-9">
            <div className="flex flex-col justify-center items-start gap-3">
                <div className="flex flex-col justify-center items-start gap-0">
                    <p className="font-semibold text-xl text-white">
                        Kurs o’qituvchisi
                    </p>
                    <p className="font-semibold text-[52px] text-white">
                        {item.name}
                    </p>
                </div>
                <span className="font-semibold text-xl text-white">
                    Qilgan loyihalari:
                </span>
                <span className="font-medium text-sm text-white">
                    {item.projects}
                </span>
            </div>
            <div className="w-52 h-52 rounded-full bg-white overflow-hidden">
                <Image
                    src={item.img}
                    alt=""
                    className="w-full -translate-y-6"
                />
            </div>
        </div>
    );
}
