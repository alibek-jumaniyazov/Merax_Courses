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
import bannerImg from "../../assets/images/bannerOne.png";
import frontendTeach from "../../assets/images/frontendTeach.png";

const courseHeadInfo: TInfo[] = [
    {
        til: "O’zbek",
        date: "10 oy",
        hard: "3 soat",
        create: "Web Sahia yaratish",
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
};

const courseWho: TWho[] = [
    {
        image: whoImg,
        title: "Frontend dasturchi kim?",
        text: "Frontend dasturchilar – sayt va dasturlarning tashqi qismiga javobgar mutaxassislardir.",
        info: "Frontend dasturchilar saytning yuzini ishlab chiqishadi, ya'ni siz internet tarmoqlarida ko'radigan har qanday dizaynlar ular tomonidan dasturlangan.",
    },
];

const courseFits: TFits = {
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
};

const courseBanner: TBanner[] = [
    {
        title: "Front-End",
        info: "Jahon darajasidagi foydalanuvchi interfeysini yaratish va Front-End sohasida muvaffaqiyatli martaba qilishni o'rganing",
        blur: "sm",
        img: bannerImg,
    },
];

const courseTeach: TTeach[] = [
    {
        name: "Alisherov Sadulla",
        projects:
            "E-ses, Gameshop, Darital-oil, Appx.group sayti, Renta, Eureka, Edu-action va boshqalar.",
        img: frontendTeach,
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
