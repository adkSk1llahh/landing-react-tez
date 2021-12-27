import React, { useContext, useState } from "react";

import { languageOptions } from "../../Languages";
import { LanguageContext } from "../../Context/LanguageContext.jsx";
import logo from "../../assets/images/icons/logo-header.svg";

const Header = () => {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  const handleLanguageChange = (e) => userLanguageChange(e.target.id);
  const { dictionary } = useContext(LanguageContext);

  const [visible, setVisible] = useState(false);

  const qq = () => {
    setVisible(!visible);
  };

  return (
    <header className="header container">
      <a className="logo" href="">
        <img src={logo} alt="" className="logo__item" width={52} height={29} />
      </a>

      <nav className="header__nav">
        <ul className="menu">
          {dictionary.links.map((item, id) => (
            <li key={id} className="menu__item">
              <a className="menu__link" href="">
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <ul className="language">
        <li className="language__item language__item--top">
          <span
            className="language__item-link language__item-link--top"
            onClick={qq}
          >
            {dictionary.text}
          </span>
          {visible && (
            <ul className="language__list">
              {Object.entries(languageOptions).map(([id, name]) => (
                <li
                  className="language__item-link language__item-link--bottom"
                  key={id}
                  id={id}
                  onClick={handleLanguageChange}
                >
                  {name.text}
                  <img className="language__image" src={name.img} alt="iamge" />
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </header>
  );
};

export default Header;
