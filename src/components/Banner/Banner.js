import "./Banner.css";
import qrCode from "../../image/qr-code.svg";

function Banner(props){

	return(
		<div className="banner">
			<h1 className="banner__title">Станьте семьей для малыша! Возьмите собаку из приюта!</h1>
			<img className="banner__qr-code" src={qrCode} alt="QR-код"/>
			<p className="banner__subtitle">Сканируйте QR-код или нажмите ОК</p>
			<button className="banner__button" type="button" onClick={props.onOpenMain}>OK</button>
		</div>
	);
}

export default Banner;