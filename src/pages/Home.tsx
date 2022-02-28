import { useEffect, useState } from "react";
import ListOfCountries from "../components/ListOfCountries";
import ListOptions from "../components/ListOptions";
import Loading from "../components/Loading";
import { useCountries } from "../hooks/custom-hooks";
import { Country } from "../interface/Country";
import { Language } from "../interface/Languaje";


export const Home = () => {
  const [keyword, setKeyword] = useState("");
  const [continent, setContinent] = useState("");
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

  useEffect(() => {
    if (data) {
      setList(data.countries);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      let filterList = data.countries.filter((country: Country) => country.name.toUpperCase().startsWith(keyword.toUpperCase()));
      filterList = filterList.filter((country: Country) => country.continent?.code === (continent) || continent === "");
      setList(filterList);
    }
  }, [keyword, continent]);


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
          </form>
          <h3>List of countries</h3>
          <ListOfCountries countries={list} />
        </>
      )}
    </>
  );

};
