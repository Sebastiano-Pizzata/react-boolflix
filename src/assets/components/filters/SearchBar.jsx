import { useGlobalContext } from "../../../context/GlobalContext"

const SearchBar = () => {

    const { query, setQuery, handleSubmit } = useGlobalContext()


    return (
        <form onSubmit={handleSubmit} className="d-flex">
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            <button className="btn btn-primary">Invia</button>
        </form>
    )
}

export default SearchBar