import React, { useEffect } from 'react'
import styled from 'styled-components'
import useUser from '../../Hooks/useUser';
import HeaderUser from './Components/HeaderUser';
import TabBar from './Components/TabBar';
import Clotes from './Sections/clotes';


export default function ProfilePage({ id }: { id: string }) {
  const { getDataUserID } = useUser();

  useEffect(() => {
    getDataUserID({ id: id });
  }, [id, getDataUserID]);
 

  return (
    <ProfileLayout>
        <div className='layout' >
            <h4>Inicio / Mi Perfil </h4>
            <HeaderUser/>
            <p className='spacerH10'></p>
            <TabBar/>
            <br/>
            <Clotes/>
        </div>
    </ProfileLayout>
  )
}

const ProfileLayout = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    .layout{
        width: 100vw;
        max-width: 80vw;
        display: flex;
        flex-direction: column;
    }
`;