import Link from "next/link";
import { Icons } from "@/assets/icons/icons";
import { TCourse } from "@/context/PagesInfoTypes/PagesInfoTypes";
import { Tooltip } from "antd";

type Props = {
    item: TCourse;
};

export default function CourseCard({ item }: Props) {
    return (
        <Link className="" href={item.url} target="_blank">
            <Tooltip
                placement="topRight"
                title="Kirish uchun bosing"
                color="#01BD80"
                className="mt-5 "
            >
                <div className="CourseCard courseCard  flex flex-col justify-center items-start gap-3 bg-white shadow-xl p-9 rounded-3xl relative mainFont cursor-pointer hover:-translate-y-4  transition-all duration-200">
                    <p className="font-semibold text-2xl text-textColor leading-9">
                        {item.title}
                    </p>
                    <span className="w-[348px] font-medium text-base text-[#909090]">
                        {item.description}
                    </span>
                    <div className="flex justify-center items-center gap-1">
                        <p className="font-normal text-base text-mainColor">
                            Batafsil
                        </p>
                        <Icons.arrowRight />
                    </div>
                    <div className="absolute bottom-0 right-0">{item.icon}</div>
                </div>
            </Tooltip>
        </Link>
    );
}
