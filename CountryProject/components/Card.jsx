import { Link, useOutletContext } from "react-router-dom";

const Card = ({ name, population, region, capital, flag, data }) => {

    return <Link className="country-card"
        to={`/${name}`} state={data}>
        <div className="img-container">
            <img src={flag} alt="South Georgia" />
        </div>
        <div className="country-text">
            <h3 className="country-name">{name}</h3>
            <span><b>Population:</b>&nbsp;{population.toLocaleString('en-IN')}</span>
            <span><b>Region:</b>&nbsp;{region}</span>
            <span><b>Capital</b>&nbsp;{capital}</span>
        </div></Link >
}

export default Card;