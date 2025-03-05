import axios from "axios"
import { useState, useEffect } from "react"

const Main = () => {
    const [movies, setMovies] = useState([])

    const apiKey = import.meta.env.VITE_API_KEY
    const url = import.meta.env.VITE_ENDPOINT_URL

    useEffect(() => {
        axios.get(`${url}?api_key=${apiKey}&language=it-IT&page=1`)
            .then((res) => setMovies(res.data.results))

    }, [])

    return (
        <main className=" bg-secondary">
            <div className="container">
                <ul>
                    {
                        movies.map((movie) => {
                            return (
                                <li key={movie.id}>{movie.title}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </main>
    )


}

export default Main