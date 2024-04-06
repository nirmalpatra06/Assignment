import React, { Component } from "react";
// Components //
import Header from "./component/Header";
import IntegrationSection from "./component/IntegrationSection";
import Footer from "./component/Footer";
import Category from "./component/Category";
import Accordian from "./component/Accordian";
import BookingSection from "./component/BookingSection";
function App() {
  return (
    <>
      <Header />
      <IntegrationSection />
      <Category />
      <Accordian />
      <BookingSection />
      <Footer />
    </>
  );
}

export default App;
