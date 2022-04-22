import React from 'react'
import  styled  from 'styled-components'
import LogoPhasioner from '../../../Images/logopercha.png'


export default function TopProfileTile({user, image}) {
  return (
    <TopProfileStyle src={image}>
      <img className='iconito' src={LogoPhasioner} alt='Logo phasioner blanco con icono de percha'/> 
      <h1 className='titleName'> {user} </h1>
    </TopProfileStyle>
  )
}

const TopProfileStyle = styled.div`
  width: 50%;
  height: 60vh;
  background:linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(${props => props.src});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  .iconito{
    width: 60%;
  }

  .titleName{
    font-size: 1.3rem;
    color: #fff;
    font-weight: 300;
  }

  @media screen and (max-width: 800px){
    height: 200px;
}
`;
