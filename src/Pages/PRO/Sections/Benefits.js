import React from 'react'
import styled from 'styled-components'
import Cardbenefit from '../Components/Cardbenefit';
import CardbenefitPRO from '../Components/CardbenefitPRO';
import TitleImage from '../../../Images/logoproblack.svg'

export default function Benefits() {
    return (
        <BenefitsContainer>
            <div className='container-ben'>
                <h1>Ventajas de ser PRO</h1>
                <div className='bene'>
                    <Cardbenefit/>
                    <CardbenefitPRO/>
                </div>
                <img src={TitleImage} alt='Title' className='sub'/>
            </div>
        </BenefitsContainer>
    )
}

const BenefitsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2em 0em;

    .container-ben{
        width: 100vw;
        max-width: 80vw;
        text-align: center;
    }

    .bene{
        display: flex;
        justify-content: space-evenly;
        padding-bottom: 3em;
    }

    .sub{
        height: 5em;
    }

    h1{
        font-size: 2em;
        font-weight: 200;
        margin-bottom: 2em;
    }


`;