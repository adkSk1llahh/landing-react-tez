import { React, useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext.jsx";
import logo from "../../assets/images/icons/logo-footer.svg";
import wplogo from "../../assets/images/icons/wooppay-logo.svg";

const Footer = () => {
  const { dictionary } = useContext(LanguageContext);
  return (
    <footer class="footer container block">
      <div class="footer__content">
        <img
          class="footer__logo"
          src={logo}
          alt="image"
          width="32"
          height="32"
        />
        <div class="footer__items">
          <p class="footer__text footer__text--item">
            {dictionary.footer.text}
          </p>
          <a class="footer__text footer__text--link" href="#">
            {dictionary.footer.link}
          </a>
        </div>
      </div>

      <a href="#">
        <img
          class="footer__wp-logo"
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
