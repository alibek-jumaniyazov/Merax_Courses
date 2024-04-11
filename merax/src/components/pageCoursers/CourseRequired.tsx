import React, { useState } from "react";
import PcInfoImgOne from "../../assets/images/PcInfoImgOne.png";
import PcInfoImgTwo from "../../assets/images/PcInfoImgTwo.png";
import PcInfoImgThree from "../../assets/images/PcInfoImgThree.png";
import PcInfoImgFour from "../../assets/images/PcInfoImgFour.png";
import Image from "next/image";
import { Tequired } from "@/context/PagesInfoTypes/PagesInfoTypes";
type Props = {};

export default function CourseRequired({}: Props) {
    const [required, setRequired] = useState<Tequired[]>([
        {
            image: PcInfoImgOne,
            title: "Intel Core i5 (10-avlod)",
            info: "Protsessor",
        },
        {
            image: PcInfoImgTwo,
            title: "8 GB",
            info: "Tezkor xotira (RAM)",
        },
        {
            image: PcInfoImgThree,
            title: "Windows 10, 64 razryadli",
            info: "Operatsion sistema",
        },
        {
            image: PcInfoImgFour,
            title: "SSD 256 GB yoki HDD 512 GB",
            info: "Asosiy xotira",
        },
    ]);

    return (
        <div className="CourseRequired w-full flex flex-col justify-center items-center gap-12 mt-24 mainFont bg-color">
            <p className="colorGradient font-bold text-4xl leading-10 p-4">
                Kurs uchun minimum talab qilinadigan noutbuk
            </p>
            <div className="w-full flex flex-wrap justify-center items-center gap-8">
                {required.map((item, index) => (
                    <div
                        className="w-[40%] flex justify-start items-center gap-5 m-1  bg-white shadow-xl p-9 rounded-3xl"
                        key={index}
                    >
                        <Image src={item.image} alt="info Img" />
                        <div className="flex flex-col justify-center items-start gap-2">
                            <p className="font-semibold text-[22px]">
                                {item.title}
                            </p>
                            <span className="font-normal text-mainColor">
                                {item.info}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
