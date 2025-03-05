import axios from "axios"
import { useEffect } from "react"
import { useGlobalContext } from "../../context/GlobalContext"

const Main = () => {
    // const [movies, setMovies] = useState([])

    // const apiKey = import.meta.env.VITE_API_KEY
    // const url = import.meta.env.VITE_ENDPOINT_URL

    const { movies, fetchData } = useGlobalContext()

    useEffect(() => {
        // axios.get(`${url}?api_key=${apiKey}&language=it-IT&page=1`)
        //     .then((res) => setMovies(res.data.results))

        fetchData()


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