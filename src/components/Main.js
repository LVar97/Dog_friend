import qrCode from "../image/qr-code.svg";

import Promo from "./Promo";
// import Final from './Final';

function Main(props){
	return(
		<div className={`main ${props.isOpen && 'main_opened'}`}>
			<button className="btn-close" type="button" onClick={props.onCloseMain}/>
			<Promo
      onOpenFinal={props.isOpenFinal}/>
			<div className="qr-zone">
				<p className="qr-zone__text">Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ</p>
				<img src={qrCode} alt="QR-код" className="qr-zone__image" />
			</div>
		</div>
	);
}

export default Main;
