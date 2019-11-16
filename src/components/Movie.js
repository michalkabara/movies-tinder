import React, {useState, useEffect} from "react";
import axios from 'axios';

const Movie = () => {

    // const moviesData = [...MoviesData]

    const [moviesData, setMoviesData] = useState([{title: '', summary: '', imageURL: '', rating: ''}])

    useEffect(() => {
        axios.get('http://localhost:3004/movies')
        .then(res => {
          const movies = res.data;
          setMoviesData(movies)
        //   console.log(movies)
        })
    },[])

    const AcceptMovie = () => {
        // setMoviesDetails([...moviesData], moviesData.shift())
        // console.log(moviesData)
    }

    const RejectMovie = () => {
        // setMoviesDetails([...moviesData], moviesData.shift())
        // console.log(moviesData)
    }

    console.log(moviesData)

    return(
        <div className="movieContainer">
            <h2>{moviesData[0].title}</h2>
            <img alt="movie poster" className="moviePoster" src={moviesData[0].imageURL}/>
            <p>{moviesData[0].summary}</p>
            <p>({moviesData[0].rating}/10)</p>
            <button className="acceptButton" onClick={AcceptMovie}> Accept</button>
            <button className="rejectButton" onClick={RejectMovie}> Reject</button>
        </div>
        )
    }

export default Movie