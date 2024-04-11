import { StaticImageData } from "next/image";

export type TInfo = {
    til: string;
    date: string;
    hard: string;
    create: string;
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
    image: StaticImageData;
    title: string;
    text: string;
    info: string;
};

export type TBanner = {
    title: string;
    info: string;
    blur: number;
    img: StaticImageData;
};

export type TContact = {
    title: string;
    desc: string;
};
export type TTeach = {
    name: string;
    projects: string;
    img: StaticImageData;
};


// No Pages Info type . Components Types

export type TAdvantages = {
    id: number;
    info: string;
};
export type Ticon = {
    image: any;
    url: string;
  };

  export type TCourse = {
    id: number;
    title: string;
    description: string;
    url: string;
    icon: any;
};

export type TAcademyInfo = {
    title: string;
    description: string;
};

export type TForm = {
    name: string;
    tel: string;
};
export type Tequired = {
    image: any;
    title: string;
    info: string;
};