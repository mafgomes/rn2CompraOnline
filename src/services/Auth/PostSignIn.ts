import {useMutation, UseMutationResult} from 'react-query';
import {api} from '@services/api';

interface RequestProps {
  email: string;
  password: string;
}

const postSignIn = async ({email, password}: RequestProps) => {
  const payload = {email, password};
  const {data} = await api.post('/login-user', payload);
  return data.data;
};

export const usePostSignin = ({
  email,
  password,
}: RequestProps): UseMutationResult<RequestProps> => {
  return useMutation(['PostSignIn'], () => postSignIn({email, password}));
};
