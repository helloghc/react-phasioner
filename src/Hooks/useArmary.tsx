import { useCallback, useContext, useEffect } from "react";
import ProductContext from "../Contexts/products_context";
import getArmary from "../Services/get_armarys";

export default function useArmary () {
    const { armarys, setArmarys } = useContext(ProductContext);

    const getArmarys = useCallback( async () => {
        const response = await getArmary();
        const products = await response.json();
        setArmarys(products);
    }, [setArmarys])

    useEffect(() => {
        getArmarys();
    } , [getArmarys])


    return {
        armarys,
        getArmarys,
    }
}