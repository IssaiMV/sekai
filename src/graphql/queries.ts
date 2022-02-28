import { gql } from "@apollo/client";

export const ALL_COUNTRIES = gql`
query {
  countries {
    code
    name
    continent {
      code
    }
    languages {
      code
    }
  }
  languages {
    code
    name
	}
	continents {
    code
    name
  }
}
`;

export const FIND_COUNTRY = gql`
query findCountry($countryCode: ID!) {
    country(code: $countryCode){
      code
      name
      continent {
        name
      }
      currency
      languages {
        code
        name
      }
      capital
    }
  }
`;