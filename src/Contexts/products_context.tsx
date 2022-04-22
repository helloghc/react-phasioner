import React, { useState, createContext, ReactNode } from 'react'
import { ArmaryModel } from '../Models/armary_model';
import { ProductModel } from '../Models/product_model';
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
const ProductContext = createContext<any>(dataDefault);

export const ProductContextProvider = ({children}: AuxProps) => {
  const [favs, setFavs] = useState([])
  const [spotProducts, setSpotProducts] = useState<ProductModel[]>()
  const [armarys, setArmarys] = useState<ArmaryModel[]>([])
  const [products, setProducts] = useState<ProductModel>()

//   useEffect(() => {
//     if (!jwt) return setFavs([])
//     // getFavs({jwt}).then(setFavs)
//   }, [jwt])

  return (
    <ProductContext.Provider value={{
            favs,
            setFavs,
            spotProducts,
            setSpotProducts,
            products,
            setProducts,
            armarys,
            setArmarys,
          }}>
      {children}
    </ProductContext.Provider>
  )
}
export default ProductContext
