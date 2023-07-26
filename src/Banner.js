import React, { useEffect, useState } from 'react'; // Import the React library
import './Banner.css'; // Import the banner styling
import axios from './axios'; // Import axios to make HTTP requests
import requests from './Requests'; // Import API endpoints

// Define the Banner component
function Banner() {
    const [movie, setMovie] = useState([]); // Initialize a state variable to hold movie data

    // useEffect hook to fetch data when the component mounts
    useEffect(() => {
        // Define an asynchronous function to fetch data
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals); // Get Netflix originals from the API
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1) // Randomly select a movie from the results
                ]
            );
            return request;
        }

        fetchData(); // Call the fetchData function
    }, []) // This effect runs once when the component mounts due to the empty dependency array

    // Define a function to truncate a string to a specific length (n) and add '...' at the end if it is longer
    const truncateDescription = (string, n) => {
        return string?.length > n ? string.substring(0, n-1) + '...' : string
    }

    // Return the Banner component JSX
    return (
        <header
            className="banner" // Set the class name for styling
            style={{
                backgroundSize: "cover", // Set the background size to cover the entire banner
                backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`, // Set the background image to the backdrop of the movie
                backgroundPosition: "center center", // Center the background image
            }}
        >
            <div className='banner_contents'> {/* Container for the banner content */}
                <h1 className='banner_title'>{movie?.title || movie?.name || movie?.original_name}</h1> {/* Display the title of the movie. If the movie doesn't have a 'title', fall back to 'name' or 'original_name' */}
                <div className='banner_buttons'> {/* Container for the buttons */}
                    <button className='banner_button'>Play</button> {/* Button to play the movie */}
                    <button className='banner_button'>My List</button> {/* Button to add the movie to a list */}
                </div>
                <h1 className='banner_description'>{truncateDescription(movie?.overview, 150)}</h1> {/* Display the description of the movie, truncated to 150 characters */}
            </div>

            <div className='banner--fadeBottom'/> {/* Element for a visual effect at the bottom of the banner */}
        </header>
    )
}

export default Banner // Export the Banner component
