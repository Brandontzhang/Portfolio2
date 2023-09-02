export type About = {
    title: string;
    description: string;
    imgUrl: string;
};

export type Project = {
    name: string;
    types: string[];
    desc: string;
    imgUrl: string;
};

export type Skill = {
    name: string;
    icon: string;
    skilllevel: SkillLevel;
};

export type SkillLevel = {
    name: string;
    order: number;
};

export type Experience = {
    year: string;
    works: Work[];
};

export type Work = {
    name: string;
    company: string;
    desc: string;
    current: boolean;
    endDate: string;
    imgUrl: string;
};

export type ContactFormInputs = {
    name: string;
    email: string;
    message: string;
};