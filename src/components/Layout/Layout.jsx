import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import NotFoundPage from "../../pages/NotFoundPage";
import ShowItem from "../../pages/ShowItem";
import ScrollToTop from "../Common/ScrollToTop";
import ProductListing from "../../pages/ProductListing";
import AuthModal from "../Auth/AuthModal";
import Account from "../../pages/Account/Account";
import PrivacyPolicy from "../../pages/Policy/PrivacyPolicy";
import AboutUs from "../../pages/Policy/AboutUs";
import ContactUs from "../../pages/Policy/ContactUs";
import ReturnPolicy from "../../pages/Policy/ReturnPolicy";

function Layout() {
  return (
    <div className="w-full h-full mt-20">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/showitem/:id" element={<ShowItem />} />
        <Route path="/productlisting" element={<ProductListing />} />
        <Route path="/authmodal" element={<AuthModal />} />
        <Route path="/account" element={<Account />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/returnpolicy" element={<ReturnPolicy />} />
        <Route path="/account/addresses" element={<Account />} />
        <Route path="/account/orders" element={<Account />} />
        <Route path="/account/giftcards" element={<Account />} />
        <Route path="/account/privacy" element={<Account />} />
      </Routes>
    </div>
  );
}

export default Layout;
