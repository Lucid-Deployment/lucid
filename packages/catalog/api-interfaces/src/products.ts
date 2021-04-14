import { IGetAllConfig } from './common';

interface Product {
  id: string;
  name: string;
  sku: string;
}

type GetAllProductsData = Product[];

type SortableProductFields = 'id' | 'name' | 'sku';
interface GetAllProductsRequest extends IGetAllConfig, Partial<Product> {
  idIn?: Product['id'][];
  idNotIn?: Product['id'][];
  sort?: SortableProductFields;
}

export { GetAllProductsData, GetAllProductsRequest };
