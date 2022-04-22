import React from 'react'
import styled from 'styled-components';
import DesignerArmyCard from './DesignerArmyCard';


export default function ListArmary() {
    return (
        <ArmaryContainList>
            <DesignerArmyCard/>
            <DesignerArmyCard/>
            <DesignerArmyCard/>
        </ArmaryContainList>
    )
}


const ArmaryContainList = styled.section`
    padding-top: 1em;
    
    

`;
