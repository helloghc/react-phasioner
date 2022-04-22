import React from 'react'
import User from '../../../Images/user1.jpg'
import AvatarUser from '../../../Components/AvatarUser'
import styled from 'styled-components'
import Start from '../../../Images/star.svg'
import ButtonSecondary from '../../../Components/ButtonSecondary'
import ProductCard from './ProductCard'

export default function DesignerArmyCard() {
    return (
        <DesignerCard>
            <div className='user-contain'>
                <div className='user-card'>
                    <AvatarUser src={User}/>
                    <div className='user-info'>
                        <h3>Maria Extein</h3>
                        <p><img src={Start} alt='icon'/> 4.6</p>
                    </div>
                </div>
                <div className='user-actions'>
                    <ButtonSecondary text={'Seguir'}/>
                </div>
            </div>
            <div className='products-contain'>
                <ProductCard 
                    name={'PANTALON CALVIN KLEIN'}
                    price={1200}
                />
                <ProductCard
                    name={'PANTALON CALVIN KLEIN'}
                    price={1200}
                />
                <ProductCard 
                    name={'PANTALON CALVIN KLEIN'}
                    price={1200}
                />
                <ProductCard 
                    name={'PANTALON CALVIN KLEIN'}
                    price={1200}
                />
            </div>
        </DesignerCard>
    )
}


const DesignerCard = styled.div`

    .user-contain{
        display: flex;
        justify-content: space-between;
        align-self: center;
        align-items: center;
    }



    .user-card{
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .user-info{
        padding-left: 1em;
        justify-content: center;
        align-items: center;
        align-self: center;
    }
    .user-info h3 {
        margin: 0;
    }
    .user-info p {
        padding-top: .5em;
        margin: 0;
    }


    .user-actions {
        width: 25vw;
        display: flex;
    }

    .space{
        width: 2em;
    }


    .products-contain{
        width: 100%;
        display: flex;
        padding-top: 2em;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`;



