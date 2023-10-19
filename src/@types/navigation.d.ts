import {ItemProps} from '@shared/types/itemTypes';
import { User } from '@shared/types/userTypes';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Welcome: undefined;
      SignIn: undefined;
      SignUp: undefined;
      HomeTabs: undefined;
      Home: undefined;
      Shopping: undefined;
      Details: {item: ItemProps};
    }
  }
}
