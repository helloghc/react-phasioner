import React from 'react'
import styled from 'styled-components'


// Images

import Vestido from '../../../Images/vestido.jpg'

export default function HistoryProduct() {
    return (
        <CardHistory>
            <img src={Vestido} alt='Vestido' className='image-card'/>
            <div className='info-card'>
                <h3>Vestido ZARA</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 

    
                </p> 
                <h1>$200 MXN</h1>
            </div>
        </CardHistory>
    )
}

const CardHistory = styled.div`
    display: flex;
    padding: 2em 0em;

    .image-card{
        width: 10em;
        height: 10em;
    }

    .info-card{
        padding: 0em 2em;
    }
`;