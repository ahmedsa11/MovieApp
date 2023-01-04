import { useRef } from "react";
import Container from "react-bootstrap/Container";
import './navbar.css'
function Navbarr({Search}) {
  const inputValue = useRef("");
  return (
    <div className="navbar">
      <Container>
        <div className="search">
        <i className="fa fa-solid fa-magnifying-glass"></i>
        <input ref={inputValue} onChange={()=>Search(inputValue.current.value)} type="search" placeholder="search"/>
        </div>
      </Container>
    </div>
  );
}

export default Navbarr;
