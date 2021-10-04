import React, { useState } from 'react'
import { db } from '../firebase/firebase-config';

import allMovies from 'data.json'
import ListarDog from './ListarDog';
import { Dog } from './Dog';
import NavApp from './NavApp';
const Movies = () => { 
    const [movies, setmovies] = useState(db.doc(`/Dog/`).get);
  
    const searchMovie = (e) => {
      const movieSearch = e.target.value.toLowerCase();
      const searchResult = allMovies.filter((movie) => {
          const { name } = movie;
          return name.toLowerCase().includes(movieSearch)
      })
      
      setmovies(searchResult)
    }
    return (
      <div>
        <NavApp searchMovie= { searchMovie }/>
          <ListarDog>
        {movies.map((movie) => {
            return (
            <Dog key={movie.id} movie={movie} />)
        }
          
        )}
        </ListarDog>
      </div>
    );
  };
  export default Movies;