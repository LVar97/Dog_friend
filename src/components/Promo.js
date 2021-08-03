import React from 'react';
import Button from "./Button";
import  InputMask  from 'react-input-mask';

function Promo(props){

	return(
		<div className="promo">
			<h1 className="promo__title">Введите ваш номер мобильного телефона</h1>
			<InputMask 
			className="promo__input" 
			mask="+7(999)999-99-99"
			name="phone"
			value={props.name}
			maskChar="_"
			required
			/>
			<p className="promo__text">и с Вами свяжется наш менеждер для дальнейшей консультации</p>
			<div className="promo__keyboard">
			{props.buttons.map((buttonValue, index) => (
				<Button key={index} value={buttonValue} onButtonClick={props.onHandleBtnClick}/>
			))}
    	</div>
			<div className="promo__checkbox">
				<input type="checkbox" className="promo__check" checked={props.check} onChange={props.onCheck} />
				<p className="promo__check_text">Согласие на обработку персональных данных</p>
			</div>
			<span className="promo__err promo__err_hidden">НЕВЕРНО ВВЕДЁН НОМЕР</span>
			<button className="promo__btn" type="button"  onClick={props.onOpenFinal}  >Подтвердить номер</button> 
		</div>
	);
	
}
export default Promo;