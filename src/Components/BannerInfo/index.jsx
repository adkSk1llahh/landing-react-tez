import { React, useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext.jsx";

const BannerInfo = () => {
  const { dictionary } = useContext(LanguageContext);
  return (
    <section class="wrapper__banner-info">
      <div class="container">
        <div class="banner banner-info">
          <p class="banner__text banner-info__text">
            {dictionary.banneer_info.text}
          </p>

          <div class="app app--banner-info">
            <h1 class="app__title">{dictionary.banneer_info.link_title}</h1>
            <ul class="app__list">
              {dictionary.banneer_info.link_item.map((item) => (
                <li class="app__list-item" key={item.item}>
                  <a class="app__link" href="#">
                    <img
                      class="app__icon"
                      src={item.img}
                      alt="image"
                      width="40"
                      height="40"
                    />
                    <div>
                      <p class="app__text">{item.link_text}</p>
                      <p class="app__text app__text--opacity">{item.item}</p>
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

export default BannerInfo;
