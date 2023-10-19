import {useQuery, UseQueryResult} from 'react-query';
import {api} from '@services/api';
import {ItemProps} from '@shared/types/itemTypes';

const getProducts = async (): Promise<ItemProps> => {
  const {data} = await api.get('/read-products');
  return data;
};

export const useGetProducts = (): UseQueryResult<ItemProps[]> => {
  return useQuery(['GetProducts'], () => getProducts());
};
