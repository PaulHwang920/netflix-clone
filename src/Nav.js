import React, { useEffect, useState } from 'react'; // Import the React library and hooks: useEffect and useState
import './Nav.css'; // Import the nav styling

// Define the Nav component
function Nav() {
    // State variable to show or hide the navbar, initially set to false
    const [show, handleShow] = useState(false);

    // Function to show or hide the navbar based on the vertical scroll position
    const transitionNavBar = () => {
        if (window.scrollY > 100) { // If the vertical scroll position is more than 100
            handleShow(true); // Show the navbar
        } else {
            handleShow(false); // Else, hide the navbar
        }
    }

    // Hook that performs side effects in your component
    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar); // Add a scroll event listener when the component is rendered
        // Clean up function to remove the event listener when the component is unmounted
        return () => window.removeEventListener("scroll", transitionNavBar)
    }, []) // The empty array means this effect will only run once (like componentDidMount in classes)

    // Return the Nav component JSX
    return (
        <div className={`nav ${show && "nav_black"}`}> {/* Use the 'show' state to conditionally apply the "nav_black" class */}
            <div className='nav_contents'> {/* Container for the nav contents */}
                <img
                    className='nav_logo' // Set the class name for styling
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" // Source of the logo image
                    alt="Netflix Logo" // Alt text for the logo image
                />
                <img
                    className='nav_avatar' // Set the class name for styling
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" // Source of the avatar image
                    alt="User Avatar" // Alt text for the avatar image
                />
            </div>
        </div>
    )
}

export default Nav // Export the Nav component
