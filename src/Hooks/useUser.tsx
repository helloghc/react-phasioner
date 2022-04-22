import {useCallback, useContext, useState, useEffect} from 'react'
import { useLocation } from 'wouter';
import Context from '../Contexts/user_context';
import loginService from '../Services/login';
import getDataUser from '../Services/get_profile'
import getDataID from '../Services/get_user'

export default function useUser () {
  const {favs, jwt, setJWT, user, setUser, profile, setProfile} = useContext(Context)
  const [state, setState] = useState({ loading: false, error: false })

  const [ locatione, setLocation ] = useLocation();


  const login = useCallback(({username, password} : {username:string, password:string}) => {
    setState({loading: true, error: false })
    loginService({email: username, password})
      .then(jwt => {
        console.log(locatione)
        window.sessionStorage.setItem('jwt', jwt)
        setState({loading: false, error: false })
        setJWT(jwt)
        setLocation('/')
      })
      .catch(err => {
        window.sessionStorage.removeItem('jwt')
        setState({loading: false, error: true })
        console.error(err)
      })
  }, [setJWT, locatione, setLocation])

  const logout = useCallback(() => {
    window.sessionStorage.removeItem('jwt')
    setJWT(null)
  }, [setJWT])

  const validateUserInit =  useCallback(async ({token}: {token: string}) => {
    try {      
      const responseValidation = await getDataUser({token: token});
      if (responseValidation.status === 200) {
          const dataUser = await responseValidation.json();

          setUser(dataUser);

          return;
        } else {
          logout();
        }
    } catch (error) {
      throw Error(`Error: ${error}`);
    }
  }, [setUser, logout])


  // Get Data
  const getDataUserID = useCallback(async ({id}: {id:string}) => {
    const response = await getDataID({id: id});
    if (response.status === 201) {
      const dataUser = await response.json();
      setProfile(dataUser);
    } else {
      setProfile(null);
    }
    
  } , [setProfile])

  useEffect(() => {
    if(jwt){
      validateUserInit({token: jwt});
    }

  }, [jwt, validateUserInit])


  


  return {
    favs,
    isLogged: Boolean(jwt),
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    user,
    profile,
    login,
    logout,
    getDataUserID,
  }
} 