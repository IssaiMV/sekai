import { Link } from "wouter";
import { Country } from "../interface";

export default function CountryComponent({ code, name }: Country) {
    return (
        <div className="Country">
            <Link to={`/country/${code}`} className="county-link">
                {name}
            </Link>
        </div>
    );
}