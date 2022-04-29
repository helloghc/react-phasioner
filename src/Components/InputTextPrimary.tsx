import React from 'react'
import styled from 'styled-components'

interface InputProps {
    placeholder: string;
    name: string;
    type: string
}

export default function InputTextPrimary({placeholder, name, type}: InputProps) {
    return (
        <InputContain>
            <input 
                placeholder={placeholder} 
                className="container__input" 
                name={name} 
                type={type}
            />
            <label className="container__label">{placeholder}</label>
        </InputContain>
    )
}


const InputContain = styled.div`
    position: relative;
    
    .container__input {
        width: 100%;
        height: 2.4em;
        border: none;
        border-bottom: 1px solid #000;
        font-size: 1.2em;
    }

    .container__input:not(:placeholder-shown) + .container__label {
        background: #fff;
        transform: translate(0, -70%);
        opacity: 1;
        border: none;
    }

    .container__label {
        left: 3px;
        position: absolute;
        top: 0;

        /* Hide it by default */
        opacity: 0;
        transition: all 200ms;
    }
`;
