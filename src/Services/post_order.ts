import { PaymentCardModel } from "../Models/payment_card_model";
import { ProductModel } from "../Models/product_model";
import { API_URL } from "./settings";

export  default function postOrder ({token, prod, card, total}
     : {token: string, prod: ProductModel, card:PaymentCardModel, total:string}) {

    return fetch(`${API_URL}/order`, {
        method: 'POST',
        body: JSON.stringify({
            "product_id": prod.id!,
            "delivery_type": 'Entrega en persona',
            "addres_id": 'Direccion 12',
            "method_pay": "card",
            "description":
                `"Compra de ${prod.titleProduct} por ${prod.price} MXN"`,
            "device_session_id": 'info.androidId',
            "payment_id": card!.id,
            "status": "waiting",
            "state": "initial",
            "amount": total,
          }),
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    }).then(res => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
    })
}