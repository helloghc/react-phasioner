import { useCallback, useContext, useEffect } from "react";
import ProductContext from "../../Contexts/products_context";
import Context from "../../Contexts/user_context";
import { getCardsPayments } from "../../Services/get_cards";

export default function useGetCards () {
    const { jwt } = useContext(Context);
    const { myCards, setMyCards } = useContext(ProductContext);

    const getMyCards = useCallback( async () => {
        const response = await getCardsPayments({token:jwt});
        const products = await response.json();
        console.log(products)
        setMyCards(products);
    }, [setMyCards,jwt])

    useEffect(() => {
        getMyCards();
    } , [getMyCards])


    return {
        myCards,
    }
}