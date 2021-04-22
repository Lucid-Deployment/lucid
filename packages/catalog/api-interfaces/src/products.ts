import type { IGetAllConfig } from "./common"

type ProductAvailability = "available" | "disabled" | "preorder"
interface Product {
  id: string
  name: string
  sku: string
  isVisible?: boolean
  price?: number
  dateModified: string
  availability?: ProductAvailability
}

type GetAllProductsData = Product[]

type SortableProductFields =
  | "id"
  | "name"
  | "sku"
  | "price"
  | "dateModified"
  | "isVisible"
interface GetAllProductsRequest extends IGetAllConfig, Partial<Product> {
  idIn?: Product["id"][]
  idNotIn?: Product["id"][]
  sort?: SortableProductFields
}

export { GetAllProductsData, GetAllProductsRequest }
