import { Link } from "wouter";
import { Country } from "../interface/Country";

export default function CountryComponent({ code, name }: Country) {
    return (
        <div className="Country">
            <Link to={`/country/${code}`} className="county-link">
                <h4>{name}</h4>
            </Link>
        </div>
    );
}