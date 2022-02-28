import { useEffect, useState } from "react";
import FilterForm from "../components/FilterForm";
import ListOfCountries from "../components/ListOfCountries";
import Loading from "../components/Loading";
import { useCountries } from "../hooks/custom-hooks";
import { Country } from "../interface";


export const Home = () => {
  const [list, setList] = useState([]);

  const { data, error, loading } = useCountries();

  useEffect(() => {
    if (data) {
      setList(data.countries);
    }
  }, [data]);

  const getCurrencies = () => {
    let listCurrencies: any[] = [];
    data.countries.forEach((country: Country) => {
      if (country.currency) {
        country.currency.split(",").forEach((currency: string) => {
          if (!listCurrencies.includes(currency)) {
            listCurrencies.push(currency);
          }
        })
      }
    });
    return sortAlphabeticalList(listCurrencies);
  }

  const sortAlphabeticalList = (list: string[]) => {
    return list.sort((a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
  }


  if (error) return <span style={{ color: 'red' }} > {error.stack}</span >

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <FilterForm countries={data.countries} continents={data.continents} currencies={getCurrencies()} setList={setList} />
          <h3>List of countries</h3>
          <ListOfCountries countries={list} />
        </>
      )}
    </>
  );

};
