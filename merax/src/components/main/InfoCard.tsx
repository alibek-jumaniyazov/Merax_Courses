import { TAcademyInfo } from "@/context/PagesInfoTypes/PagesInfoTypes";
import React from "react";

type Props = {
    item: TAcademyInfo;
};

export default function InfoCard({ item }: Props) {
    return (
        <div className="borderColor px-4 py-7 courseCard flex flex-col justify-center items-start gap-4">
            <p className=" w-[367px] font-semibold text-2xl leading-9 text-textColor">
                {item.title}
            </p>
            <span className="w-[367px] font-medium text-base text-[#909090]">
                {item.description}
            </span>
        </div>
    );
}
