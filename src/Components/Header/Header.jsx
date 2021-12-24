import React, { useContext } from "react";
import "./style.scss"

import { languageOptions } from "../../Languages";
import { LanguageContext } from "../../Context/LanguageContext.jsx";
import logo from "../../assets/images/icons/logo-header.svg";

const Header = () => {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  const handleLanguageChange = (e) => userLanguageChange(e.target.id);
  const { dictionary } = useContext(LanguageContext);

  return (
    <header className="header">
      <img src={logo} alt="" className="" width={52} height={29}/>

      <nav className="nav">
        <ul className="nav__list">
          {dictionary.links.map((item, id) => (
            <li key={id} className="nav__item">
              {item.text}
            </li>
          ))}
        </ul>
      </nav>

      <ul>
        {Object.entries(languageOptions).map(([id, name]) => (
          <li key={id} id={id} onClick={handleLanguageChange}>
            <img src={name.img} alt="" />
            {name.text}
          </li>
        ))}
      </ul>
      
    </header>
  );
};

export default Header;
