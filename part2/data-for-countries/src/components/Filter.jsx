const Filter = ({searchCountry, setSearchCountry}) => {

    const handleSearchChange = (event) => {
        setSearchCountry(event.target.value)
      }    

    return (
        <div>
            find countries <input value={searchCountry} onChange={handleSearchChange} />
        </div>
    )
}

export default Filter