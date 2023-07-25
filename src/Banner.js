import React from 'react'; // Import the React library
import './Banner.css'; // Import the banner styling

// Define the Banner component
function Banner() {

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
                backgroundImage: `url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3ccd3cde-f8c0-480c-ab9d-4db767bda944/dc0txr7-14cb4e25-21fa-49f2-89a5-169067e6b7d1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNjY2QzY2RlLWY4YzAtNDgwYy1hYjlkLTRkYjc2N2JkYTk0NFwvZGMwdHhyNy0xNGNiNGUyNS0yMWZhLTQ5ZjItODlhNS0xNjkwNjdlNmI3ZDEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fLwk5p4ks16nRV1_JuOhgY8gGabJtu2ZVKlU6ousyNc")`, // Set the background image
                backgroundPosition: "center center", // Center the background image
            }}
        >
            <div className='banner_contents'> {/* Container for the banner content */}
                <h1 className='banner_title'>Movie Name</h1> {/* Display the title */}
                <div className='banner_buttons'> {/* Container for the buttons */}
                    <button className='banner_button'>Play</button> {/* Button to play the movie */}
                    <button className='banner_button'>My List</button> {/* Button to add the movie to a list */}
                </div>
                <h1 className='banner_description'>{truncateDescription("This is a test description", 150)}</h1> {/* Display the description, truncated to 150 characters */}
            </div>

            <div className='banner--fadeBottom'/> {/* Element for a visual effect at the bottom of the banner */}
        </header>
    )
}

export default Banner // Export the Banner component
