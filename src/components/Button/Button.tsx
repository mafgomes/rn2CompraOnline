// STYLES
import * as S from './Button.styles';

// TYPES
import {ButtonProps} from '@shared/types/buttonTypes';

function ButtonComponent({title, icon, onPress}: ButtonProps) {
  return (
    <S.ButtonContainer>
      <S.Button onPress={(): void => onPress()}>
        {icon}
        <S.ButtonText>{title}</S.ButtonText>
      </S.Button>
    </S.ButtonContainer>
  );
}

export {ButtonComponent};
