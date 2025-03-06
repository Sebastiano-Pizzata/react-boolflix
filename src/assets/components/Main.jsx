import { useEffect } from "react"
import { useGlobalContext } from "../../context/GlobalContext"
import { FaStar } from "react-icons/fa";

const Main = () => {
    const { movies, tvs, fetchData } = useGlobalContext()

    const imageUrl = import.meta.env.VITE_IMAGE_URL;

    const vote = (movie) => {
        return Math.ceil(movie.vote_average / 2)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <main>
            <div className="container">
                <div className="row">

                    {
                        movies.map((movie) => {
                            const starsRating = Array(vote(movie)).fill(null);
                            return (
                                <div key={movie.id} className="col-4 mt-2 mb-2">
                                    <div className="card">
                                        <img src={`${imageUrl}${movie.poster_path}`} className="card-img-top" alt="movie" />
                                        <div className="card-body">
                                            <h5 className="card-title">{movie.title}</h5>
                                            <p className="card-text d-flex align-items-center gap-2">voto-{vote(movie)}{""}
                                                {
                                                    starsRating.map((_, index) => {
                                                        return <FaStar key={index} />
                                                    })
                                                }</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>



            </div>
            <div className="container mt-5">
                <div className="row">

                    {
                        tvs.map((movie) => {
                            const starsRating = Array(vote(movie)).fill(null);
                            return (
                                <div key={movie.id} className="col-4 mt-2 mb-2">

                                    <div className="card">
                                        <img src={`${imageUrl}${movie.poster_path}`} className="card-img-top" alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">{movie.name}</h5>
                                            <p className="card-text d-flex align-items-center gap-2 d-none ">voto-{vote(movie)}{""}
                                                {
                                                    starsRating.map((_, index) => {
                                                        return <FaStar key={index} />
                                                    })
                                                }</p>
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