import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const MovieList = () => {
    const Movies=useSelector((state)=>state.MovieReducer.MOVIESdata)
    console.log(Movies)
  return (
    <div>
        <Link to={"/Addmovie"} ><Button>Add Movie</Button></Link>
        {Movies.map(movie=><MovieCard movie={movie} key={movie.id}/>)}
    </div>
  )
}

export default MovieList