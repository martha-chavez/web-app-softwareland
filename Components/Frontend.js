import React from 'react';
import { Container, Row, Col } from "reactstrap";
const FeatureBox = (props) => {
  return (
    <>
    {
      props.frontend.map((feature, key) =>
      (feature.id % 2 !== 0) ?
        <Row key={key} className={feature.id === 1 ? "align-items-center" : "align-items-center mt-5"}>
          <Col md={5} >
            <div>
              <img src={feature.img} alt="" className="img-fluid d-block mx-auto image"/>
            </div>
          </Col>
            <Col md={{size:6, offset:1}}>
              <div className="mt-5 mt-sm-0 mb-4">
                <div className="my-4">
                  <i className={feature.icon}></i>
                </div>
                <h5 className="text-dark font-weight-bold mb-3 pt-3 t-front">{feature.title}</h5>
                <p className="text-muted mb-3 f-15">{feature.desc}</p>
                <a href={feature.link} className="f-16 text-warning">Ver mas <span className="right-icon ml-2">&#8594;</span></a>
              </div>
            </Col>
        </Row>
      :
      <Row key={key} className="align-items-center mt-5">
        <Col md={6}>
          <div className="mb-4">
            <div className="my-4">
              <i className="mdi mdi-account-group"></i>
            </div>
            <h5 className="text-dark font-weight-normal mb-3 pt-3 t-front">{feature.title}</h5>
            <p className="text-muted mb-3 f-15">{feature.desc}</p>
            <a href={feature.link} className="f-16 text-warning">Ver mas <span className="right-icon ml-2">&#8594;</span></a>
          </div>
        </Col>
        <Col md={{size:5, offset:1}} className="mt-5 mt-sm-0">
          <div>
            <img src={feature.img} alt="" className="img-fluid d-block mx-auto image"/>
          </div>
        </Col>
      </Row>
      )
    }
    </>
  );
}
const Feature = () => {
const frontend = [
    {id : 1, img : "./img/react.png", title : "React", desc : "Debido a su capacidad de DOM virtual, React es la mejor opción para proyectos complejos que incluyen un número considerable de bloques (paneles de navegación, secciones de acordeón, botones, etc). Algunos sitios web populares que utilizan React.js en producción son Facebook, Netflix, Vivaldi Browser, Khan Academy, Asana, Pinterest, Airbnb, Reddit, BBC, UberEats. ", link : "https://es.reactjs.org"},
    {id : 2, img : "./img/vue.png", title : "Vue.js", desc : "Puede ser una de las mejores opciones cuando necesita construir una aplicación de una sola página desde el principio o lanzar un proyecto relativamente pequeño. Las marcas populares que utilizan Vue son Alibaba, 9gag, Reuters, Xiaomi, Ride Receipts.", link : "https://vuejs.org"},
    {id : 3, img : "./img/angular.png", title : "Angular", desc : "Angular está configurado para ser el marco óptimo para crear aplicaciones grandes a escala empresarial. Muchos de los servicios de Google se desarrollan con Angular. Otras marcas populares que utilizan Angular o AngularJS para sus proyectos web son Forbes, LEGO, Autodesk, UPS, BMW y muchas otras.", link : "https://angular.io"},
  ];
return (
    <section className="section" id="feature">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning">Frameworks de Front-End</span></h3>
              <p className="text-muted">Front End es la parte de una aplicación que interactúa con los usuarios, es conocida como el lado del cliente. Básicamente es todo lo que vemos en la pantalla cuando accedemos a un sitio web o aplicación</p>
            </div>
          </Col>
        </Row>
        <FeatureBox frontend={frontend} />
      </Container>
    </section>
  );
}
export default Feature;