import axios from "axios"
import { createContext, useState, useContext, useEffect } from "react"

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {
    const [movies, setMovies] = useState([])
    const [tvs, setTvs] = useState([])
    const [query, setQuery] = useState('')

    const apiKey = import.meta.env.VITE_API_KEY
    const url = import.meta.env.VITE_ENDPOINT_URL


    function fetchData(query) {
        axios.get(`${url}movie?api_key=${apiKey}&query=${query}`)
            .then((res) => setMovies(res.data.results))

        axios.get(`${url}tv?api_key=${apiKey}&query=${query}`)
            .then((res) => setTvs(res.data.results))
    }

    useEffect(() => {
        fetchData(query)
    }, [query])

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery("")
    }


    const value = {
        movies,
        tvs,
        query,
        handleSubmit,
        setQuery,
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