import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  background-color: #f4f5f9;
  height: 100%;
  padding: 16px;
`;

export const Hero = styled.View`
  width: 100%;
  height: 200px;
  background-color: #f4f5f9;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;

export const HeroTitle = styled.Text`
  font-size: 25px;
  font-weight: 600;
  color: #000;
  margin: 16px 0;
`;

export const ButtonContainer = styled.View`
  margin-top: 16px;
`;

export const ProductContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  background-color: #adadad;
  padding: 16px;
`;

export const ProductImage = styled.Image`
  width: 100px;
  height: 100px;
`;

export const ProductInfo = styled.View`
  width: 60%;
`;

export const ProductName = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #000;
`;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #000;
`;

export const ProductQuantity = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #000;
`;

export const ProductQuantityContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductUnits = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #000;
`;

export const ProductTotal = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #000;
`;

export const TotalContainer = styled.View`
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
`;

export const TotalTitle = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #000;
`;

export const TotalValue = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #000;
`;
