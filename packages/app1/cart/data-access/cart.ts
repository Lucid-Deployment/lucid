import { useQuery } from "react-query"
import { ApiError, client } from "@lucid/util-data-access"
import { Error } from "../../util/api-interfaces"

interface CartInput {
  include: "redirect_urls"[]
  lineItems: any[]
}

type CartData = {
  id: string
  parent_id: string
  customer_id: number
  email: string
  discount_amount: number
  tax_included: boolean
  coupons: {
    code: string
    id: string
    coupon_type: "per_item_discount" | "percentage_discount"
    discounted_amount: number
  }
  line_items: {
    physical_items: {
      id: string
      variant_id: number
      product_id: number
      quantity: number
      list_price: number
      sale_price: number
    }
  }
}

const useCart = (input: CartInput, cartId: CartData["id"]) => {
  return useQuery<CartData, ApiError<Error>>(["cart", cartId], async () =>
    client(`/carts/${cartId}`, {
      data: input,
    }),
  )
}

export { useCart }
