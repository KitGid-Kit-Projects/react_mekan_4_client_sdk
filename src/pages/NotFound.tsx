// Importing useLocation hook to get the current URL path
import { useLocation } from "react-router-dom";

// Importing useEffect hook to run side effects
import { useEffect } from "react";

// Defining the NotFound component
// This component is displayed when a user navigates to a non-existent route
const NotFound = () => {
  // Get the current location object from React Router
  const location = useLocation();

  // useEffect runs when the component mounts or the pathname changes
  useEffect(() => {
    // Log a 404 error in the console with the attempted path
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]); // Dependency array: triggers when pathname changes

  return (
    // Full-screen container centered both vertically and horizontally
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      
      {/* Centered content */}
      <div className="text-center">
        {/* Large "404" heading */}
        <h1 className="mb-4 text-4xl font-bold">404</h1>

        {/* Subheading explaining the page is not found */}
        <p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>

        {/* Link back to the home page */}
        <a href="/" className="text-blue-500 underline hover:text-blue-700">
          Return to Home
        </a>
      </div>
    </div>
  );
};

// Exporting the NotFound component for use in routes
export default NotFound;