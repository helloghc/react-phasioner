import React from 'react'
import { Link } from 'wouter'
import styled from 'styled-components'
import ButtonPrimary from '../../Components/ButtonPrimary'
import InputTextPrimary from '../../Components/InputTextPrimary'
import useUser from '../../Hooks/useUser'

export default function Login() {

    const { login } = useUser();

    const handreSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        login({ username: form.get('email')!.toString(), password: form.get('password')!.toString() });
    }
    
  return (
    <LoginPage>
        <form className='conten-form' onSubmit={handreSubmit}>
            <InputTextPrimary 
                placeholder={'Email'} 
                name='email'
                type='email'
            />
            <br/>
            <InputTextPrimary 
                placeholder={'Contraseña'} 
                name='password' 
                type='password'
            />
            <br/>
            <ButtonPrimary text={'Iniciar sesión'}/>
            <p>¿No tienes cuenta? <Link href='/register'> Registrate</Link></p>
        </form>
    </LoginPage>
  )
}

const LoginPage = styled.div`
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    display: flex;
    position: fixed;
    background: #F7F7F9;
    align-items: center;
    justify-content: center;

    .conten-form {
        padding: 4em;
        background: #fff;
        text-align: center;
    }
`
