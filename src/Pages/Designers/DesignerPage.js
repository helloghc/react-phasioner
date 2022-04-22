import React from 'react'
import styled from 'styled-components'
import TitleLine from '../../Components/TitleLine';
import BannerDesigners from './Components/BannerDesigners';
import TopProfileTile from './Components/TopProfileTile';
import User1 from '../../Images/img1.jpg'


export default function DesignerPage() {
    return (
        <DesignersCont>
            <BannerDesigners />
            <br/>
            <div className='con'>
                <TitleLine text={'Diseñadores del mes'} />
                <div className='profiles-destaqued'>
                    <TopProfileTile 
                        image={User1}
                        user='@Ana21'
                    />
                    <div className='spacerw10'></div>
                    <TopProfileTile
                        image={User1}
                        user='@Carla22'
                    />
                </div>
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

    .profiles-destaqued {
        display: flex;
    }
`;