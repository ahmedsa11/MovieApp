import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import CardList from "./component/cardlist/cardList";
import {BrowserRouter,Route,Routes}from 'react-router-dom'
import Navbarr from "./component/navbar/navbar";
import DetailsFilm from "./component/detailsFilm/detailsfilm";
function App() {
  const [Movies, setMovies] = useState([]);
  const [countPage, setcountPage] = useState();
  const getAllMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=be6f049599290ba2f40c031ca94edc56&language=ar"
    );
    setMovies(res.data.results);
    setcountPage(res.data.total_pages)
  };
  const getPage = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=be6f049599290ba2f40c031ca94edc56&language=ar&page=${page}`
    );
    setMovies(res.data.results);
    setcountPage(res.data.total_pages)
  };
  useEffect(() => {
    getAllMovies();
  }, []);
  const Search = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=be6f049599290ba2f40c031ca94edc56&query=${word}&language=ar`
      );
      setMovies(res.data.results);
      setcountPage(res.data.total_pages)
    }
  };
  return (
    <div className="App">
      <Navbarr Search={Search} />
      <Container>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<CardList Movies={Movies} getPage={getPage} countPage={countPage}/>}/>
          <Route path="movie/:id" element={<DetailsFilm/>}/>
        </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
