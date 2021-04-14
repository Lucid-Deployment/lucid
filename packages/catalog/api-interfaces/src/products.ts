import { IGetAllConfig } from './common';

interface Product {
  id: string;
  name: string;
  sku: string;
}

type GetAllProductsData = Product[];

type SortableProductFields = 'id' | 'name' | 'sku';
interface GetAllProductsRequest extends IGetAllConfig {
  idIn?: number[];
  idNotIn?: number[];
  name?: string;
  sku?: string;
  sort?: SortableProductFields;
}

export { GetAllProductsData, GetAllProductsRequest };
