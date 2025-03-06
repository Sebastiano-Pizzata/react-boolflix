import { useEffect } from "react"
import { useGlobalContext } from "../../context/GlobalContext"

const Main = () => {
    const { movies, tvs, fetchData } = useGlobalContext()

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <main>
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
            <div className="container">

                <ul>
                    {
                        tvs.map((movie) => {
                            return (
                                <li key={movie.id}>{movie.original_name}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </main>
    )


}

export default Main