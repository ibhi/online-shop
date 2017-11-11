import { PriceWithTax } from './price-with-tax';
import { PriceWithoutTax } from './price-without-tax';

export interface DisplayPrice {
    with_tax: PriceWithTax;
    without_tax: PriceWithoutTax
}
