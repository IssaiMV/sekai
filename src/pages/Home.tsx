import { useEffect, useState } from "react";
import ListOfCountries from "../components/ListOfCountries";
import ListOptions from "../components/ListOptions";
import Loading from "../components/Loading";
import { useCountries } from "../hooks/custom-hooks";
import { Country } from "../interface/Country";


export const Home = () => {
  const [keyword, setKeyword] = useState("");
  const [continent, setContinent] = useState("");
  const [currency, setCurrency] = useState("");
  const [list, setList] = useState([]);

  const { data, error, loading } = useCountries();


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
  const renderCurrencies = () => {
    let listOptions: any[] = [];
    getCurrencies().forEach((currency: string) => listOptions.push(<option key={'curr' + currency} value={currency}>{currency}</option>));
    return listOptions;
  }

  useEffect(() => {
    if (data) {
      setList(data.countries);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      let filterList = data.countries.filter((country: Country) => country.name.toUpperCase().startsWith(keyword.toUpperCase()));
      filterList = filterList.filter((country: Country) => country.continent?.code === (continent) || continent === "");
      filterList = filterList.filter((country: Country) => country.currency?.split(",").includes(currency) || currency === "");
      setList(filterList);
    }
  }, [keyword, continent, currency]);


  if (error) return <span style={{ color: 'red' }} > {error.stack}</span >

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
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
                <ListOptions options={data.continents} />
              }
            </select>
            <select name="currency" onChange={handleChangeCurrency}>
              <option value="">No currency</option>
              {
                renderCurrencies()
              }
            </select>
          </form>
          <h3>List of countries</h3>
          <ListOfCountries countries={list} />
        </>
      )}
    </>
  );

};
