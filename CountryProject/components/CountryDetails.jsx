import { Link, useLocation, useParams } from "react-router-dom";
import "./CountryDetails.css"
import React, { useEffect, useState } from "react"
import { CardDetailsShimmer } from "./CardDetailsShimmer";
import { useTheme } from "../hooks/useTheme";

export default function CountryDetails() {

    let [countryData, setCountryData] = useState(null);
    let [pageNotFound, setPageNotFound] = useState(false);

    const [isDark] = useTheme();

    const params = useParams();
    const countryName = params.country;

    const { state } = useLocation();

    function updateCountryData(country) {
        setCountryData({
            flag: country.flags.svg,
            name: country.name.common,
            native: Object.values(country.name.nativeName || {})[0]?.common || country.name.common,
            population: country.population,
            region: country.region,
            "sub-region": country.subregion,
            capital: (country.capital)?.join(", "),
            currency: country.currencies && Object.values(country?.currencies).map(currency => currency.name).join(", "),
            language: Object.values(country.languages || {}).join(", "),
            tld: country.tld,
            borders: []
        })

        if (!country.borders) {
            country.borders = []
        }

        Promise.all(
            country.borders.map(border => {
                return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
                    .then((resp) => resp.json())
                    .then(([borderCountry]) => borderCountry.name.common)
            })).then((borders) => {
                setTimeout(() => {
                    setCountryData((prevState) => ({ ...prevState, borders }))
                })
            }
            )
    }

    useEffect(() => {

        if (state) {
            return updateCountryData(state)
        }

        fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
            .then((res) => res.json())
            .then(([country]) => {
                updateCountryData(country)
            }).catch((err) => {
                setPageNotFound(true);
            })
    }, [countryName])

    if (pageNotFound) {
        return <h1>Page is not found</h1>
    }

    return (
        <>
            {countryData === null ? (<CardDetailsShimmer />) :
                (
                    <main className={`${isDark ? 'dark' : ''} `}>
                        <div className="container">
                            <Link to="#" className="back-btn" onClick={() => history.back()}>
                                <i className="fa-solid fa-arrow-left"></i> Back
                            </Link>
                            <div className="country-card-container">
                                <div className="flag-img-box">
                                    <img className="image" src={countryData.flag} alt={countryData.name + "flag"} />
                                </div>

                                <div className="country-details-container">
                                    <h3 className="country-name">{countryData.name}</h3>
                                    <div className="country-details">
                                        <p>
                                            <b>Native Name:</b>
                                            <span className="native-name">{countryData.native}
                                            </span>
                                        </p>
                                        <p>
                                            <b>Population:</b>
                                            <span className="population">
                                                {countryData.population.toLocaleString("us-IN")}
                                            </span>
                                        </p>
                                        <p>
                                            <b>Region:</b>
                                            <span className="region">{countryData.region}
                                            </span>
                                        </p>
                                        <p>
                                            <b>Sub Region:</b>
                                            <span className="sub-region">{countryData["sub-region"]}
                                            </span>
                                        </p>
                                        <p>
                                            <b>Capital:</b>
                                            <span className="capital">{countryData.capital}
                                            </span>
                                        </p>
                                        <p className="top-level">
                                            <b>Top Level Domain:</b>
                                            <span className="top-level-domain">
                                                {countryData.tld}
                                            </span>
                                        </p>
                                        <p>
                                            <b>Currencies:</b>
                                            <span className="currency">
                                                {countryData.currency}
                                            </span>
                                        </p>
                                        <p className="lang">
                                            <b>Languages:</b>
                                            <span className="language">
                                                {countryData.language}
                                            </span>
                                        </p>
                                    </div>
                                    {countryData.borders.length !== 0 && <div className="border">
                                        <b>Border Countries:</b>
                                        <div className="border-name">
                                            {
                                                countryData.borders.map((border) => <Link key={border} to={`/${border}`}>{border} </Link>)
                                            }
                                        </div>
                                    </div>}
                                </div>
                            </div>

                        </div>
                    </main >)
            }
        </>
    )
}