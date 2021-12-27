import { React, useContext, useState } from "react";
import { LanguageContext } from "../../Context/LanguageContext.jsx";
import icon from "../../assets/images/icons/check.svg"
import img from "../../assets/images/desktop/partners@1x.png"

const Transfer = () => {
  const { dictionary } = useContext(LanguageContext);

  return (
    <section className="wrapper__transfer">
      <div className="container transfer block">
        <div className="block__side transfer__text">
          <h1 className="block__title title gradient">
            {dictionary.transfer.title}
          </h1>

          <ul className="block__list transfer__list">
            {dictionary.transfer.array.map((item, index) => (
              <li className="block__list-item transfer__list-item" key={index}>
                <img
                  className="block__check transfer__check"
                  src={icon}
                  width="24"
                  height="24"
                />
                <p className="block__text">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="block__side">
          <img
            className="block__image transfer__image"
            src={img}
            alt="image"
            width="502"
            height="508"
          />
        </div>
      </div>
    </section>
  );
};

export default Transfer;
