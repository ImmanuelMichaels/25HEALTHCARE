import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-pic.jpg";

import "../styles/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import hospitalInfo from "../assets/data/hospitalInfo";
import pharmaciesInfo from "../assets/data/pharmacyInfo";

import Services from "../services/Services";
import HospitalList from "../components/UI/HospitalList";
import { setPharmacies } from "../redux/slices/PharmacySlice";
// import counterImg from "../assets/images/counter-timer-img.png";

// import Clock from "../components/UI/Clock";

const Home = () => {
  const [displayedPharmacies, setDisplayedPharmacies] = useState<Array<any>>([]);
  const [displayedHospitals, setDisplayedHospitals] = useState<Array<any>>([]);
  const [popularPharmacies, setPopularPharmacies] = useState<Array<any>>([]);
  const [popularHospitals, setPopularHospitals] = useState<Array<any>>([]);

  const year = new Date().getFullYear();

  // 
  

  useEffect(() => {
   const rotateHospitals = () => {
    const currentDate = new Date();
    const startOfYear = new Date(currentDate.getFullYear(), 0, 0);
    const diff = Number(currentDate) - Number(startOfYear);
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);

    const startIndex = dayOfYear % hospitalInfo.length;
    const selected = [...hospitalInfo.slice(startIndex), ...hospitalInfo.slice(0, startIndex)].slice(0, 8);
    setDisplayedHospitals(selected);
    
    const shuffledPharmacies = [...pharmaciesInfo].sort(() => 0.5 - Math.random());
    const selectedPharmacies = shuffledPharmacies.slice(0, 4);
    setDisplayedPharmacies(selectedPharmacies);
    
  };
  
    
  rotateHospitals();
  
  
    const filteredPopularPharmacies = pharmaciesInfo
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);
  
    const filteredPopularHospitals = hospitalInfo
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);
  
    setPopularPharmacies(filteredPopularPharmacies);
    setPopularHospitals(filteredPopularHospitals);
  
  }, []);
  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Looking For Hospitals or Pharmacies?</p>
                <h2>We've Got You Covered </h2>
                <p>
                  Find the best hospitals and pharmacies that offers <br />
                  healthcare services at affordable rate.
                </p>

                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="buy__button"
                >
                  <Link to="/hospital">Explore</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img  src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12"  className="text-center">
              <h2 className="section__title">&#x1F48A; PHARMACIES</h2>
            </Col>
            <HospitalList data={displayedPharmacies} />
          </Row>
        </Container>
      </section>

      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">⚕ HOSPITALS</h2>
            </Col>
            <HospitalList data={displayedHospitals}/>
            
          </Row>
        </Container>
      </section>
     

      {/* <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count__down-col">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
              </div>
              <Clock />
              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy__button store__btn"
              >
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>

            <Col lg="6" md="12" className="text-end counter__img">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section> */}

      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Popular Search - Pharmacies</h2>
            </Col>
            <HospitalList data={popularPharmacies} />
          </Row>
        </Container>
      </section>

      <section className="popular__category">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Popular Search - Hospitals</h2>
            </Col>
            <HospitalList data={popularHospitals} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
