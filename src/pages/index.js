import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/NavBar/Index";
import Sidebar from "../components/SideBar/index";
import InfoSection from "../components/InfoSection/index";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/InfoSection/Data";
import Services from "../components/Services/Index";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
