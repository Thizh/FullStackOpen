const Filter = ({searchName, setSearchName}) => {

    const handleSearchChange = (event) => {
        setSearchName(event.target.value)
    }

    return (
        <div>
            filter shown with <input value={searchName} onChange={handleSearchChange} />
        </div>
    )
}

export default Filter