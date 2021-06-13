import React from 'react';
import { Container, Row, Col } from "reactstrap";
const Informacion = () => {
return (
    <section className="section " id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">¿Qué  <span className="text-warning">tecnología</span> debo utilizar?</h3>
              <p className="text-muted">Recurrir a lenguajes populares y de alta calidad para el desarrollo de los proyectos web facilita a los programadores la gestión del código.</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h2 className="font-weight-light line-height-1_6 text-dark mb-4">Hay dos formas de escribir programas sin errores; sólo la tercera funciona.</h2>
          </Col>
          <Col md={{ size:7, offset :1 }}>
            <Row>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Tecnologías frontend</h6>
                <p className="text-muted font-weight-light">Hablamos del HTML, CSS y JavaScript, los tres permiten el desarrollo de la parte gráfica del proyecto y la interfaz de usuario.  Según StackOverflow, el 69,7% de los programadores han utilizado JavaScript, convirtiéndolo en el lenguaje más consultado por los desarrolladores en todo el mundo, seguido por el HTML/CSS con un 63,1%.</p>
              </Col>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Tecnologías backend</h6>
                <p className="text-muted font-weight-light">Este conjunto de lenguajes se encarga de implementar los comportamientos de la web en el servidor. Se programa la interacción web, almacenan la información en el servidor y se conectan con la base de datos para actualizarse e ir mostrando contenido determinado.</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Informacion;