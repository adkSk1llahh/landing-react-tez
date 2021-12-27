import React from "react";
import "./assets/sass/style.scss";

import Header from "./Components/Header/";

import Banner from "./Components/Banner/";

import SendMoney from "./Components/SendMoney/";

import GetMoney from "./Components/GetMoney";

import Features from "./Components/Features";

import Faq from "./Components/Faq";

import Transfer from "./Components/Transfer";

import About from "./Components/About";

import BannerInfo from "./Components/BannerInfo";

import Footer from "./Components/Footer";

import { LanguageProvider } from "./Context/LanguageContext.jsx";

function App() {
  return (
    <LanguageProvider>
      <Header />
      <main className="wrapper">
        <Banner />
        <SendMoney />
        <GetMoney />
        <Features />
        <Faq />
        <Transfer />
        <About />
        <BannerInfo />
      </main>

      <Footer />
    </LanguageProvider>
  );
}

export default App;
