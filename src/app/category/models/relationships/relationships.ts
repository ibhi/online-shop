import { Product } from "../../../product/models/product";

export interface Relationships {
    children?: { data?: { id: string, type: string }[] };
    parent?: { data?: { id: string, type: string }[] };
    products?: { data? : Product[] };
}
