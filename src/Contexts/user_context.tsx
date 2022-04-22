import React, { useState, useEffect, createContext, ReactNode } from 'react'
import { UserModel } from '../Models/user_models'

const dataDefault: UserModel = {
    id: '',
    name: '',
    email: '',
    photoURL: '',
    createdAt: Date.now(),
    updatedAt: Date.now(),
};
interface AuxProps {
  children: ReactNode;
}
const Context = createContext<any>(dataDefault);

export const UserContextProvider = ({children}: AuxProps) => {
  const [favs, setFavs] = useState([])
  const [user, setUser] = useState<UserModel>()
  const [profile, setProfile] = useState<UserModel>()
  const [jwt, setJWT] = useState(
    () => window.sessionStorage.getItem('jwt')
  )

  useEffect(() => {
    if (!jwt) return setFavs([])
    // getFavs({jwt}).then(setFavs)
  }, [jwt])

  return (
    <Context.Provider value={{
           favs,
           jwt,
           setFavs,
           setJWT,
           user,
           setUser,
           profile,
           setProfile,
          }}>
      {children}
    </Context.Provider>
  )
}
export default Context



// export function UserContextProvider ({children}) {
//   const [favs, setFavs] = useState([])
//   const [jwt, setJWT] = useState(
//     () => window.sessionStorage.getItem('jwt')
//   )

//   useEffect(() => {
//     if (!jwt) return setFavs([])
//     // getFavs({jwt}).then(setFavs)
//   }, [jwt])

//   return <Context.Provider value={{
//     favs,
//     jwt,
//     setFavs,
//     setJWT
//   }}>
//     {children}
//   </Context.Provider>
// }
