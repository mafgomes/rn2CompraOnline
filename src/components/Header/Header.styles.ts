import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  align-items: center;
  justify-content: center;
`;

export const HeaderContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  padding-left: 12px;
  padding-right: 12px;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const VoidContainer = styled.View`
  width: 48px;
`;

export const BackContainer = styled.TouchableOpacity`
  padding: 8px;
`;

export const TextHeader = styled.Text`
  font-size: 20px;
  margin-left: 12px;
  color: #000;
  background-color: #fafafa1a;
  font-weight: 700;
`;
