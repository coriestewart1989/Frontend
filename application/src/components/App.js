import React from "react";

export default function App() {
  // State for isLoggedIn

  // useEffect to check if auth token exists in User's local storage

  return (
    <div>
      {/* Link to Home/Signin */}
      {/* Link to Signup */}
      {/* conditionally rendered Link to Dashboard if logged in */}
      {/* conditionally rendered Link to Classes if logged in */}

      {/* Switch for Routes */}
      {/* Route for path root that renders SigninForm */}
      {/* PrivateRoute for path "/dashboard" that renders Dashboard Component based on role */}
      {/* PrivateRoute for path "/classes" that renders Classes Component if logged in */}
      {/* End of Switch */}
    </div>
  );
}
