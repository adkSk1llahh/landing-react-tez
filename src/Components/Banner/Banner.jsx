import { React, useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext.jsx";

const Banner = () => {
  const { dictionary } = useContext(LanguageContext);

  return (
    <section>
        {/* {dictionary.banner.title} */}
    </section>
  );
};

export default Banner;
