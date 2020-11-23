import React from 'react';
import { movies } from '../data';


const Movies = () => {
  console.log(movies);
  return (
    <div>
      <h1>Movies Page</h1>
      { 
        movies.map((movie, i) => (
          <div key={i}>
            <h3>{movie.title}</h3>
            <p>Time: {movie.time}</p>
            <p>Genres:</p>
            <ul>
              { movie.genres.map((genre, i) => (
                <li key={i}>{ genre }</li>
              ))}
            </ul>
          </div>
        ))
      }    
    </div>
  );
};

export default Movies;
