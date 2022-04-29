import { useCallback, useContext } from "react";
import { useLocation } from "wouter";
import ProductContext from "../../Contexts/products_context";
import Context from "../../Contexts/user_context";
import { PaymentCardModel } from "../../Models/payment_card_model";
import { ProductModel } from "../../Models/product_model";
import postOrder from "../../Services/post_order";

export default function useNewOrder () {
    const { productBuy, cardPaymentSelect }: {productBuy: ProductModel, cardPaymentSelect: PaymentCardModel} = useContext(ProductContext);
    const { jwt } = useContext(Context);
    const [, navigate] = useLocation();
    
    
    const newOrder = useCallback( async ({total}: {total: string}) => {
       const newOrder = {
            "product_id": productBuy.id!,
            "delivery_type": 'Entrega en persona',
            "addres_id": 'Direccion 12',
            "method_pay": "card",
            "description":
                `"Compra de ${productBuy.titleProduct} por ${productBuy.price} MXN"`,
            "device_session_id": 'info.androidId',
            "payment_id": cardPaymentSelect!.id,
            "status": "waiting",
            "state": "initial",
            "amount": total,
          };

          const resolve = await postOrder({token: jwt, prod: productBuy, card: cardPaymentSelect, total: total});
          console.log(resolve)
          // navigate('/order');
    }, [cardPaymentSelect, jwt])



    return {
        newOrder,
        productBuy,
    }
}