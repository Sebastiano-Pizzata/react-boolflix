import axios from "axios"
import { useState, useEffect } from "react"

const Main = () => {
    const [movies, setMovies] = useState([])

    const apiKey = "00afb199b77cb393ea505019758394b3"

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=it-IT&page=1`)
            .then((res) => setMovies(res.data.results))
    }, [])


    return (
        <ul>
            {
                movies.map((movie) => {
                    return (
                        <li key={movie.id}>{movie.title}</li>
                    )
                })
            }
        </ul>
    )


}

export default Main