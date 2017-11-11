import { Product }  from '../../product/models/product';
import { Links } from './links/links';
import { Meta } from './meta/meta';

export interface Products {
    data: Product[];
    links: Links;
    meta: Meta;
}
