import { Relationships } from './relationships/relationships';
import { Price } from './price/price';
import { ProductMeta } from './meta/meta';

export interface Product {
    type: 'product';
    status: string;
    slug: string;
    sku: string;
    relationships: Relationships;
    price: Array<Price>;
    name: string;
    meta: ProductMeta;
    manage_stock: boolean;
    id: string;
    description: string;
    commodity_type: string;
}
