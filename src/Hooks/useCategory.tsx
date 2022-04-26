import { useCallback, useContext, useEffect } from "react";
import ProductContext from "../Contexts/products_context";
import getCategories from "../Services/get_categories";

export default function useCategory () {
    const { categories, setCategories, categorieNav, setCategorieNav } = useContext(ProductContext);

    const getCategoriesList = useCallback( async () => {
        const response = await getCategories();
        const products = await response.json();
        setCategories(products);
    }, [setCategories])

    const setCategorieFilter = useCallback((categorie: string) => {
        console.log(categorie);
        setCategorieNav(categorie);
    } , [setCategorieNav])

    useEffect(() => {
        getCategoriesList();
    } , [getCategoriesList])


    return {
        categories,
        getCategories,
        categorieNav,
        setCategorieFilter,
    }
}