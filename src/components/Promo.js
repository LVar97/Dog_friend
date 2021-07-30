function Promo(props){

	function onclickNumber(){}

	return(
		<div className="promo">
			<h1 className="promo__title">Введите ваш номер мобильного телефона</h1>
			<input type="tel" className="promo__input"></input>
			<p className="promo__text">и с Вами свяжется наш менеждер для дальнейшей консультации</p>
			<div className="promo__keyboard">
        <button onclick={onclickNumber} className="promo__keyboard_btn">1</button>
        <button onclick={onclickNumber} className="promo__keyboard_btn">2</button>
        <button onclick={onclickNumber} className="promo__keyboard_btn">3</button>
        <button onclick={onclickNumber} className="promo__keyboard_btn">4</button>
        <button onclick={onclickNumber} className="promo__keyboard_btn">5</button>
        <button onclick={onclickNumber} className="promo__keyboard_btn">6</button>
				<button onclick={onclickNumber} className="promo__keyboard_btn">7</button>
        <button onclick={onclickNumber} className="promo__keyboard_btn">8</button>
        <button onclick={onclickNumber} className="promo__keyboard_btn">9</button>
				<button onclick={} className="promo__keyboard_reset">Стереть</button>
				<button onclick={onclickNumber} className="promo__keyboard_btn">0</button>
    	</div>
			<div className="promo__checkbox">
				<input type="checkbox" className="promo__check" />
				<span className="promo__check_text">Согласие на обработку персональных данных</span>
			</div>
			<button className="promo__btn" type="button">Подтвердить номер</button> 
		</div>
	);
	
}
export default Promo;