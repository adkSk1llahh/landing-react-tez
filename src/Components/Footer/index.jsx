import { React, useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext.jsx";
import logo from "../../assets/images/icons/logo-footer.svg";
import wplogo from "../../assets/images/icons/wooppay-logo.svg";

const Footer = () => {
  const { dictionary } = useContext(LanguageContext);
  return (
    <footer className="footer container block">
      <div className="footer__content">
        <img
          className="footer__logo"
          src={logo}
          alt="image"
          width="32"
          height="32"
        />
        <div className="footer__items">
          <p className="footer__text footer__text--item">
            {dictionary.footer.text}
          </p>
          <a className="footer__text footer__text--link" href="#">
            {dictionary.footer.link}
          </a>
        </div>
      </div>

      <a href="#">
        <img
          className="footer__wp-logo"
          src={wplogo}
          alt="image"
          width="100"
          height="42"
        />
      </a>
    </footer>
  );
};

export default Footer;
