import { useEffect } from "react"
import { useGlobalContext } from "../../context/GlobalContext"

const Main = () => {
    const { movies, tvs, fetchData } = useGlobalContext()

    const imageUrl = import.meta.env.VITE_IMAGE_URL

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <main>
            <div className="container">
                <div className="row">

                    {
                        movies.map((movie) => {
                            return (
                                <div className="col-4 mt-2 mb-2">
                                    <div key={movie.id} className="card">
                                        <img src={`${imageUrl}${movie.poster_path}`} className="card-img-top" alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">{movie.title}</h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>



            </div>
            <div className="container">
                <div className="row">

                    {
                        tvs.map((movie) => {
                            return (
                                <div className="col-4 mt-2 mb-2">
                                    <div key={movie.id} className="card">
                                        <img src={`${imageUrl}${movie.poster_path}`} className="card-img-top" alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">{movie.name}</h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
            </div>
        </main>
    )


}

export default Main