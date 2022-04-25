import { ProductModel } from "./product_model";
import { UserModel } from "./user_models";

export interface DetailsProductModel {
    id?: string;
    productData?: ProductModel;
    userData?: UserModel;
}