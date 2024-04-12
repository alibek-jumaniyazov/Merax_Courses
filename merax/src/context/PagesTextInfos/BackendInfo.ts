import {
    TBanner,
    TContact,
    TCourseInfo,
    TFits,
    TInfo,
    TTeach,
    TWho,
} from "../PagesInfoTypes/PagesInfoTypes";
import whoImg from "../../assets/images/frontendImg.png";
import bannerImg from "../../assets/images/bannerTow.png";
import backendTeach from "../../assets/images/backendTeach.png";

const courseHeadInfo: TInfo[] = [
    {
        til: "O’zbek",
        date: "8 oy",
        hard: "3 soat",
        create: "Data-base yaratish",
    },
];

const contactInfo: TContact[] = [
    {
        title: "Kurs haqida batafsil ma'lumot olishni xohlaysizmi?",
        desc: "Agar sizda format haqida savollaringiz bo'lsa yoki nimani tanlashni bilmasangiz, raqamingizni qoldiring va operatorlarimiz sizga qayta qo'ng'iroq qilishadi.",
    },
];

const courseInfo: TCourseInfo = {
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
};

const courseWho: TWho[] = [
    {
        image: whoImg,
        title: "Backend dasturchi kim?",
        text: "Backend dasturchilar – sayt va dasturlarning ichki qismiga javobgar mutaxassislardir.",
        info: "Backend dasturchilar saytning ichki ma'lumotlarini bazasini ishlab chiqishadi, ya'ni siz internet tarmoqlarida ko'radigan har qanday malumot backendchilar tomonidan dasturlangan.",
    },
];

const courseFits: TFits = {
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
};

const courseBanner: TBanner[] = [
    {
        title: "Backend",
        info: "Jahon darajasidagi ma'lumotlar bazasini  yaratish va Backend sohasida muvaffaqiyatli martaba qilishni o'rganing",
        blur:0,
        img: bannerImg,
    },
];

const courseTeach: TTeach[] = [
    {
        name: "Anvar Aliyev",
        projects:
            " E-ses, Renta, Eureka, Exams.uz, QR-serve, Bekomix telegram bot va boshqalar.",
        img: backendTeach,
    },
];

export {
    courseHeadInfo,
    courseFits,
    courseInfo,
    courseWho,
    courseBanner,
    contactInfo,
    courseTeach,
};
