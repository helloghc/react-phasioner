import React, { useState } from 'react'
import styled from 'styled-components'
import InputTextPrimary from '../../../Components/InputTextPrimary';


// Images
import Vestido from '../../../Images/vestido.jpg'
import DropIcon from '../../../Images/dropicon.svg'

export default function HistoryProduct() {


    const [isOpen, setIsOpen] = useState(false);

    onselect = () => {

            setIsOpen(!isOpen);
       

    }

    return (
        <FirstLay isOpen={isOpen}>
            <CardHistory>
                <img src={Vestido} alt='Vestido' className='image-card'/>
                <div className='info-card'>
                    <h3>Vestido ZARA</h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    </p>
                    <h1>$200 MXN</h1>
                </div>
            </CardHistory>
            <div className='add-more-info'>
                <InputTextPrimary placeholder={'Añadir dirección'}/>
                <br/>
                <div className='payment-method' onClick={onselect}>
                    <h3>Selecciona un método de pago</h3>
                    
                    <img src={DropIcon} alt='drop'/>
                </div>
                    <DropMethod isOpen={isOpen}>
                        <p className='item-method'>Tarjeta de débito</p>
                        <p className='item-method'>Tarjeta de Crédito</p>
                        <p className='item-method'>Transferencia</p>
                        <p className='item-method'>Pago con bitcoin</p>
                    </DropMethod>
            </div>

        </FirstLay>
    )
}



const FirstLay = styled.div`
    margin-right: 2em;

    .payment-method{
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        padding: 1em 0em;

        &:hover{
            background-color: #F5F6F8;
        }
    }
    .payment-method img{
        width: 1.3em;
        ${(props) => {
        if (props.isOpen) {
            return `
            transform: rotate(180deg);
            flex-direction: column;
            `
        } else {
            return `
            display: flex;
            `
        }
    }}
    }
    .payment-method h3{
        margin: 0%;
    }
`;

const DropMethod = styled.div`


${(props) => {
    if (props.isOpen) {
        return `
        display: flex;
        flex-direction: column;
        `
    } else {
        return `
        display: none;
        `
    }
}}
    /* display: none; */
    padding-top: 4px;
    position: relative;
    margin: 0%;
    padding: 0%;

    background-color: #fff;
    z-index: 9999;

    /* Size */
    height: 14em;

/* 
  &:hover {
    display: flex;
  } */

  .item-method{
    padding: 0.5em 0em;
    margin: 0;
  }

  .item-method:hover {
    background-color: #11D4E7;
    cursor: pointer;
    font-weight: bold;
   
  }


  .list-sub{
      padding: 0em 1em;
      display: flex;
      flex-wrap: wrap;
      height: 100%;
  }


  .item-sub{
      padding: 15px;
      margin: 0;
      cursor: pointer;
  }

  .item-sub:active {
      color: #11D4E7;
  }



`

const CardHistory = styled.div`
    display: flex;
    padding: 2em 0em;

    .image-card{
        width: 10em;
        height: 10em;
    }

    .info-card{
        padding: 0em 0em 0em 2em;
    }

    .info-card h3{
        padding: 0em;
        margin: 0em;
    }
`;