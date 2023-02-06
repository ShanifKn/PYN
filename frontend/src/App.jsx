import { Suspense, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import reactLogo from './assets/react.svg'
import "./App.css";
import Home from "./components/movieList";
import MovieDetail from "./components/movieDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
