import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayouts = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <ToastContainer />
      <Footer />
    </>
  );
};

export default MainLayouts;
