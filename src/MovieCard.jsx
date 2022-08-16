import React from "react"
import { Link } from "react-router-dom"

const MovieCard = ({ movie }) => {
    return (
        // <Link to={`/movie/${movie.Title}`}>
        <div className="movie">
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
        // </Link>
    )
}

export default MovieCard