import React from 'react';
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  const links = [
    { id : 1, title : "Front-End",
      child : [
          { title : "REACT", link : "https://es.reactjs.org" },
          { title : "VUE", link : "https://vuejs.org" },
          { title : "ANGULAR", link : "https://angular.io" },
          // { title : "LOREM IPSUM", link : "/" }
      ]
    },
    { id : 2, title : "Back-End",
      child : [
          { title : ".NET Core", link : "https://dotnet.microsoft.com/download" },
          { title : "LARAVEL", link : "https://laravel.com" },
          { title : "SPRING", link : "https://spring.io" },
          { title : "EXPRESS", link : "https://expressjs.com/es/" },
      ]
    },
  ];
  
  return (
    <section className="footer section bg-light">
      <Container>
        <Row>
          <Col lg={4}>
              <div className="mb-4">
                <p className="text-muted mt-4 mb-2">Páginas oficiales de los Frameworks</p>
                <h6 className="text-muted font-weight-normal"> que aparecen en esta página:</h6>
              </div>
          </Col>
          <Col lg={8}>
            <Row>
              {
                links.map((link, key) =>
                  <Col key={key} md={4}>
                    <h6 className="text-dark h3 mb-3">{link.title}</h6>
                    <ul className="list-unstyled company-sub-menu">
                      {
                        link.child.map((fLink, key) =>
                          <li key={key}><a href={fLink.link}>{fLink.title}</a></li>
                        )
                      }
                    </ul>
                  </Col>
                )
              }
              
              <Col md={4}>
              <span class="mdi mdi-football-helmet"></span>

                <h6 className="text-dark h4 mb-3"> Informacion de contacto</h6>
                <p className="text-muted f-14"> </p>
                <h8 className="text-muted pb-2 ">Email: </h8>
                <a href=" mailto:chavezsoriamarthaangelica@gmail.com">  Martha_Chavez</a><br/>
                <h7 className="text-muted pb-2">Linkedin:</h7> <a href="https://www.linkedin.com/in/martha-angelica-chávez-soria-129533180/">Martha Angelica Chávez</a>
                
              </Col>
            </Row>
          </Col>
        </Row>
<Row className="mt-5">
          <Col md={12}>
            <div className="text-center text-muted">
              <p className="mb-0 f-15">2021 © Softwareland by Martha Chavez</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Footer;