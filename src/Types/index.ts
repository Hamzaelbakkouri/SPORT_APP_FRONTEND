export type ButtonOption = {
    field: string;
    href: string;
}

export type partFields = {
    field: string;
    href: string;
};

export type Buttonto = {
    to: string;
}

export type DefaultI = {
    Label: string;
    placeHolder: string;
}

export type SalleData = {
    id: number;
    image: string | null;
    placeName: string;
    Description: string;
}

export type PlaceData = {
    image: string;
    placeName: string;
    description: string;
}

export type LongDescription = {
    text: string;
}

export type salleP = {
    image: string;
}

export type Statistique = {
    sports: string;
    salles: string;
}

export type sportT = {
    name: string;
    image: string | null;
    longDescription: string;
}

export interface IGym {
    name?: string;
    description?: string;
    image?: string;
    longDescription?: string;
    gallery?: string[];
    city?: string | undefined;
}

export interface SportI {
    name?: string;
    image?: string;
    longDescription?: string;
    city?: string | undefined;
}