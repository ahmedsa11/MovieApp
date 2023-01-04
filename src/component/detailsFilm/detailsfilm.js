import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import axios from "axios";
import "./detailsfilm.css";
import { Link, useParams } from "react-router-dom";
function DetailsFilm() {
  const params = useParams();
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=be6f049599290ba2f40c031ca94edc56&language=ar`
    );
    setMovie(res.data);
  };
  useEffect(() => {
    getMovie();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="in">
        <Row>
          <Col md={6}>
            <div className="img-film">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="imgfilm" />
            </div>
          </Col>
          <Col md={6}>
            <div className="info-film">
            <h6>اسم الفيلم : {movie.title}</h6>
                    <h6> تاريخ الاصدار : {movie.release_date} </h6>
                    <h6>عدد المقيمين : {movie.vote_count} </h6>
                    <h6>التقييم : {movie.vote_average} </h6>
            </div>
          </Col>
        </Row>
      </div>
      <Row>
        <div className="store">
          <h1>القصه:</h1>
          <p>
     {movie.overview}
          </p>
        </div>
        <div className="btns">
         <Link to="/"><Button className="btn btn-dark">العوده الي الرئيسيه</Button></Link> 
        <a href={movie.homepage}>  <Button>مشاهدة الفيلم </Button></a>
        </div>
      </Row>
    </>
  );
}

export default DetailsFilm;
