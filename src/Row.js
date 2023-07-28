// Importing necessary libraries and dependencies
import React, { useEffect, useState } from 'react'; // React core and hooks
import "./Row.css"; // CSS for this component
import axios from './axios'; // axios instance for API calls

// Row component: responsible for displaying rows of movie posters
function Row({ title, fetchUrl, isLargeRow = false}) {
  const [movies, setMovies] = useState([]); // State hook to store the list of movies

  // base url for movie poster image
  const base_url = "https://image.tmdb.org/t/p/original/";

  // UseEffect hook to fetch data whenever fetchUrl changes
  useEffect(() => {
    async function fetchData() {
        const request = await axios.get(fetchUrl); // Making GET request
        setMovies(request.data.results); // Setting the movie data in state
        return request
    }

    fetchData(); // Executing the fetchData function
  }, [fetchUrl]); // Dependency list for useEffect hook

  // Rendering the component
  return (
    <div className='row'> {/* Container for a row of movie posters */}
        <h2>{title}</h2> {/* Row title */}
        <div className='row_posters'> {/* Container for movie posters */}
            {movies.map(movie => ( // Looping through each movie
                ((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && ( // If it's a large row and movie has a poster path or not a large row and movie has a backdrop path
                <img
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`} // Assign classes based on whether it's a large row
                    key={movie.id} // Unique key for each element (needed in React)
                    src={`${base_url}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`} // Setting source for the image
                    alt={movie.name}/> // Alt text for the image
                )
            ))}
        </div>
    </div>
  )
}

export default Row; // Exporting the Row component
