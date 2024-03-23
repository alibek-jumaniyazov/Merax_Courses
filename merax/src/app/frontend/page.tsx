"use client"
import ContactCourse from "@/components/frontend/ContactCourse";
import CourseDate from "@/components/frontend/CourseDate";
import CourseInfo from "@/components/frontend/CourseInfo";
import CourseTeach from "@/components/frontend/CourseTeach";
import Banner from "@/components/main/Banner";
import React, { useState } from "react";

type Props = {};

export type TInfo = {
    til: string;
    date: string;
    hard: string;
    create: string;
  };

  export type TContact = {
    title:string;
    desc:string;
  };
  export type TTeach = {
    name:string;
    projects:string;
  };
  export type TCourseInfo = {
    id: number;
    info: string;
  };
export default function page({}: Props) {


  const [courseHeadInfo, setCourseHeadInfo] = useState<TInfo[]>([
    {
      til: "O’zbek",
      date: "10 oy",
      hard: "3 soat",
      create: "Web Sahia",
    },
  ]);

  const [contactInfo , setContactInfo] = useState<TContact[]>([
    {
        title:"Kurs haqida batafsil ma'lumot olishni xohlaysizmi?",
        desc:"Agar sizda format haqida savollaringiz bo'lsa yoki nimani tanlashni bilmasangiz, raqamingizni qoldiring va operatorlarimiz sizga qayta qo'ng'iroq qilishadi."
    }
  ])

  const [courseTeach , setCourseTeach] = useState<TTeach[]>([
    {
        name:"Alisherov Sadulla",
        projects:"E-ses, Gameshop, Darital-oil, Appx.group sayti, Renta, Eureka, Edu-action va boshqalar."
    }
  ])



  const [courseInfo, SetCourseInfo] = useState<TCourseInfo[]>([
    {
        id:1,
        info:"Dasturlashga oid ma’lum bir ko’nikmalar, algoritmlar, dasturlash va uning mashhur yo’nalishlari bo'yicha tushuncha"
    },
    {
        id:2,
        info:"HTML, CSS, SASS  "
    },
    {
        id:3,
        info:"Javascript,Git bilan ishlash, Build Tools, Algoritmlar, DOM bilan ishlash  "
    },
    {
        id:4,
        info:"React js, Redux, Material UI, Axios bilan ishlash, Vercelga deploy qilish, Real loihalar bilan ishlash"
    },
    {
        id:4,
        info:"React.js advanced,  Next.js ( Page router va App router), Typescript, Prisma bilan API yozish, Tailwindcss, Real loyihalar bilan ishlash."
    },
    {
        id:4,
        info:"Kurs oxirida tajriba o’tash uchun labaratoriya"
    },
  ]);

  return (
    <div className="">
      <Banner />
      {
        courseHeadInfo.map((item) => (
            <CourseDate item={item}/>
        ))
      }
        <CourseInfo courseInfo={courseInfo}/>
        {
            courseTeach.map((item) => (
                <CourseTeach item={item}/>
            ))
        }
      {
        contactInfo.map((item) => (
            <ContactCourse item={item}/>
        ))
      }
    </div>
  );
}
