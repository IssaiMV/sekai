import { useEffect, useState } from "react";
import { Continent, Country } from "../interface";
import ListOptions from "./ListOptions";

export default function FilterForm({ countries = [], continents = [], currencies = [], setList }: { countries: Country[], continents: Continent[], currencies: string[], setList: Function }) {
    const [keyword, setKeyword] = useState("");
    const [continent, setContinent] = useState("");
    const [currency, setCurrency] = useState("");

    const handleSubmit = (evt: any) => {
        evt.preventDefault();
    };

    const handleChangeName = (evt: any) => {
        setKeyword(evt.target.value);
    };
    const handleChangeContinent = (evt: any) => {
        setContinent(evt.target.value);
    };

    const handleChangeCurrency = (evt: any) => {
        setCurrency(evt.target.value);
    };

    const renderCurrencies = () => {
        let listOptions: JSX.Element[] = [];
        currencies.forEach((currency: string) => listOptions.push(<option key={'curr' + currency} value={currency}>{currency}</option>));
        return listOptions;
    }

    useEffect(() => {
        let filterList = countries.filter((country: Country) => country.name.toUpperCase().startsWith(keyword.toUpperCase()));
        filterList = filterList.filter((country: Country) => country.continent?.code === (continent) || continent === "");
        filterList = filterList.filter((country: Country) => country.currency?.split(",").includes(currency) || currency === "");
        setList(filterList);
    }, [keyword, continent, currency]);


    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Search a country here..."
                onInput={handleChangeName}
                type="text"
                value={keyword}
            />
            <select name="continents" onChange={handleChangeContinent}>
                <option value="">No continent</option>
                {
                    <ListOptions options={continents} />
                }
            </select>
            <select name="currency" onChange={handleChangeCurrency}>
                <option value="">No currency</option>
                {renderCurrencies()}
            </select>
        </form>
    );
}