import Card from "./Card";
import { useEffect, useState } from "react";
import { CountryShimmer } from "./CountryShimmer";

const CountryList = ({ query }) => {
    let [countryData, setCountryData] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((resp) => resp.json())
            .then((countryData) => {
                setCountryData(countryData);
            });
    }, [])

    return (
        <>
            {
                (!countryData.length) ? <div className="country-container"><CountryShimmer /></div> :
                    <div className="country-container">
                        {countryData.filter((country) =>
                            country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)).map((country) => {

                                return <Card
                                    key={country.name.common}
                                    name={country.name.common}
                                    population={country.population}
                                    region={country.region}
                                    capital={country.capital}
                                    flag={country.flags.svg}
                                    data={country}
                                />
                            }
                            )}
                    </div>}
        </>
    )
}

export default CountryList;