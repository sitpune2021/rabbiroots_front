import React, { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Common/Footer";
import Header from "./components/Common/Header";
import ItemsAdd from "./components/UI/ItemsAdd";
import MobileCartBadge from "./components/UI/MobileCartBadge";

function App() {
  return (
    <div className="w-full">
      <Toaster position="top-center" />
      <Header />
      <MobileCartBadge />
      <ItemsAdd />
      <Layout />
      <Footer />
    </div>
  );
}

export default App;
