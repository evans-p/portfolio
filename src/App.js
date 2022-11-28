import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useSnackbar } from "notistack";

import Menu from "./Components/Menu/Menu";
import MenuAlternative from "./Components/MenuAlternative/MenuAlternative";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Portfolio from "./Components/Portfolio/Portfolio";
import Error from "./Components/Error/Error";

import portrait from "./Assets/img_portfolio.jpg";

import { portfolioData, portfolioHeader } from "./Data/porfolioData";
import { contactData, contactHeader } from "./Data/contactData";
import {
  skillData,
  seminarsData,
  aboutHeader,
  infoDataLeft,
  infoDataRight,
  educationData,
} from "./Data/aboutData";

import { mailJSData } from "./Data/mailJSData";

export default function App(props) {
  const [width, setWdith] = useState(window.innerWidth);
  const [loaded, setLoaded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { enqueueSnackbar } = useSnackbar();

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

  const validateContactData = () => {
    let errors = [];
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      errors.push("Please fill all the required fields.");
      return errors;
    }

    if (!email.includes("@")) {
      errors.push("Email field must contain '@' symbol.");
    }

    return errors;
  };

  const handleOnContactSubmit = (e) => {
    e.preventDefault();

    const errors = validateContactData();

    if (validateContactData().length > 0) {
      errors.map((error) => {
        enqueueSnackbar(error);
      });
      return;
    }

    emailjs
      .send(
        mailJSData.serviceId,
        mailJSData.templateId,
        {
          from_name: name,
          to_name: "Evans Poulakis",
          message: message,
          from_email: email,
        },
        mailJSData.publicKey
      )
      .then(
        (response) => {
          enqueueSnackbar(
            "The message has been received, we will contact you soon."
          );

          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          enqueueSnackbar("An error has occured, please try again later.");
        }
      );
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
        <Route
          path="/"
          element={<Home width={width} loaded={loaded} portrait={portrait} />}
        />
        <Route
          path="/about"
          element={
            <About
              portrait={portrait}
              width={width}
              skillData={skillData}
              seminarsData={seminarsData}
              aboutHeader={aboutHeader}
              infoDataLeft={infoDataLeft}
              infoDataRight={infoDataRight}
              educationData={educationData}
            />
          }
        />
        <Route
          path="/contact"
          element={
            <Contact
              width={width}
              data={contactData}
              header={contactHeader}
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              message={message}
              setMessage={setMessage}
              handleOnContactSubmit={handleOnContactSubmit}
            />
          }
        />
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
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}
