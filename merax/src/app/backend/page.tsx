"use client";
import React, { useState } from "react";
import ContactCourse from "@/components/pageCoursers/ContactCourse";
import CourseDate from "@/components/pageCoursers/CourseDate";
import CourseInfo from "@/components/pageCoursers/CourseInfo";
import CourseTeach from "@/components/pageCoursers/CourseTeach";
import whoImg from "../../assets/images/frontendImg.png";
import bannerImg from "../../assets/images/bannerTow.png";
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
      title: "Backend",
      info: "Jahon darajasidagi ma'lumotlar bazasini  yaratish va Backend sohasida muvaffaqiyatli martaba qilishni o'rganing",
      img: bannerImg,
    },
  ]);

  const [courseHeadInfo, setCourseHeadInfo] = useState<TInfo[]>([
    {
      til: "O’zbek",
      date: "8 oy",
      hard: "3 soat",
      create: "Server",
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
      name: "Anvar Aliyev",
      projects:
        " E-ses, Renta, Eureka, Exams.uz, QR-serve, Bekomix telegram bot va boshqalar.",
    },
  ]);

  const [courseWho, setCourseWho] = useState<TWho[]>([
    {
      image: whoImg,
      title: "Backend dasturchi kim?",
      text: "Backend dasturchilar – sayt va dasturlarning ichki qismiga javobgar mutaxassislardir.",
      info: "Backend dasturchilar saytning ichki ma'lumotlarini bazasini ishlab chiqishadi, ya'ni siz internet tarmoqlarida ko'radigan har qanday malumot backendchilar tomonidan dasturlangan.",
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
        info: "Javascript, Git",
      },
      {
        id: 3,
        info: "Node.js, Express, MySQL + Knex.js, MongoDB/Postgres",
      },
      {
        id: 4,
        info: "Nest.js, Typeorm, Typescript, Telegram Bot API, System design, Architecture, Microservice (RabbitMQ)",
      },
    ],
    before: [
      {
        id: 1,
        info: "Node.js ning Express va Nest.js frameworklaridan foydalangan holda har xil ilova, web-saytlarning backend qismini, REST API 0 dan qurish, rivojlantirish va optimallashtirish,",
      },
      {
        id: 2,
        info: "SQL va NoSQL ma'lumotlar bazalari bilan ishlash, ya'ni MongoDB va MySQL ma'lumotlar bazalaridan, tegishli ma'lumotlarni modellashtirish texnikasi va so'rovlarni optimallashtirish strategiyalaridan foydalangan holda ma'lumotlarni samarali saqlash va olish",
      },
      {
        id: 3,
        info: "O'rgangan texnologiyalari yordamida murakkab biznes logika CRM va ERP tizimlarini qura olish.",
      },
      {
        id: 4,
        info: "Kamida 3 ta real projekt",
      },
    ],
  });

  const [courseFits, setCourseFits] = useState<TFits>({
    one: [
      {
        title: "Backend sohasiga yangi kelganlar",
        info: "Dasturlash bo'yicha bilimga ega bo'lmagan har bir kishi Backend sohasiga osongina o'rganishi mumkin.",
      },
    ],
    tow: [
      {
        title: "Junior Backend chilar (Tajriba to’plash uchun)",
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
