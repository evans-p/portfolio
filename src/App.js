import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Menu from "./Components/Menu/Menu";
import MenuAlternative from "./Components/MenuAlternative/MenuAlternative";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Portfolio from "./Components/Portfolio/Portfolio";

export default function App(props) {
  const [width, setWdith] = useState(window.innerWidth);
  const [loaded, setLoaded] = useState(false);

  const location = useLocation();

  const handleWindowResize = () => {
    setWdith(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);

  return (
    <>
      {width >= 950 ? <Menu /> : null}
      {width < 950 && location.pathname !== "/" ? <MenuAlternative /> : null}

      <Routes>
        <Route path="/" element={<Home width={width} loaded={loaded} />} />
        <Route path="/about" element={<About width={width} />} />
        <Route path="/contact" element={<Contact width={width} />} />
        <Route path="/portfolio" element={<Portfolio width={width} />} />
      </Routes>
    </>
  );
}
