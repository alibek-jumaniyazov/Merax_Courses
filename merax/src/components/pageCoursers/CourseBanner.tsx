import { TBanner } from "@/context/PagesInfoTypes/PagesInfoTypes";
import Image from "next/image";
import React from "react";

type Props = {
    item: TBanner;
};

export default function CourseBanner({ item }: Props) {
    return (
        <div className="Banner w-full h-[481px] bg-gradient-to-r from-[#01BD80] to-[#39E1AB] rounded-2xl flex justify-start items-center gap-[5%] pl-12 pr-12 relative overflow-hidden">
            <div className="flex flex-col justify-center items-start gap-3 z-20">
                <p className="font-semibold text-white text-5xl w-[530px] leading-[69px]">
                    {item.title}
                </p>
                <span className="w-[60%] font-medium text-2xl text-white">
                    {item.info}
                </span>
                <div className="flex justify-center items-center bg-mainColor rounded-xl active:scale-75 transition-all duration-300  mt-4">
                    <button className="px-8 py-4 text-white text-lg font-bold ">
                        Ariza qoldiring
                    </button>
                </div>
            </div>

            <div
                className={`absolute w-full h-full top-0 left-0 bg-[#00000066] z-10 blur-sm`}
            >
                <Image src={item.img} alt="" className="z-0 w-full h-full " />
            </div>
        </div>
    );
}
