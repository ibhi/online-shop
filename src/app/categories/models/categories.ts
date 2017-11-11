import { Product } from '../../product/models/product';
import { Category } from '../../product/models/relationships/categories/category';
import { Links } from '../../products/models/links/links';

export interface Categories {
    data: Category[];
    included?: Product[];
    links?: Links;
}
