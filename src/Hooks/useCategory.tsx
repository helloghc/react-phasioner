import { useCallback, useContext, useEffect } from "react";
import ProductContext from "../Contexts/products_context";
import getCategories from "../Services/get_categories";

export default function useCategory () {
    const { categories, setCategories } = useContext(ProductContext);

    const getCategoriesList = useCallback( async () => {
        const response = await getCategories();
        const products = await response.json();
        setCategories(products);
    }, [setCategories])

    useEffect(() => {
        getCategoriesList();
    } , [getCategoriesList])


    return {
        categories,
        getCategories,
    }
}