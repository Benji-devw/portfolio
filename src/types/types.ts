// types.ts
export type MousePosition = {
    x: number;
    y: number;
};
export type XYProps = {
    scrollPosition: number;
};

export interface ICardProps {
    data: CardItem[];
    sectionTitle: string;
    section: string;
}

export interface CardItem {
    title: string;
    sub: string[];
    url: string;
    link: string;
    github?: string;
}
