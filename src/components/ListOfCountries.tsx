import { Country } from "../interface/Country";
import CountryComponent from "./CountryComponent";

export default function ListOfCountries({ countries = [] }: { countries: Country[] }) {
    return (
        <div className="ListOfCountries">
            {
                countries.length > 0
                    ? countries.map(
                        ({ code, name }: Country) => (
                            <CountryComponent code={code} name={name} key={code} />
                        )
                    )
                    : (
                        <div className="alert">
                            <p>No countries availables</p>
                        </div>
                    )
            }
        </div>
    );
}