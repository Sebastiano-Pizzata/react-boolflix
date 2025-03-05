import axios from "axios"
import { createContext, useState, useContext } from "react"

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {
    const [movies, setMovies] = useState([])

    const apiKey = import.meta.env.VITE_API_KEY
    const url = import.meta.env.VITE_ENDPOINT_URL


    function fetchData() {
        axios.get(`${url}?api_key=${apiKey}&language=it-IT&page=1`)
            .then((res) => setMovies(res.data.results))
    }


    const value = {
        movies,
        fetchData
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = () => useContext(GlobalContext)


export {
    GlobalProvider,
    useGlobalContext
}