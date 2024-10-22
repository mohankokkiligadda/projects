import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Header } from '../Common/Header/Header';
import { Footer } from '../Common/Footer/Footer';

const HomePage: React.FC = () => {
  return (
    <>
    <Header/>
    <div className="bg-light">
      <Container className="py-5">
        <Row>
          <Col>
            <h1 className="display-4">Welcome to Our Website</h1>
            <p className="lead">Explore our amazing features and offerings.</p>
          </Col>
        </Row> 
       </Container> 
    </div>
    <Footer/>
    </>
  );
};

export default HomePage;
