import { React, useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext.jsx";
import img from "../../assets/images/desktop/about-service@1x.png";

const About = () => {
  const { dictionary } = useContext(LanguageContext);
  return (
    <section className="wrapper__about">
      <div className="container about block">
        <div className="block__side">
          <img
            className="block__image about__image"
            src={img}
            alt="image"
            width="520"
            height="540"
          />
        </div>

        <div className="block__side about__text">
          <h1 className="block__title title gradient">
            {dictionary.about.title}
          </h1>

          <p className="about__desc">{dictionary.about.text}</p>

          <div className="about__bank-list">
            <p className="about__bank-title">{dictionary.about.bank_title}</p>

            <ul className="about__bank-items">
              {dictionary.about.bank_icon.map((item, index) => (
                <li className="about__item" key={index}>
                  <img
                    className="about__bank-icon"
                    src={item}
                    alt="image"
                    width="190"
                    height="60"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
