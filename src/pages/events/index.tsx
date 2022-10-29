import React, { useContext, useState } from 'react';
import { ApplicationWrapper } from '../../components/layout/ApplicationWrapper';
import { userContext } from '../../components/context/UserContext';

export default function Index() {

  const defaultStyle = 'border shadow border-black';
  const hooverStyle = 'border shadow border-black bg-red-500';

  const [texto, setTexto] = useState('Valor inicial');
  const [numero, setNumero] = useState('0');
  const [isValid, setIsValid] = useState(false);
  const [checkSelected, setCheckSelected] = useState(false);
  const [selectValue, setSelectValue] = useState('');
  const [buttonStyle, setButtonStyle] = useState(defaultStyle);

  const { userName, setUsername, setUserDetail } = useContext(userContext);

  const onClickHandler = () => {
    setTexto('Texto cambiado!!!');
    console.log('click en el boton');
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTexto(event.target.value);
    console.log('input changed!!!', event.target.value);
  };

  const onNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('numero cambiado');
    setNumero(event.target.value);
  };

  const onCheckChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('check cambiado', event.target.checked);
    setCheckSelected(event.target.checked);
  };

  const onSelectChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(event.target.value);
    console.log('el valor del select es ', event.target.value);
  };

  // @ts-ignore
  const onSubmitHandler = (event) => {
    console.log(
      'submit',
      'texto', texto,
      'numero', numero,
      'isValid', isValid,
      'checkSelected', checkSelected,
      'selectValue', selectValue,
    );
    setSelectValue('');
    setUsername('');
    // @ts-ignore
    setUserDetail({
      status: {
        enabled: true
      },
      email: 'instructor.modificado@rootstack.com'
    });
    event.preventDefault();
  };

  const onDivClickHandler = () => {
    console.log('clio en el div');
  };

  // @ts-ignore
  const onClickPropagationHandler = (event) => {
    console.log('click en el segundo boton');
    event.stopPropagation();
  };

  return (
    <ApplicationWrapper title='Eventos'>
      <div className='bg-white text-black h-full p-8 m-8 flex flex-col gap-2'>

        <h1>Ejemplo de eventos {userName}</h1>

        <span>El valor es: {texto}</span>

        <input type='text' className='bg-white text-black border'
               onChange={onChangeHandler}
               value={texto}
               onFocus={() => {
                 console.log('usuario activo la caja de texto');
               }}
               onBlur={() => {
                 setIsValid(texto.length > 0);
                 console.log('usuario desactivo la caja de texto');
               }}
        />

        <input className='bg-white tex-black' type='number' value={numero} onChange={onNumberChange}/>
        {texto.length === 0 && <span className='text-red-700'>El valor es requerido</span>}
        {!isValid && <span className='text-red-700'>El valor es requerido (focus)</span>}

        <input type='checkbox' className='bg-white text-white' onChange={onCheckChangeHandler} checked={checkSelected}/>

        <select className='bg-white' onChange={onSelectChangeHandler} value={selectValue}>
          <option value=''></option>
          <option value='1'>Valor 1</option>
          <option value='2'>Valor 2</option>
          <option value='3'>Valor 3</option>
        </select>

        <form onSubmit={onSubmitHandler}>
          <button type='submit' className='border shadow border-black'>Enviar y Logout</button>
        </form>

        <div onClick={onDivClickHandler} className='border border-red-900 p-4'>
          <button className={buttonStyle} onClick={onClickHandler}
                  onMouseEnter={() => {
                    setButtonStyle(hooverStyle);
                  }}
                  onMouseLeave={() => {
                    setButtonStyle(defaultStyle);
                  }}>
            Test button
          </button>
          <button className='border shadow border-black' onClick={onClickPropagationHandler}>Test propagation</button>
          {checkSelected && <button className='border shadow border-black' onClick={() => {
            console.log('arrow function');
          }}>Test button 2</button>}
        </div>
      </div>
    </ApplicationWrapper>);
}
