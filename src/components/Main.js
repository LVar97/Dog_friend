import React from 'react';
import qrCode from "../image/qr-code.svg";
import Final from './Final';
import Promo from "./Promo";

function Main(props){
	const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'Стереть', 0];

	return(
		<div className={`main ${props.isOpen && 'main_opened'}`}>
			<button className="btn-close" type="button" onClick={props.onCloseMain}/>
			<Promo
      onOpenFinal={props.onOpenFinal}
			buttons={buttons}
			onHandleBtnClick={props.onButtonClick}
			name={props.name}
      check={props.check}
      onCheck={props.onHandleCheck}
			/>
			<Final isOpen={props.onOpen}/>
			<div className="qr-zone">
				<p className="qr-zone__text">Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ</p>
				<img src={qrCode} alt="QR-код" className="qr-zone__image" />
			</div>
		</div>
	);
}

export default Main;
