function Promo(props){

	function onclickNumber(){}
	function deleteNumber(){}

	return(
		<div className="promo">
			<h1 className="promo__title">Введите ваш номер мобильного телефона</h1>
			<input type="tel" className="promo__input" value="+7(___)___-__-__"></input>
			<p className="promo__text">и с Вами свяжется наш менеждер для дальнейшей консультации</p>
			<div className="promo__keyboard">
        <button onClick={onclickNumber} className="promo__keyboard_btn">1</button>
        <button onClick={onclickNumber} className="promo__keyboard_btn">2</button>
        <button onClick={onclickNumber} className="promo__keyboard_btn">3</button>
        <button onClick={onclickNumber} className="promo__keyboard_btn">4</button>
        <button onClick={onclickNumber} className="promo__keyboard_btn">5</button>
        <button onClick={onclickNumber} className="promo__keyboard_btn">6</button>
				<button onClick={onclickNumber} className="promo__keyboard_btn">7</button>
        <button onClick={onclickNumber} className="promo__keyboard_btn">8</button>
        <button onClick={onclickNumber} className="promo__keyboard_btn">9</button>
				<button onClick={deleteNumber} className="promo__keyboard_reset">Стереть</button>
				<button onClick={onclickNumber} className="promo__keyboard_btn">0</button>
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