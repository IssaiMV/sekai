import { useQuery } from "@apollo/client";
import { ALL_COUNTRIES, FIND_COUNTRY } from "../graphql/queries";


export const useCountries = () => {
    const { data, error, loading } = useQuery(ALL_COUNTRIES);
    return { data, error, loading };
};

export const useCountry = (code: string) => {
    const { data, error, loading } = useQuery(FIND_COUNTRY, {
        variables: {
            countryCode: code
        }
    });
    return { data, error, loading };
};