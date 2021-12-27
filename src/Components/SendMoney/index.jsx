import {React, useContext} from 'react';
import { LanguageContext } from "../../Context/LanguageContext.jsx";
import img from "../../assets/images/desktop/send-money@1x.png"

const SendMoney = () => {
    const {dictionary} = useContext(LanguageContext)
    return (
		<section className="wrapper__send-money">
			<div className="container send-money block">
				<div className="block__side">
					<img className="block__image send-money__image" src={img} alt="image"
						width="540" height="510" />
				</div>

				<div className="block__side send-money__text">
					<h1 className="block__title title gradient">{dictionary.send_money.title}</h1>

					<ul className="send-money__list block__list">

                        {dictionary.send_money.array.map((item, index) => 
                            <li className="send-money__list-item block__list-item" key={index}>
                                <span className="block__number">{item.id}</span>
                                <p className="block__text">{item.text}</p>
                            </li>
                        )}
					</ul>
				</div>
			</div>
		</section>
    );
};

export default SendMoney;