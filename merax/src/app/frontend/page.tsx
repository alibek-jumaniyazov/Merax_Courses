"use client";
import React, { useState } from "react";
import ContactCourse from "@/components/pageCoursers/ContactCourse";
import CourseDate from "@/components/pageCoursers/CourseDate";
import CourseInfo from "@/components/pageCoursers/CourseInfo";
import CourseTeach from "@/components/pageCoursers/CourseTeach";
import whoImg from "../../assets/images/frontendImg.png";
import bannerImg from "../../assets/images/bannerOne.png";
import frontendTeach from "../../assets/images/frontendTeach.png";
import WhoCourse from "@/components/pageCoursers/WhoCourse";
import CourseBanner from "@/components/pageCoursers/CourseBanner";
import CourseFits from "@/components/pageCoursers/CourseFits";
type Props = {};

export type TBanner = {
  title: string;
  info: string;
  img: any;
};

export type TInfo = {
  til: string;
  date: string;
  hard: string;
  create: string;
};

export type TContact = {
  title: string;
  desc: string;
};
export type TTeach = {
  name: string;
  projects: string;
  img: any;
};
export type TCourseInfoItem = {
  id: number;
  info: string;
};
export type TCourseInfo = {
  after: TCourseInfoItem[];
  before: TCourseInfoItem[];
};

export type TCourseTFitsItem = {
  title: string;
  info: string;
};
export type TFits = {
  one: TCourseTFitsItem[];
  tow: TCourseTFitsItem[];
};
export type TWho = {
  image: any;
  title: string;
  text: string;
  info: string;
};

export default function Page({}: Props) {
  const [courseBanner, setCourseBanner] = useState<TBanner[]>([
    {
      title: "Front-End",
      info: "Jahon darajasidagi foydalanuvchi interfeysini yaratish va Front-End sohasida muvaffaqiyatli martaba qilishni o'rganing",
      img: bannerImg,
    },
  ]);

  const [courseHeadInfo, setCourseHeadInfo] = useState<TInfo[]>([
    {
      til: "O’zbek",
      date: "10 oy",
      hard: "3 soat",
      create: "Web Sahia",
    },
  ]);

  const [contactInfo, setContactInfo] = useState<TContact[]>([
    {
      title: "Kurs haqida batafsil ma'lumot olishni xohlaysizmi?",
      desc: "Agar sizda format haqida savollaringiz bo'lsa yoki nimani tanlashni bilmasangiz, raqamingizni qoldiring va operatorlarimiz sizga qayta qo'ng'iroq qilishadi.",
    },
  ]);

  const [courseTeach, setCourseTeach] = useState<TTeach[]>([
    {
      name: "Alisherov Sadulla",
      projects:
        "E-ses, Gameshop, Darital-oil, Appx.group sayti, Renta, Eureka, Edu-action va boshqalar.",
      img: frontendTeach,
    },
  ]);

  const [courseWho, setCourseWho] = useState<TWho[]>([
    {
      image: whoImg,
      title: "Frontend dasturchi kim?",
      text: "Frontend dasturchilar – sayt va dasturlarning tashqi qismiga javobgar mutaxassislardir.",
      info: "Frontend dasturchilar saytning yuzini ishlab chiqishadi, ya'ni siz internet tarmoqlarida ko'radigan har qanday dizaynlar ular tomonidan dasturlangan.",
    },
  ]);

  const [courseInfo, setCourseInfo] = useState<TCourseInfo>({
    after: [
      {
        id: 1,
        info: "Dasturlashga oid ma’lum bir ko’nikmalar, algoritmlar, dasturlash va uning mashhur yo’nalishlari bo'yicha tushuncha",
      },
      {
        id: 2,
        info: "HTML, CSS, SASS",
      },
      {
        id: 3,
        info: "Javascript, Git bilan ishlash, Build Tools, Algoritmlar, DOM bilan ishlash",
      },
      {
        id: 4,
        info: "React js, Redux, Material UI, Axios bilan ishlash, Vercelga deploy qilish, Real loihalar bilan ishlash",
      },
      {
        id: 5,
        info: "React.js advanced, Next.js (Page router va App router), Typescript, Prisma bilan API yozish, Tailwindcss, Real loyihalar bilan ishlash.",
      },
    ],
    before: [
      {
        id: 6,
        info: "Loyihani mukammal rejalashtirish, File architecture sozlash, Loyihalarni deploy qilish, Serverga joylash, Animatsiyalar yaratish va ular bilan ishlash, Verstka qilish, Har qanday qiyinchilikdagi website larning frontend qismini qila olish, O'rganishni o'rganish. Portfolio uchun Pet Projectlarga ega bo'lasiz.",
      },
    ],
  });

  const [courseFits, setCourseFits] = useState<TFits>({
    one: [
      {
        title: "Front-End sohasiga yangi kelganlar",
        info: "Dasturlash bo'yicha bilimga ega bo'lmagan har bir kishi Front-End sohasiga osongina o'rganishi mumkin.",
      },
    ],
    tow: [
      {
        title: "Junior Front-End chilar (Tajriba to’plash uchun)",
        info: "Ushbu sohada asosiy bilimlarga ega bo'lgan dastruchilar o'z bilimlarini mustahkamlash orqali yuqori darajaga ko'tarilishlari mumkin",
      },
    ],
  });

  return (
    <div className="">
      {courseBanner.map((item) => (
        <CourseBanner item={item} />
      ))}
      {courseHeadInfo.map((item, index) => (
        <CourseDate key={index} item={item} />
      ))}
      {courseWho.map((item, index) => (
        <WhoCourse key={index} item={item} />
      ))}
      <CourseInfo courseInfo={courseInfo} />
      <CourseFits courseFits={courseFits} />
      {courseTeach.map((item, index) => (
        <CourseTeach key={index} item={item} />
      ))}

      {contactInfo.map((item, index) => (
        <ContactCourse key={index} item={item} />
      ))}
    </div>
  );
}
