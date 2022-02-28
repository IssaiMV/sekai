import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import FilterForm from './FilterForm';


describe("<FilterForm/>", () => {
    let component: any;
    const mockHandler = jest.fn();
    const filter: any = {
        countries: [
            {
                code: "AD",
                name: "Andorra",
                continent: {
                    code: "EU"
                },
                currency: "EUR"
            },
            {
                code: "AE",
                name: "United Arab Emirates",
                continent: {
                    code: "AS"
                },
                currency: "AED"
            }
        ],
        continents: [
            {
                code: "AF",
                name: "Africa"
            },
            {
                code: "AN",
                name: "Antarctica"
            }
        ],
        currencies: ["EUR", "AED"]
    }
    beforeEach(() => {
        component = render(<FilterForm countries={filter.countries} continents={filter.continents} currencies={filter.currencies} setList={mockHandler} />)
    })
    test('renders contents', () => {
        expect(component.container).toHaveTextContent("No continent")
    });

})