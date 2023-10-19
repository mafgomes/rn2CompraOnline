import {useMutation, UseMutationResult} from 'react-query';
import {api} from '@services/api';

interface RequestProps {
  name: string;
  email: string;
  password: string;
}

const postSignUp = async ({name, email, password}: RequestProps) => {
  const payload = {name, email, password};
  const {data} = await api.post('/create-user', payload);
  return data.data;
};

export const usePostSignUp = ({
  name,
  email,
  password,
}: RequestProps): UseMutationResult<RequestProps> => {
  return useMutation(['PostSignUp'], () => postSignUp({name, email, password}));
};
