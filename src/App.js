import React, { useState } from "react";
import { useEffect } from "react";
//730364b7 - API key 

import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";
const API_URL='https://www.omdbapi.com?apikey=730364b7'


const movie1 ={
    
        "Title": "The Batman",
        "Year": "2022",
        "imdbID": "tt1877830",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMmU5NGJlMzAtMGNmOC00YjJjLTgyMzUtNjAyYmE4Njg5YWMyXkEyXkFqcGc@._V1_SX300.jpg"
    
}
const App = ()=>{
    const [movies,setMovies]=useState([]);
    const [searchTerm,setSearchTerm]=useState([]);
    const searchMovies=async(title)=>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data=await response.json();

        setMovies(data.Search);
    }
    useEffect(()=>{
        searchMovies('Batman');//// Example call to search for "Batman" on component mount
    },[]);
    return (
    
        <div className="app">
            <h1>Movie Search App</h1>

            <div className="search">
                <input
                placeholder="Search for Movies"
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
                />
                <img 
                src={SearchIcon}
                alt="search"
                onClick={()=>searchMovies(searchTerm)}
                />
            </div>
            
            {
                movies.length >0
                ?(<div className="container">
                    {movies.map((movie)=>(
                        <MovieCard  movie={movie} />
                    ))}
                </div>
                ):
                (
                    <div className="empty">
                        <h2>No Movies Found</h2>
                        </div>
                )
            
            }
        </div>
    );
}

export default App;