import React from 'react';
import { Container, Row, Col } from "reactstrap";
const Service = () => {
  const backend = [
    { title : ".NET Core", desc : "Este framework de Microsoft destaca por ser una solución multiplataforma de código abierto que permite, entre otras cosas, el desarrollo de aplicaciones web modernas basadas en la nube." },
    { title : "Laravel", desc : "Actualmente Laravel se sitúa como el framework PHP mejor valorado en Github, con más de 60.000 estrellas." },
    { title : "Spring", desc : "Spring es un framework modelo-vista-controlador basado completamente en Java, uno de los lenguajes actualmente más populares a nivel de desarrollo, tanto en web, escritorio, como en la tecnología móvil Android." },
    { title : "Express", desc : "Express es un framework basado en la versión de Javascript por antonomasia para backend Node.js, y nos ofrece una ligera cobertura de los aspectos más importantes de una aplicación web sin eclipsar la potencia que nos ofrece Node." },
    // { title : "Lorem Ipsum", desc : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
    // { title : "Lorem Ipsum", desc : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
  ]
  
  return (
    <section className="section bg-light" id="service">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning">Frameworks de Back-End</span></h3>
              <p className="text-muted">Dentro del desarrollo web, el backend se encarga de todos los procesos necesarios para que la web funcione de forma correcta. Estos procesos o funciones no son visibles, pero tienen mucha importancia en el buen funcionamiento de un sitio web. Algunas de estas acciones que controla el backend son la conexión con la base de datos o la comunicación con el servidor de hosting.</p>
            </div>
          </Col>
        </Row>
        <Row>
          {
            backend.map((service, key) =>
              <Col key={key} lg={6} md={6}>
                <div>
                  <div className="mb-5">
                      <i className={service.icon}></i>
                  </div>
                  <h5 className="text-dark font-weight-bold text-center pt-1 mb-4 t-front">{service.title}</h5>
                  <p className="text-muted mb-4">{service.desc}</p>
                </div>
              </Col>
            )
          }
        </Row>
      </Container>
    </section>
  );
}
export default Service;