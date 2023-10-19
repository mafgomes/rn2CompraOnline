// ASSETS
import Arrow from '@assets/icons/backArrow.svg';

// NAVIGATION
import {useNavigation} from '@react-navigation/native';

// STYLES
import * as S from './Header.styles';

// TYPES
import {HeaderProps} from '@shared/types/headerTypes';
import { Text } from 'react-native-svg';

function Header({title, color}: HeaderProps) {
  const navigation = useNavigation();
  return (
    <S.Container>
      <S.HeaderContainer>
        <S.HeaderContent>
          {(title == 'Boas Vindas') ? <S.VoidContainer /> :
                <S.BackContainer onPress={(): void => navigation.goBack()}>
                  <Arrow width={16} height={16} color={color || '#FFF'} />
                </S.BackContainer>
          }
          <S.TextHeader>{title}</S.TextHeader>
          <S.VoidContainer />
        </S.HeaderContent>
      </S.HeaderContainer>
    </S.Container>
  );
}

export {Header};
