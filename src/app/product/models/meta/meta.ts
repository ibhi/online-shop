import { DisplayPrice } from './display-price/display-price';
import { Stock } from './stock/stock';
import { Timestamps } from '../../../shared/models/timestamps/timestamps';

export interface ProductMeta {
    display_price: DisplayPrice;
    stock: Stock;
    timestamps: Timestamps;
}
