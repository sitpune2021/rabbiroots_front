import React, { useState, useEffect } from "react";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Common/Footer";
import Header from "./components/Common/Header";
import ItemsAdd from "./components/UI/ItemsAdd";

function App() {
  return (
    <div className="w-full">
      <Header />
      <ItemsAdd />
      <Layout />
      <Footer />
    </div>
  );
}

export default App;
