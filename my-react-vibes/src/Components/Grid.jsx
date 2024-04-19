import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "react-bootstrap";
function Grid() {
  return (
    <div>
         <main>
      <Container fluid style={{textAlign:"center" ,border:"2px soild blue"}}>
        <Row>
          <Col
            xl={4}
            style={{ backgroundColor: " #8080ff", border: "2px solid black" }}
          >
            Col-1
          </Col>
          <Col xl={8}>
            Col-2
            <Row>
              <Col xl={4} style={{ backgroundColor: "greenyellow",padding:"2px" }}>
                Col-3
              </Col>
              <Col xl={8} style={{ backgroundColor: " #ff6666" }}>
                Col-4
                <Row>
                  <Col xl={6} style={{ backgroundColor: "yellow"  }}>
                    col-5
                  </Col>
                  <Col xl={6} style={{ backgroundColor: "greenyellow"}}>
                    col-6
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </main>
    </div>
  );
}

export default Grid;