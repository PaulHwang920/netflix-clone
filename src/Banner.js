import React, { useEffect, useState } from 'react'; // Import the React library
import './Banner.css'; // Import the banner styling
import axios from './axios';
import requests from './Requests';

// Define the Banner component
function Banner() {
    const [movie, setMovie] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }

        fetchData();
    }, [])

    console.log(movie);

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
                backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`, // Set the background image
                backgroundPosition: "center center", // Center the background image
            }}
        >
            <div className='banner_contents'> {/* Container for the banner content */}
                <h1 className='banner_title'>{movie?.title || movie?.name || movie?.original_name}</h1> {/* Display the title */}
                <div className='banner_buttons'> {/* Container for the buttons */}
                    <button className='banner_button'>Play</button> {/* Button to play the movie */}
                    <button className='banner_button'>My List</button> {/* Button to add the movie to a list */}
                </div>
                <h1 className='banner_description'>{truncateDescription(movie?.overview, 150)}</h1> {/* Display the description, truncated to 150 characters */}
            </div>

            <div className='banner--fadeBottom'/> {/* Element for a visual effect at the bottom of the banner */}
        </header>
    )
}

export default Banner // Export the Banner component
