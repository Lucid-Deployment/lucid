export interface IGetAllConfig {
  sort?: string
  page?: number
  limit?: number
}

// Data about the response, including pagination and collection totals.
export interface IPaginationResponse {
  // Total number of items in the collection response.
  count: number
  // The page you are currently on within the collection.
  current_page: number
  // Pagination links for the previous and next parts of the whole collection.
  links: {
    // Link to the current page returned in the response.
    current: string
    // Link to the next page returned in the response.
    next: string
    // Link to the previous page returned in the response.
    previous: string
  }
  // The amount of items returned in the collection per page, controlled by the limit parameter.
  per_page: number
  // Total number of items in the result set.
  total: number
  // The total number of pages in the collection.
  total_pages: number
}

export interface IGetAllResponse<TDataItem> {
  data: TDataItem[]
  meta: {
    pagination: IPaginationResponse
  }
}

export interface Errors {
  message: string
}
