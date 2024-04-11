import Image from "next/image";
import React from "react";
import certificate from "../../assets/images/certificate.png";
type Props = {};

export default function CourseCertificate({}: Props) {
    return (
        <div className="CourseCertificate w-full flex justify-between items-center  mt-36 p-9 bg-gradient-to-r from-[#DEFDDB] to-[#E1F8E5] rounded-2xl">
            <div className="flex flex-col justify-center items-start gap-5">
                <p className="font-semibold text-5xl text-textColor">
                    Kursni tugatib sertifikatga ega bo&apos;lasiz
                </p>
                <span className="w-[698px] font-medium text-xl text-[#979797] leading-8">
                    UX/UI & Web Design &apos;yicha professional onlayn video
                    kurs. Turli yo&apos;nalishlarda real case web dizaynlar
                    tayyorlash orqali o&apos;rganasiz.
                </span>
            </div>
            <div className="">
                <Image src={certificate} alt="" />
            </div>
        </div>
    );
}
