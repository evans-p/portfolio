import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Menu from "./Components/Menu/Menu";
import MenuAlternative from "./Components/MenuAlternative/MenuAlternative";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Portfolio from "./Components/Portfolio/Portfolio";

import { portfolioData, portfolioHeader } from "./Data/porfolioData";

export default function App(props) {
  const [width, setWdith] = useState(window.innerWidth);
  const [loaded, setLoaded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const openModal = (data) => {
    setModalOpen(true);
    setModalData(data);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const location = useLocation();

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);

  const handleWindowResize = () => {
    setWdith(window.innerWidth);
  };

  return (
    <>
      {width >= 950 ? <Menu /> : null}
      {width < 950 && location.pathname !== "/" ? (
        <MenuAlternative
          location={location}
          modalOpen={modalOpen}
          closeModal={closeModal}
        />
      ) : null}

      <Routes>
        <Route path="/" element={<Home width={width} loaded={loaded} />} />
        <Route path="/about" element={<About width={width} />} />
        <Route path="/contact" element={<Contact width={width} />} />
        <Route
          path="/portfolio"
          element={
            <Portfolio
              width={width}
              openModal={openModal}
              closeModal={closeModal}
              modalOpen={modalOpen}
              modalData={modalData}
              data={portfolioData}
              header={portfolioHeader}
            />
          }
        />
      </Routes>
    </>
  );
}
