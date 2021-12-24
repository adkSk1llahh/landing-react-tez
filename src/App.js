import React from "react";
import "./assets/style/style.scss"

import Header from "./Components/Header/Header.jsx";

import Banner from "./Components/Banner/Banner.jsx";

import { LanguageProvider } from "./Context/LanguageContext.jsx";

function App() {
  return (
    <LanguageProvider>
      <Header />
      <Banner />
    </LanguageProvider>
  );
}

export default App;
