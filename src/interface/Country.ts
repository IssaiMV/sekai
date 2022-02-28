import { Continent } from "./Continent";
import { Language } from "./Languaje";

export interface Country {
    code: string;
    name: string;
    continent?: Continent;
    currency?: string;
    languages?: Language[];
}
