import { ProductModel } from "./product_model";

export interface UserModel {
    id: string;
    name: string;
    email: string;
    photoURL?: string;
    role?: string;
    buys?: number;
    sales?: number;
    follows?: number;
    followers?: number;
    prooducts?: ProductModel[];
    createdAt: number;
    updatedAt: number;

}