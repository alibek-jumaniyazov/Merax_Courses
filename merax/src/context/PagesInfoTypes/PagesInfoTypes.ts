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
    image: any;
    title: string;
    text: string;
    info: string;
};

export type TBanner = {
    title: string;
    info: string;
    blur:string,
    img: any;
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
