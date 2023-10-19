import {ItemProps} from '@shared/types/itemTypes';
import {Platform} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #d9d9d9;
  padding-top: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
  padding: 0 40px;
`;

export const Title = styled.Text`
  color: #000;
  font-size: 25px;
  font-weight: 600;
  margin-left: 16px;
  padding-bottom: 16px;
`;

export const User = styled.View`
  flex-direction: column;
`;

export const Greeting = styled.Text`
  color: #000;
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 12px;
`;

export const Message = styled.Text`
  color: #868889;
  font-size: 16px;
  font-weight: 500;
`;

export const Button = styled.TouchableOpacity``;

export const AvatarContainer = styled.View`
  width: 49px;
  height: 49px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
`;

export const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;

export const ProductContainer = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 181px;
  background-color: #fff;
  padding: 32px 0;
  margin-bottom: 16px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
`;

export const ProductImage = styled.Image`
  width: 96px;
  height: 96px;
  border-radius: 10px;
`;

export const ProductInfo = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProductName = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: 600;
`;

export const ProductPrice = styled.Text`
  color: #1a1;
  font-size: 16px;
  font-weight: 500;
`;

export const ProductUnits = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: 500;
  margin-right: 8px;
`;

export const FlatList = styled.FlatList<ItemProps>`
  padding-left: 16px;
`;
