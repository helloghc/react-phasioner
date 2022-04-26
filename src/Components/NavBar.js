import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Head from './Head';


// icons
import Logo from '../Images/logonav.svg'
import Menu from '../Images/menu-icon.png'
import LogoPro from '../Images/logopro.svg'
import ButtonPrimary from './ButtonPrimary';
import { Link } from 'wouter';



export default function NavBar() {

    const [scrollDir, setScrollDir] = useState(false);

    useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
        const scrollY = window.pageYOffset;

        if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
        }
        if(scrollY >= 50) {
            setScrollDir(true);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
        ticking = false;
    };

    const onScroll = () => {
        if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
        }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
    }, [scrollDir]);
        

    // Drawer 
    const [isOpenDrawer, setIsOpenDrawer] = useState(false);

    const  handleToggleDrawer = () =>{
        setIsOpenDrawer(!isOpenDrawer);
    }


    // categories
    const [isOpen, setIsOpen] = useState(false);
    const [indexItem, setIndexItem] = useState(null);

    onselect = ({index}) => {
        console.log(index);
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
                        <Link href='/'>
                            <img src={Logo} alt='logo'/>
                        </Link>
                    </div>

                    <div className='icon-menu'>
                            <img src={Menu} alt='logo' onClick={()=> {handleToggleDrawer()}}/>
                            <div className={isOpenDrawer ? 'drawer-menu' : 'drawer-menu-showed'}>
                                <ul>
                                    <li className={isOpenDrawer ? 'drawer-item' : 'drawer-item-showed'} onClick={() => {
                                        onselect({index: 2});
                                    }}>CATEGORIAS {scrollDir}</li>
                                    <Link href={'/designers'} >
                                        <li className={isOpenDrawer ? 'drawer-item' : 'drawer-item-showed'} onClick={() => {
                                            onselect({index:  3});
                                        }}>DISEÑADORES</li>
                                    </Link>
                                </ul>
                            </div>
                    </div>
                    <div className='nav-content'>
                        <ul className='nav-list'>
                            <Linked onClick={() => {
                                onselect({index: 2});
                            }}>CATEGORIAS</Linked>
                            <Link href={'/designers'} >
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
                                    <Link href={`/category/${'vestidos'}`}>
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
                        <Link href='/pro'>
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

    /* 
      &:hover {
        display: flex;
      } */

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
        height: 2em;
        display: flex;
        padding: 10px 20px;
        cursor: pointer;
    }

    .nav-content ul {
        display: flex;
        font-family: 'avenir-book';
    }

    .btn-content{
        height: 50px;
        display: flex;
        width: 160px;
    }
    
    
    .icon-menu img {
        display: none;
    }


    .drawer-menu{
        display: none;
    }

    .drawer-menu-showed{
        display: none;
    }
    .drawer-item
    {
        display: none;
    }
    
    
    
    @media screen and (max-width: 1000px) {
        .nav-content {
            display: none;
        }
        
        .icon-menu img {
            display: flex;
            height: 15px;
        }

        .drawer-menu {
            display: flex;
            top: 6em;
            right: 0em;
            height: 90vh;
            position: absolute;
            z-index: 9999;
            justify-content: center;
            align-self: center;
            background: #fff;
            transition: all 0.3s linear;
        }
        .drawer-menu-showed {
            display: none;
            top: 6em;
            right: -10em;
            position: absolute;
            height: 90vh;
            overflow: hidden;
            transition: all 0.3s linear;
        }

        .drawer-item-showed{
            display: none;
        }

        .drawer-menu ul {
            text-align: right;
            list-style-type: none;
        }

        .drawer-menu-showed ul {
            text-align: right;
            list-style-type: none;
        }
        
        .drawer-item {
            display: flex;
            text-align: right;
            padding: 10px;
            margin-right: 1rem;
        }
        
   

        nav{
            max-width: 90vw;
        }

        .logo-content img{
            height: 1.5em;
        }
    }

    
`;


