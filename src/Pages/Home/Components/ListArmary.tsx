import React from 'react'
import styled from 'styled-components';
import useArmary from '../../../Hooks/useArmary';
import { ArmaryModel } from '../../../Models/armary_model';
import DesignerArmyCard from './DesignerArmyCard';


export default function ListArmary() {
    const { armarys }: {armarys: ArmaryModel[]} = useArmary();
    return (
        <ArmaryContainList>
            {
                armarys !== null ?
                armarys?.map((armary) => {
                    return <DesignerArmyCard armary={armary}/>
                }) : null
            }
        </ArmaryContainList>
    )
}


const ArmaryContainList = styled.section`
    padding-top: 1em;
    
    

`;
