
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
import bannerImg from "../../assets/images/bannerFour.jpg";
import frontendTeach from "../../assets/images/frontendTeach.png";

const courseHeadInfo: TInfo[] = [
    {
        til: "O’zbek",
        date: "3 oy",
        hard: "2 soat",
        create: "Web Sahia",
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
            info: "SMM DESIGN, poligrafik dizayn: Adobe Photoshop",
        },
        {
            id: 2,
            info: "UI/UX, App Design: Figma, Adobe xd",
        },
        {
            id: 3,
            info: "Amaliy qism",
        },
    ],
    before: [
        {
            id: 1,
            info: "E’tiborni torta oladigan smm posterlar, yaxshi ishlangan qadoq dizaynlar va poligrafik dizayn ya’ni Flayer, Banner, Vizitka dizayn shuningdek Web dizayn yo’nalishida, UI hamda UX dizayn ko’nikmalarni egallaysiz.",
        },
        {
            id: 2,
            info: "UI tarafdan vizuallikni oshirish, UX yo’nalishi bo’yicha qulay interfaceli dizaynlarni yarata olish shu bilan birga Ilovalarga dizayn yaratish konikmalariga ega bo’lasiz.",
        },
    ],
};

const courseWho: TWho[] = [
    {
        image: whoImg,
        title: "Grafik-Dizayner kim?",
        text: "Grafik-Dizayner rasm banner va web ui dizaynerga javobgar mutaxassislardir.",
        info: "Grafik-Dizayner bannerlar , rasmlar va web saytlardagi dizaynerlarni ishlaydigan odam hisoblanadi.",
    },
];

const courseFits: TFits = {
    one: [
        {
            title: "Grafik-Dizayner sohasiga yangi kelganlar",
            info: "Grafik-Dizayner bo'yicha bilimga ega bo'lmagan har bir kishi Grafik-Dizayner sohasiga osongina o'rganishi mumkin.",
        },
    ],
    tow: [
        {
            title: "Junior Grafik-Dizayner chilar (Tajriba to’plash uchun)",
            info: "Ushbu sohada asosiy bilimlarga ega bo'lgan Grafik-Dizayner o'z bilimlarini mustahkamlash orqali yuqori darajaga ko'tarilishlari mumkin",
        },
    ],
};

const courseBanner: TBanner[] = [
    {
        title: "Grafik-Dizayner",
        info: "Jahon darajasidagi interfeysini yaratish va Grafik-Dizayner sohasida muvaffaqiyatli martaba qilishni o'rganing",
        blur:"sm",
        img: bannerImg,
    },
];

const courseTeach: TTeach[] = [
    {
        name: "Javohir",
        projects:
            " E-ses, Gameshop, Darital-oil, Appx.group sayti, Renta, Eureka, Edu-action va boshqalar.",
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
