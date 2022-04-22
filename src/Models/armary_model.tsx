import { ProductModel } from "./product_model";
import { UserModel } from "./user_models";

export interface ArmaryModel {
    id: string;
    user: UserModel;
    products: ProductModel[];
}