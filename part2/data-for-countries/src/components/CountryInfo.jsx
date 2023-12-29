const CountryInfo = ({ country }) => {

    return (
        <div>
            <h2>{country.name.common}</h2>
            <p>capital {country.capital}</p>
            <p>area {country.area}</p>
            {country.languages && (
                <div>
                    <h3>languages:</h3>
                    <ul>
                        {Object.entries(country.languages).map(([code, language]) => (
                            <li key={code}>{language}</li>
                        ))}
                    </ul>
                </div>
            )}

            <img
                src={country.flags.png}
                style={{ maxWidth: '200px' }}
            />
        </div>
    )
}

export default CountryInfo