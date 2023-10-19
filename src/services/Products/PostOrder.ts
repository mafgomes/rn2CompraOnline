import {useMutation, UseMutationResult} from 'react-query';
import {api} from '@services/api';

interface Customer {
  _id: string;
  name: string;
}

interface RequestProps {
  customer: Customer;
  items: any;
}

const postOrder = async ({customer, items}: RequestProps) => {
  const payload = {customer, items};
  const {data} = await api.post('/create-order', payload);
  return data.data;
};

export const usePostOrder = ({
  customer,
  items,
}: RequestProps): UseMutationResult<RequestProps> => {
  return useMutation(['PostOrder'], () => postOrder({customer, items}));
};
