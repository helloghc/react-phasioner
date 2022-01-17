import React, { useState } from 'react'
import styled from 'styled-components'
import Head from './Head';


// icons
import Logo from '../Images/logonav.svg'
import LogoPro from '../Images/logopro.svg'
import ButtonPrimary from './ButtonPrimary';
import { Link } from 'react-router-dom';



export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false);
    const [indexItem, setIndexItem] = useState(null);

    onselect = ({index}) => {

        if(index === 3) {
            setIsOpen(false);
            setIndexItem(null);
        } else {
            if(index !== indexItem){
                setIsOpen(true);
                setIndexItem(index);
            } else {
                setIsOpen(false);
                setIndexItem(null);
            }
        }

    }


    return (
        <Navbar>
            <Head/>
            <div className='conteiner-nav'>
                <nav>
                    <div className='logo-content'>
                        <Link to='/'>
                            <img src={Logo} alt='logo'/>
                        </Link>
                    </div>
                    <div className='nav-content'>
                        <ul className='nav-list'>
                            <Linked onClick={() => {
                                onselect({index: 0});
                            }}>MUJER</Linked>
                            <Linked onClick={() => {
                                onselect({index: 1});
                            }}>HOMBRE</Linked>
                            <Linked onClick={() => {
                                onselect({index: 2});
                            }}>NIÑOS</Linked>
                            <Link to={'/designers'} >
                                <Linked onClick={() => {
                                    onselect({index:  3});
                                }}>DISEÑADORES</Linked>
                            </Link>
                            <DropMenu isOpen={isOpen}>
                                <div>
                                    <p className='item-menu'>Todo</p>
                                    <p className='item-menu'>Vestidos</p>
                                    <p className='item-menu'>Zapatos</p>
                                    <p className='item-menu'>Bolsos</p>
                                </div>
                                <div className='list-sub'>
                                    <Link to={`/category/${'vestidos'}`}>
                                        <p className='item-sub' onClick={() => {
                                                onselect({index:  3});
                                            }}>Vestidos</p>
                                    </Link>
                                    <p className='item-sub' onClick={() => {
                                            onselect({index:  3});
                                        }}>Camisas</p>
                                    <p className='item-sub' onClick={() => {
                                            onselect({index:  3});
                                        }}>Monos</p>
                                    <p className='item-sub' onClick={() => {
                                            onselect({index:  3});
                                        }}>Lenceria</p>
                                    <p className='item-sub' onClick={() => {
                                            onselect({index:  3});
                                        }}>Ropa deportiva</p>
                                    <p className='item-sub' onClick={() => {
                                            onselect({index:  3});
                                        }}>Vaquera</p>
                                    <p className='item-sub' onClick={() => {
                                            onselect({index:  3});
                                        }}>Abrigos y carabarasa</p>
                                    <p className='item-sub' onClick={() => {
                                            onselect({index:  3});
                                        }}>Lenceria</p>
                                </div>
                            </DropMenu>
                        </ul>
                        <Link to='/pro'>
                            <img src={LogoPro} alt='logo'/>
                        </Link>
                        <div className='btn-content'>
                            <ButtonPrimary
                                text='¡Vender Ya!'
                            />
                        </div>
                    </div>
                </nav>
            </div>
        </Navbar>
    )
}




const DropMenu = styled.menu`

    ${(props) => {
        if (props.isOpen) {
            return `
            display: flex;
            `
        } else {
            return `
            display: none;
            `
        }
    }}
        /* display: none; */
        left: 30%;
        padding-top: 4px;
        position: absolute;
        top:125px;
        margin: 0%;
        padding: 0%;

        background-color: #fff;
        z-index: 9999;

        /* Size */
        height: 14em;
        width: 40%;


      &:hover {
        display: flex;
      }

      .item-menu{
        width: 5em;
        padding: 1em;
        margin: 0;
      }

      .item-menu:hover {
        background-color: #11D4E7;
        cursor: pointer;
        font-weight: bold;
       
      }


      .list-sub{
          padding: 0em 1em;
          display: flex;
          flex-wrap: wrap;
          height: 100%;
      }


      .item-sub{
          padding: 15px;
          margin: 0;
          cursor: pointer;
      }

      .item-sub:active {
          color: #11D4E7;
      }

`;


const Linked = styled.li`

    height: 100%;
    display: flex;  
    align-items: center;
    justify-content: center;
    padding-bottom: 30px;
    margin: 0px 10px;
    cursor: pointer;
    
    &:hover {
        border-bottom: 2px solid #000;
       
    }
    


`;


const Navbar = styled.nav`
    
    .conteiner-nav{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-self: center;
        align-items: center;
    }

   ${Linked}:hover ${DropMenu} {
    display: block;
   }    
    
    nav{
        width: 100vw;
        max-width: 80vw;
        display: flex;
        justify-content: space-between;
        align-content: center;
        align-items: center;
        border-bottom: 1px solid #000;
        padding: 20px 0px;
    }



    .nav-content{
        height: 50px;
        display: flex;
    }
    .nav-content img{
        height: 30px;
        display: flex;
        padding: 10px 20px;
        cursor: pointer;
    }

    .nav-content ul {
        display: flex;
    }






    .btn-content{
        height: 50px;
        display: flex;
        width: 160px;
    }

    
`;


