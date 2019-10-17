import React from "react";



function Movie(props){
        return(
            <div className="movieContainer">
                <h2>{props.movie.title}</h2>
                <img alt="movie poster" className="moviePoster" src={props.movie.imageURL}></img>
                <p>{props.movie.summary}</p>
                <p>({props.movie.rating}/10)</p>
            </div>
        )
    }

export default Movie