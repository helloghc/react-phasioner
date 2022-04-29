import { useCallback, useContext } from "react";
import { useLocation } from "wouter";
import ProductContext from "../../Contexts/products_context";
import { ProductModel } from "../../Models/product_model";

export default function useTakeOrder () {
    const { productBuy, setProductBuy } = useContext(ProductContext);
    const [, navigate] = useLocation();


    const takeOrder = useCallback( async ({prod}: {prod: ProductModel}) => {
        setProductBuy(prod);
        navigate('/order');
    }, [setProductBuy, navigate])



    return {
        takeOrder,
        productBuy,
    }
}