import React, { useContext } from 'react'
import styled from 'styled-components'
import ProductContext from '../../../Contexts/products_context';
import useTakeCard from '../../../Hooks/Payments/use_takecard';
import { PaymentCardModel } from '../../../Models/payment_card_model';

export default function Radiobutton({card}:{card: PaymentCardModel}) {
    const { cardPaymentSelect } = useContext(ProductContext);

    const { takeMyCards } = useTakeCard();

  return (
    <RadioStyle 
        onClick={()=>{
            takeMyCards({card: card})
        }}
        isSelected={cardPaymentSelect?.id === card.id}>
        <label className="label"></label>
        <input type="radio" className="label__input" />

        <div className="label__circle">
            <div className={ cardPaymentSelect?.id === card.id ? "label__radio label__radio--selected " : 'label_radio'}></div>
        </div>

        {card.card_number.replaceAll('X', '*')}
    </RadioStyle>
  )
}

interface RadioProps {
    isSelected: boolean;
}

const RadioStyle = styled.div<RadioProps>`
    display: flex;
    flex-direction: row;
    padding: 1em;
    .label {
        /* Center the content horizontally */
        align-items: center;
        display: inline-flex;

        /* Cursor */
        cursor: pointer;
    }

    .label__input {
        /* Hide it */
        display: none;
    }

    .label__circle {
        /* Rounded border */
        border: 1px solid rgba(0, 0, 0, 0.3);
        border-radius: 9999px;
        /* Spacing */
        margin-right: 8px;
        padding: 4px;
    }

    .label__radio {
        /* Rounded border */
        border-radius: 9999px;
        height: 16px;
        width: 16px;

        /* For not selected radio */
        background-color: transparent;
    }

    .label__radio--selected {
        /* For selected radio */
        background-color: #00449e;
    }
`;