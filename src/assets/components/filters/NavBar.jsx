import SearchBar from "./SearchBar"
import FilterSelect from "./FilterSelect"

const Filters = () => {
    return (
        <>
            <nav className="navbar bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-danger">BOOLFLIX</a>
                    <div className="d-flex gap-2">
                        <FilterSelect />
                        <SearchBar />
                    </div>

                </div>
            </nav>

        </>
    )

}


export default Filters