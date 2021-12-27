import {React, useContext} from 'react';
import { LanguageContext } from "../../Context/LanguageContext.jsx";
import icon from "../../assets/images/icons/check.svg"
import img from "../../assets/images/desktop/get-money@1x.png"

const GetMoney = () => {
    const {dictionary} = useContext(LanguageContext)
    return (
		<section className="wrapper__get-money">
			<div className="container get-money block">
				<div className="block__side get-money__text">
					<h1 className="block__title title gradient">{dictionary.get_money.title}</h1>

					<h2 className="get-money__subtitle">{dictionary.get_money.subtitle}</h2>

					<ul className="get-money__list block__list">

                        {dictionary.get_money.array.map((item, index)=>
                            <li className="block__list-item" key={index}>
                                <img className="block__check" src={icon} width="24" height="24" />
                                <p className="block__text">
                                    {item}
                                </p>
                            </li> 
                        )}
					</ul>
				</div>

				<div className="block__side">
					<img className="block__image get-money__image" src={img} alt="image"
						width="540" height="520" />
				</div>
			</div>
		</section>
    );
};

export default GetMoney;