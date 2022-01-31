import React from 'react';
import "./Main.css";
import qrCode from "../../image/qr-code.svg";
import Final from '../Final/Final';
import Promo from "../Promo/Promo";

function Main({
	isOpen, 
	onOpenFinal, 
	onButtonClick, 
	onCloseMain,
	name, 
	check, 
	onHandleCheck, 
	onOpen, 
	...props}){

	const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'Стереть', 0];

	return(
		<div className={`main ${isOpen && 'main_opened'}`}>
			<button className="btn-close" type="button" onClick={onCloseMain}/>
			<Promo
      onOpenFinal={onOpenFinal}
			buttons={buttons}
			onHandleBtnClick={onButtonClick}
			name={name}
      check={check}
      onCheck={onHandleCheck}
			isOpen={onOpen}
			/>
			<Final isOpen={onOpen}/>
			<div className="qr-zone">
				<p className="qr-zone__text">Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ</p>
				<img src={qrCode} alt="QR-код" className="qr-zone__image" />
			</div>
		</div>
	);
}

export default Main;
