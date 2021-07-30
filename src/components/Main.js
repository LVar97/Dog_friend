import qrCode from "../image/qr-code.svg";
function Main(props){
	return(
		<div className="main">
			<button className="btn-close" type="button" />
			<div className="qr-zone">
				<p className="qr-zone__text">Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ</p>
				<img src={qrCode} alt="QR-код" className="qr-zone__image" />
			</div>
		</div>
	);
}

export default Main;
