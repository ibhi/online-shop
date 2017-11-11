import { Meta } from './meta/meta';
import { Relationships } from './relationships/relationships';

export interface Category {
    id: string;
    type: string;
    name?: string;
    slug?: string;
    description?: string;
    status?: string;
    meta?: Meta;
    relationships?: Relationships;
}