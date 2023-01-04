import React from "react";
import "./card.css";
import { Col } from "react-bootstrap";
import {Link}from 'react-router-dom'
function Card({ Movies }) {
  return (
    <>
      {Movies.length > 0 ? (
        Movies.map((item,idx) => {
          return (
            <Col md="6" sm="12" lg="4"key={idx}>
              <Link to={`/movie/${item.id}`}>
              <div className="card">
                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="imgfilm" />
                <div className="overlay">
                  {" "}
                  <div className="info">
                    <h6>اسم الفيلم : {item.title}</h6>
                    <h6> تاريخ الاصدار : {item.release_date} </h6>
                    <h6>عدد المقيمين : {item.vote_count} </h6>
                    <h6>التقييم : {item.vote_average} </h6>
                  </div>
                </div>
              </div>
              </Link>
            </Col>
          );
        })
      ) : (
        <h1>لاتوجد افلام</h1>
      )}
    </>
  );
}

export default Card;
