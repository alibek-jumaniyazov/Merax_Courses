import {
    TBanner,
    TContact,
    TCourseInfo,
    TFits,
    TInfo,
    TTeach,
} from "../PagesInfoTypes/PagesInfoTypes";
import bannerImg from "../../assets/images/bannerThree.jpg";
import frontendTeach from "../../assets/images/frontendTeach.png";

const courseHeadInfo: TInfo[] = [
    {
        til: "O’zbek",
        date: "2 oy",
        hard: "2 soat",
        create: "Boshlang'ich bilim",
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
            info: "Dastur nima? U qanday ishlaydi?",
        },
        {
            id: 2,
            info: "Uni qanday qilib kompyuter tushunadi? RAM va CPU ishlash tartiblari",
        },
        {
            id: 3,
            info: "Hamma tillar uchun umumiy operatorlar",
        },
        {
            id: 4,
            info: "Tanlash va qaror qilish operatorlari",
        },
        {
            id: 5,
            info: "Takrorlanuvchi operatorlar (while / do...while / for)",
        },
        {
            id: 6,
            info: "Funksiyalar (Iterativ va Rekursiv)",
        },
        {
            id: 7,
            info: "Boshlang'ich strukturalar",
        },
        {
            id: 8,
            info: "Bir o'lchovli seriya (Array)",
        },
        {
            id: 9,
            info: "Ikki o'lchovli seriya (2D Array)",
        },
        {
            id: 10,
            info: "Belgilar seriyasi (String)",
        },
        {
            id: 11,
            info: "Strukturalar va Union",
        },
        {
            id: 12,
            info: "Xotirani dinamik boshqaruv uslublari va uning foydasi",
        },
        {
            id: 13,
            info: "Ma'lumotlar oqimlari bilan ishlash",
        },
        {
            id: 14,
            info: "Fayllar bilan ishlash",
        },
        {
            id: 15,
            info: "Kiritish va chiqarish operatorlari",
        },
    ],
    before: [
        {
            id: 6,
            info: "O'rgatiladigan texnologiya: C++",
        },
    ],
};

const courseFits: TFits = {
    one: [
        {
            title: "Dasturlashni endi o'rganmoqchi bolganlar",
            info: "Dasturlash bo'yicha bilimga ega bolmoqchi bolganlar uchun va dasturlar sohasini tanlaganlar uchun",
        },
    ],
    tow: [
        {
            title: "Mukammal bilim olish (Tajriba to’plash uchun)",
            info: "Ushbu sohada asosiy bilimlarga ega bo'lgan lekin zamonaviy bilimni organish uchun",
        },
    ],
};

const courseBanner: TBanner[] = [
    {
        title: "Foundation",
        info: "Dasturlash boyicha boshlang'ich bilimlari va kampyuterda samarali ishlashni organing",
        blur: 4,
        img: bannerImg,
    },
];

const courseTeach: TTeach[] = [
    {
        name: "Shoxrux Abdullayev",
        projects: " E-ses, Unitor-GYM, E-ticket va boshqalar.",
        img: frontendTeach,
    },
];

export {
    courseHeadInfo,
    courseFits,
    courseInfo,
    courseBanner,
    contactInfo,
    courseTeach,
};
