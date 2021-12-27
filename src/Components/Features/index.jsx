import { React, useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext.jsx";

const Features = () => {
  const { dictionary } = useContext(LanguageContext);
  return (
    <section className="wrapper__features">
      <div className="container features">
        <h1 className="title gradient">{dictionary.features.title}</h1>

        <ul className="features__list block">
          {dictionary.features.array.map((item, index) => (
            <li className="features__list-item" key={index}>
              <img
                className="features__image"
                src={item.img}
                alt="image"
                width="90"
                height="90"
              />
              <div className="features__text">
                <span className="features__title">{item.title}</span>
                <p className="features__desc">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;
