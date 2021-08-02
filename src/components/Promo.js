import React from 'react';
import Button from "./Button";
import InputMask from 'react-input-mask';

function Promo(props){

	const [tel, setTel] = React.useState(['+7']);

	function handleChangeTel(e) {
    setTel(e.target.value);
  }

	function handleBtnClick(item){
		if (item === 'Стереть'){
			tel.pop(tel.length);
			if(tel.length >= 1){
				setTel([...tel])
			}
		} else if( tel.length === 11){
			console.log('err to much numbers', tel.length)
		} else{
			setTel([...tel ,item])
		}
  }

	return(
		<div className="promo">
			<h1 className="promo__title">Введите ваш номер мобильного телефона</h1>
			<InputMask 
			className="promo__input" 
			mask="+7(999)999-99-99"
			name="phone"
			value={tel}
			onChange={handleChangeTel}
			maskChar="_"
			required
			/>
			<p className="promo__text">и с Вами свяжется наш менеждер для дальнейшей консультации</p>
			<div className="promo__keyboard">
			{props.buttons.map((buttonValue, index) => (
				<Button key={index} value={buttonValue} onButtonClick={handleBtnClick}/>
				
			))}
    	</div>
			<div className="promo__checkbox">
				<input type="checkbox" className="promo__check" />
				<p className="promo__check_text">Согласие на обработку персональных данных</p>
			</div>
			<button className="promo__btn" type="button" onClick={props.onOpenFinal}>Подтвердить номер</button> 
		</div>
	);
	
}
export default Promo;