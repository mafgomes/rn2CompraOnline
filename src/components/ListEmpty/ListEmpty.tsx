// STYLES
import * as S from './ListEmpty.styles';

// TYPES
import {ListEmptyProps} from './ListEmpty.types';

export function ListEmpty({message}: ListEmptyProps) {
  return (
    <S.Container>
      <S.Message>{message}</S.Message>
    </S.Container>
  );
}
