import styled from 'styled-components/native';

export const ButtonContainer = styled.View`
  gap: 12px;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 60px;
  background: #1a1;
  color: white;
  width: 100%;
  border-radius: 10px;
  opacity: 1;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
`;
