import { Link } from "wouter";
import { Country } from "../interface";

export default function CountryComponent({ code, name }: Country) {
    return (
        <div className="Country">
            <small>{code}</small>
            <span>{name}</span>
            <Link to={`/country/${code}`} className="county-link">
                See more ➡
            </Link>
        </div>
    );
}