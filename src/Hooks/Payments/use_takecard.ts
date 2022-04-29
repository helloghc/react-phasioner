import { useCallback, useContext } from "react";
import ProductContext from "../../Contexts/products_context";
import { PaymentCardModel } from "../../Models/payment_card_model";

export default function useTakeCard () {
    const {  setCardPayment } = useContext(ProductContext);

    const takeMyCards = useCallback( async ({card}:{card:PaymentCardModel}) => {
        setCardPayment(card);
    }, [setCardPayment])


    return {
        takeMyCards,
    }
}