import React from 'react'
import styled from 'styled-components'
import TitleLine from '../../Components/TitleLine';
import BannerDesigners from './Components/BannerDesigners';

export default function DesignerPage() {
    return (
        <DesignersCont>
            <BannerDesigners />
            <br/>
            <div className='con'>
                <TitleLine text={'Diseñadores del mes'} />
            </div>
        </DesignersCont>
    )
}

const DesignersCont = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    .con{
        width: 100vw;
        max-width: 80vw;

    }
`;