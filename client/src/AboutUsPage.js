import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AboutUsPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="heading">
            <h1>ABOUT US</h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12} style={{ textAlign: "center" }}>
          <p>
            We are a yoga club that is dedicated to promoting health and wellness
            through the practice of yoga. Our experienced instructors provide
            classes that are suitable for people of all levels, from beginners to
            advanced practitioners.
          </p>
          <p>
            Our studio is equipped with the latest yoga props and equipment to
            ensure that our students can get the most out of their practice. We
            also offer a variety of classes, including Hatha Yoga, Vinyasa Flow,
            and Ashtanga Yoga.
          </p>
          <div className="heading">
            <h4>CEO OF CLASSPOT</h4>
          </div>
          <p>
            Leo Sukarno Messi, Co-founder/ CEO of ClassPot. "Fitness isn’t just about the goal,
            it’s a journey. So we’ve created a space for you to become the star you really are.
            With tons of fresh classes, A+ equipment and amazing StarMakers to cheer you on,
            we’ll get you looking - and feeling - sensational!"
          </p>
          <div className="heading">
            <h4>2021: THE DYNAMIC DUO</h4>
          </div>
          <p>
            We became sister brands with Fitness First
            under our new holding company, Evolution
            Wellness.
          </p>
          <div className="heading">
            <h4>2022: STEPPING OUT</h4>
          </div>
          <p>
            We opened our first club in Mont Kiara,
            Kuala Lumpur
          </p>
          <div className="heading">
            <h4>2023: A STAR IS BORN</h4>
          </div>
          <p>
            ClassPot started out Kuala Lumpur, Malaysia.
            We rose up across the country with clubs in
            Singapore, Indonesia, Bali and many more.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUsPage;
