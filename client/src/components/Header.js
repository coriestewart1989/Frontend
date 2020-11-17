import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div></div>
      <ul>
        <Link to="/signup">Sign Up</Link>
        {localStorage.getItem("token") ? (
          <Link to="/dashboard">Home</Link>
        ) : (
          <Link to="/">Home</Link>
        )}
        {localStorage.getItem("token") ? (
          <Link
            to="/"
            onClick={() => {
              localStorage.removeItem("token");
            }}
          >
            Sign Out
          </Link>
        ) : null}
      </ul>
    </div>
  );
}
