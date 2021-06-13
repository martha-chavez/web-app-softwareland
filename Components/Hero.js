import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Hero = () => {
  return (
    <section className="section position-relative bg-dark">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              {/* <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">Lorem Ipsum</p> */}
              <h1 className="mb-4 font-weight-normal line-height-1_4 text-white">Frameworks Populares <span className="text-info font-weight-medium">Para Desarrolladores Web</span></h1>
              <p className="text-muted mb-4 pb-2">El Framework es una plantilla, un esquema conceptual, que simplifica la elaboración de una tarea, ya que solo es necesario complementarlo de acuerdo a lo que se quiere realizar.</p>
              <a href="https://www.armadilloamarillo.com/blog/cuales-son-las-mejores-tecnologias-para-desarrollo-web/" target="_blank" className="btn btn-warning">
                Ver articulo <span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0"> 
              <img src="./img/Hero2.webp" alt="" className="img-fluid mx-auto d-block hero "/>
            </div>
          </Col> 
        </Row>
      </Container>
    </section>
  );
}
export default Hero;