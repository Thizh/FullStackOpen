const Filter = ({ searchCountry, setSearchCountry, setSelectedCountry }) => {

    const handleSearchChange = (event) => {
        setSearchCountry(event.target.value)
        setSelectedCountry(null)
    }

    return (
        <div>
            find countries <input value={searchCountry} onChange={handleSearchChange} />
        </div>
    )
}

export default Filter