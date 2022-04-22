import { useCallback, useContext, useEffect } from "react";
import ProductContext from "../Contexts/products_context";
import { getSpotligth } from '../Services/spotlight_service'

export default function useSpotlight () {
    const { spotProducts, setSpotProducts } = useContext(ProductContext);

    const getSpotProduts = useCallback( async () => {
        const response = await getSpotligth();
        const products = await response.json();
        setSpotProducts(products);
    }, [setSpotProducts])

    useEffect(() => {
        getSpotProduts();
    } , [getSpotProduts])


    return {
        spotProducts,
        getSpotProduts,
    }
}