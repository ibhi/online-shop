import { Categories } from './categories/categories';
import { Collections } from './collections/collections';
import { MainImage } from './main-image/main-image';

export interface Relationships {
    categories: Categories;
    collections: Collections;
    main_image: MainImage;
}
