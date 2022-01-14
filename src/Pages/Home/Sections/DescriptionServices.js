import React from 'react'
import styled from 'styled-components'
import DescriptionCard from '../Components/DescriptionCard';
import Logo1 from '../../../Images/registcard.svg'
import Logo2 from '../../../Images/loadshoes.svg'
import Logo3 from '../../../Images/buyph.svg'


export default function DescriptionServices() {
    return (
        <SectionConteiner>
            <DescriptionCard
                img={Logo1}
                title={'Registrate'}
            />
            <DescriptionCard
                img={Logo2}
                title={'Carga tus prendas'}
            />
            <DescriptionCard
                img={Logo3}
                title={'Vendelas en Phasioner'}
            />
        </SectionConteiner>
    )
}

const SectionConteiner = styled.section`
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: center;
`;
