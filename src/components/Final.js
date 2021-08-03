function Final(props){
	
	return(
		<div className={`promo promo__final ${props.isOpen && 'promo__final_opened'}`}>
			<h1 className="promo__final-title">ЗАЯВКА ПРИНЯТА</h1>
			<p className="promo__final-text">Держите телефон под рукой.  Скоро с Вами свяжется наш менеджер.</p>
		</div>
	);
}

export default Final;
