// JOTAI
import {useAtom} from 'jotai';

// STYLES
import * as Style from './CartComponent.styles';

// TYPES
import {CartComponentProps} from './CartComponent.types';
import {cartTotalQuantity} from '@atom/store';

function CartComponent({icon}: CartComponentProps) {
  const [totalQuantity] = useAtom(cartTotalQuantity);
  return (
    <Style.Container>
      {icon}
      <Style.Text>{totalQuantity}</Style.Text>
    </Style.Container>
  );
}

export {CartComponent};
