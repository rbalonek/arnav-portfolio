import React from "react";
import "./Research.css";

// import Container from "react-bootstrap/Container";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";

export default function Research() {
  return (
    <div className="research__container">
      <div className="leadership__banner">
        <h1 className="title__banners">RESEARCH</h1>
      </div>

      <div className="grid__container">
        <div className="my-blogs__box">
          <div className="box-title">
            <h2>MY BLOGS</h2>
          </div>
          <div className="second-half__blogs">
            <p>
              -Connecting Communities through Soccer, in collaboration with
              Refugees United Soccer Academy
            </p>
            <p>-Economic Impact of COVID on Sports Industry</p>
            <p>-How to balance school and sport</p>
          </div>
        </div>

        <div className="my-blogs__box">
          <div className="box-title">
            <h2>RESEARCH</h2>
          </div>

          <div className="second-of-three__blogs">
            <h4>Foothill College:</h4>
            <p>
              Importance of Sub Competitions and Overall Competitions to
              maximize Economic benefits.
            </p>
          </div>
          <div className="third-of-three__blogs">
            <h4>Syracuse University:</h4>
            <p>Research intern at Soccer Analytics Club.</p>
          </div>
        </div>

        <div className="my-blogs__box">
          <div className="box-title" style={{ height: "75px" }}>
            <h2>Author</h2>
          </div>
          <div className="second-half__blogs">
            <p>- Economics of Soccer and Covid 19</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// <Container className="container-text__container" fluid={true}>
//         <Row style={{ border: "solid black", borderWidth: "thin" }}>
//           <Col
//             style={{
//               border: "solid black",
//               borderWidth: "thin",
//             }}
//           >
//             <h1>MY BLOGS</h1>
//           </Col>
//           <Col
//             style={{
//               border: "solid black",
//               borderWidth: "thin",
//             }}
//           >
//             <p>
//               -Connecting Communities through Soccer, in collaboration with
//               Refugees United Soccer Academy
//             </p>
//             <p>-Economic Impact of COVID on Sports Industry</p>
//             <p>-How to balance school and sport</p>
//           </Col>
//         </Row>
//         <Row style={{ border: "solid black", borderWidth: "thin" }}>
//           <Col
//             style={{
//               border: "solid black",
//               borderWidth: "thin",
//             }}
//           >
//             <h1>RESEARCH</h1>
//           </Col>
//           <Col>
//             <h3>Foothill College:</h3>
//             <p>
//               Importance of Sub Competitions and Overall Competitions to
//               maximize Economic benefits.
//             </p>
//           </Col>
//           <Col
//             style={{
//               border: "solid black",
//               borderWidth: "thin",
//             }}
//           >
//             <h3>Syracuse University:</h3>
//             <p>Research intern at Soccer Analytics Club.</p>
//           </Col>
//         </Row>
//         <Row style={{ border: "solid black", borderWidth: "thin" }}>
//           <Col
//             style={{
//               border: "solid black",
//               borderWidth: "thin",
//             }}
//           >
//             <h1>AUTHOR</h1>
//           </Col>
//           <Col>
//             <p>- Economics of Soccer and Covid 19</p>
//             <a
//               style={{ textDecoration: "underline", color: "white" }}
//               target="_blank"
//               rel="noopener noreferrer"
//               href="https://www.amazon.com/Economics-Soccer-Covid-19-Arnav-Jain/dp/B08RT6FB64/ref=sr_1_2?dchild=1&keywords=economics+of+soccer+and+covid+19&qid=1618705536&sr=8-2"
//             >
//               <p>View book on Amazon</p>
//             </a>
//           </Col>
//         </Row>
//       </Container>
