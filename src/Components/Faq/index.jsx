import { React, useContext, useState } from "react";
import { LanguageContext } from "../../Context/LanguageContext.jsx";
import img from "../../assets/images/icons/list-arrow.svg";

const Faq = () => {
  const { dictionary } = useContext(LanguageContext);

  const [click, setClick] = useState();

  const button = (id) => {
    id === click ? setClick() : setClick(id);
  };

  return (
    <section className="wrapper__faq">
      <div className="container faq">
        <h1 className="faq__title title gradient">{dictionary.faq.title}</h1>
        <ul className="faq__list">
          {dictionary.faq.array.map((item, id) => (
            <li className="faq__list-item" key={id}>
              <button
                className="faq__item faq__item--button"
                onClick={() => button(item.id)}
              >
                {item.question}
                <img
                  className="faq__arrow"
                  src={img}
                  alt="image"
                  width="16"
                  height="16"
                  style={item.id === click ? {transform: "rotate(180deg)"} : {}}
                />
              </button>
              {item.id === click && (
                <p className="faq__item faq__item--text">{item.answer}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Faq;
