import { React, useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext.jsx";

const Banner = () => {
  const { dictionary } = useContext(LanguageContext);
  return (
    <section className="wrapper__banner">
      <div className="container">
        <div className="banner">
          <h1 className="banner__title title gradient">
            {dictionary.banner.title}
          </h1>
          <p className="banner__text">{dictionary.banner.subtitle}</p>

          <div className="app app--banner">
            <h1 className="app__title">{dictionary.banner.link_title}</h1>
            <ul className="app__list">
              {dictionary.banner.link_item.map((obj, index) => (
                <li className="app__list-item" key={index}>
                  <a className="app__link" href="#">
                    <img
                      className="app__icon"
                      src={obj.img}
                      alt="image"
                      width="40"
                      height="40"
                    />
                    <div>
                      <p className="app__text">{obj.link_text}</p>
                      <p className="app__text app__text--opacity">{obj.item}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
