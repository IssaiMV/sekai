import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import CountryComponent from './CountryComponent';
import { Country } from '../interface';

describe("<CountryComponent/>", () => {
    let component: any;
    const country: Country = {
        code: "MX",
        name: "Mexico"
    }
    beforeEach(() => {
        component = render(<CountryComponent {...country} />)
    })
    test('renders contents', () => {
        expect(component.container).toHaveTextContent(country.name)
    });

    test('Click the link and redirect to', () => {
        expect(screen.getByText('See more ➡').closest('a')).toHaveAttribute('href', '/country/' + country.code);
    })
})