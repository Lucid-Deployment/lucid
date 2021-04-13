import { useQuery } from 'react-query';
import type {
  GetAllProductsRequest,
  IGetAllResponse,
  GetAllProductsData,
} from '@lucid/catalog-api-interfaces';
import { client } from '@lucid/util-data-access';
import { UseQueryResult } from 'react-query/types/react/types';

type GetAllProductsOptions = GetAllProductsRequest;

// TODO: Think about error responses
function useGetAllProducts(
  { ...requestData }: GetAllProductsOptions,
  apiUrl: string,
) {
  return useQuery<IGetAllResponse<GetAllProductsData>, unknown>(
    ['products', requestData],
    () =>
      client(`${apiUrl}/catalog/products`, {
        data: requestData,
      }) as Promise<IGetAllResponse<GetAllProductsData>>,
  ) as UseQueryResult<IGetAllResponse<GetAllProductsData>>;
}

export { GetAllProductsOptions, useGetAllProducts };
