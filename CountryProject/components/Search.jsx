const Search = ({ setQuery }) => {
    return <div className="search-filter">
        <div className="searchBar">
            <i className="fa-solid fa-magnifying-glass"></i> <input type="text" placeholder="Seach for a country..." onChange={(e) => setQuery(e.target.value.toLowerCase())} />
        </div>
        <select className="filter" onChange={(e) => {
            setQuery(e.target.value.toLowerCase())
        }}>
            <option hidden>Filter By Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="Antarctic">Antarctic</option>
        </select>
    </div>
}

export default Search;