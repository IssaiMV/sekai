import Loading from "../components/Loading";
import { Language } from "../interface/Languaje";
import { useCountry } from "../hooks/custom-hooks";
import { Link } from "wouter";

export const Details = ({ params }: { params: { code: string } }) => {
    const { data, error, loading } = useCountry(params.code);

    if (error) return <span style={{ color: 'red' }} > {error.stack}</span>


    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <h3>Selected country</h3>
                    <div className="card">
                        <div className="name">
                            {data.country.name}
                        </div>
                        <div className="information">
                            <div className="row">
                                <div className="title">code</div>
                                <div className="data">{data.country.code}</div>
                            </div>

                            <div className="row">
                                <div className="title">currency</div>
                                <div className="data">{data.country.currency}</div>
                            </div>
                            <div className="row">
                                <div className="title">continent</div>
                                <div className="data">{data.country.continent.name}</div>
                            </div>
                            <div className="row">
                                <div className="title">languages</div>
                                <div className="data">
                                    <ul>
                                        {
                                            data.country.languages.map((language: Language) =>
                                                <li key={language.code}>{language.name}</li>
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="title">capital</div>
                                <div className="data">{data.country.capital}</div>
                            </div>
                        </div>
                    </div>
                    <Link to="/" className="button">
                        Back
                    </Link>
                </>
            )}
        </>
    );
};