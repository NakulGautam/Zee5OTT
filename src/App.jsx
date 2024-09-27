// src/App.jsx
import React, { useState } from "react";
import Navbar from "./navbar.jsx";
import Slider from "./cor_div.jsx";
import Trending from "./trending.jsx";
import Genre from "./genre.jsx";
import LanguageSection from "./language.jsx";
import ChildrenSection from "./children.jsx";
import Footer from "./footer.jsx";
import Login from "./login.jsx"; // Import the Login component

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} /> // Show login if not logged in
      ) : (
        <>
          <Navbar />
          <Slider />
          <Trending />
          <Genre />
          <ChildrenSection />
          <LanguageSection />
          <Footer />
        </>
      )}
    </>
  );
}
