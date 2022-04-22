import React, { useState } from 'react'
import styled from 'styled-components'
import DropIcon from '../Images/dropicon.svg'

export default function DropDown() {

    const [tabs] = useState([
        { text: 'EN VENTA', icon: 'fa fa-home', key: 0, selected: true },
        { text: 'VENDIDOS', icon: 'fa fa-archive', key: 1, selected: false },
        { text: 'INACTIVOS', icon: 'fa fa-bar-chart', key: 2, selected: false },
    ]);
    const [isOpen, setIsOpen] = useState(false);

    const ontab = () => {
            setIsOpen(!isOpen);
    }

  return (
      <DropLayout isOpen={isOpen}>
        <div className='drop-btn' onClick={ontab}>
                <h3>Filtros</h3>
                <img src={DropIcon} alt='drop'/>
        </div>      
        <DropPanel isOpen={isOpen}>
            {
                tabs.map(tabs => <p key={tabs.key} className='item-method'>{tabs.text}</p>)
            }
        </DropPanel>
      </DropLayout>
  )
}

const DropLayout = styled.div`

    .drop-btn{
        display: flex;
        justify-content: space-between;
        border: 1px solid #11D4E7;
        border-radius: 10px;
        cursor: pointer;
        padding: 0.8em 2em;

        &:hover{
            background-color: #F5F6F8;
        }
    }
    .drop-btn img{
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
    .drop-btn h3{
        font-size: 1em;
        margin: 0%;
    }
`;


const DropPanel = styled.div`


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
    position: absolute;
    z-index: 9999;
    text-align: center;
    margin: 0%;
    padding: 0%;
    width: 8.5em;
    background-color: #fff;
    z-index: 9999;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);

    /* Size */
    /* height: 14em; */

/* 
  &:hover {
    display: flex;
  } */

  .item-method{
    padding: 1em 0em;
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
