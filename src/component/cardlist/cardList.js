import React from "react";
import { Row } from "react-bootstrap";
import Card from "../card/card";
import PaginationC from "../pagination/pagination";
import "./cardList.css";
function CardList({Movies,getPage,countPage}) {
  return <>
  <Row>
  <Card Movies={Movies} />
{Movies.length>0?<PaginationC getPage={getPage}countPage={countPage}/>:null}  
  </Row>
  </>;
}

export default CardList;
