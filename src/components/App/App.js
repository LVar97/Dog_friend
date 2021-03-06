import React from 'react';
import "../../vendor/normalize.css";
import "../../vendor/fonts.css";
import "./App.css";
import Banner from "../Banner/Banner";
import Main from "../Main/Main";
import validator from 'validator';

function App() {
  const [main, setMain] = React.useState(false);
  const [final, setFinal] = React.useState(false);
  const [tel, setTel] = React.useState(['+7']);
	const [check, setCheck] = React.useState(false);

  function isOpenFinal(){
    setFinal(true);
  }

  function isOpenMain(){
    setMain(true);
    setSubmitButtonState();
  }

  function closeMain(){
    setMain(false);
    setFinal(false);
    setTel(['+7']);
    setCheck(false);
  }

  const handleCheck = ({ target: { checked } }) => {
    setCheck(checked);
    setSubmitButtonState(checked, validatePhoneNumber(tel.join('')));
  };

  function setSubmitButtonState(check, mobile){
    
    const btnAgree = document.querySelector('.promo__btn');
		if ( check !== true || mobile !== true) {
      btnAgree.setAttribute('disabled', true);
			btnAgree.classList.add('promo__btn_disabled');
		}else if(check === true && mobile === true){
      btnAgree.classList.remove('promo__btn_disabled');
			btnAgree.removeAttribute('disabled');
		}
	}

	function validatePhoneNumber (number) {
    
		const isValidPhoneNumber = validator.isMobilePhone(number, 'ru-RU', 'strictMode' );
		const checkBox = document.querySelector('.promo__checkbox');
    const errMessage = document.querySelector('.promo__err');

		if (isValidPhoneNumber === false){
			checkBox.classList.add('promo__checkbox_hidden');
			errMessage.classList.remove('promo__err_hidden');
      setCheck(false);
      setSubmitButtonState(check, isValidPhoneNumber)
		} else {
			checkBox.classList.remove('promo__checkbox_hidden');
			errMessage.classList.add('promo__err_hidden');
		}
		return isValidPhoneNumber;
	}
  

  function handleBtnClick(item){
    if (item === 'Стереть'&& tel.length > 1 ){
			tel.pop(tel.length);
      setTel([...tel]);
      validatePhoneNumber(tel.join(''));
		} else if( tel.length === 11){
			console.log('err to much numbers', tel.length);
		} else if(item !== 'Стереть'){
			setTel([...tel,item]);
      tel.push(item);
      validatePhoneNumber(tel.join(''));
      setSubmitButtonState(validatePhoneNumber(tel.join('')));
		}
  }

  return (
    <div className="page">
      <div className={`page__titles ${main && 'page__titles_disabled'}`}>
        <h2 className="titles titles__item">верный друг</h2>
        <h2 className="titles titles__item">Он ГОТОВ ПОДАРИТЬ РАДОСТЬ ЗАБОТЫ</h2>
        <h2 className="titles titles__item">И МОРЕ ПОЛОЖИТЕЛЬНЫХ ЭМОЦИЙ</h2>
        <h2 className="titles titles__item">он ждет тебя</h2>
      </div>
      <Banner
      onOpenMain={isOpenMain}
      />
      <Main
      onOpenFinal={isOpenFinal}
      onOpen={final}
      onCloseMain={closeMain}
      isOpen={main}
      name={tel}
      check={check}
      onHandleCheck={handleCheck}
      onButtonClick={handleBtnClick}
      />
    </div>
  );
}

export default App;
