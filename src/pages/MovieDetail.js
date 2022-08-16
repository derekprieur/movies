import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const API_URL = 'https://www.omdbapi.com?apikey=b3544fa1'

const MovieDetail = () => {

    const { id } = useParams()
    let movie = null

    const searchMoviesFull = async (title) => {
        if (!title) return
        const response = await fetch(`${API_URL}&t=${id}`)
        const data = await response.json()
        movie = data
        console.log(movie)
    }

    useEffect(() => {
        searchMoviesFull(id)
    }, [])

    return (
        <div className='app'>
            <h1>MovieLand</h1>
            {movie ? (
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
                </div>)
                : (<div>
                    <h1>Test</h1>
                </div>)
            }

        </div>
    )
}
export default MovieDetail