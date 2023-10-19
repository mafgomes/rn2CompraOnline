import styled from 'styled-components/native';

export const Container = styled.ScrollView``;

export const BackgroundContainer = styled.View`
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const HeaderContainer = styled.View`
  position: absolute;
  top: 10px;
`;

export const Content = styled.View`
  position: absolute;
  bottom: 0;
  justify-content: center;
  background: #f4f5f9;
  padding: 32px 51px 40px;
  border-radius: 20px 20px 0 0;
`;

export const Title = styled.Text`
  font-family: 'Poppins';
  color: #000;
  font-family: Poppins;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 16px;
`;

export const Description = styled.Text`
  color: #868889;
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 28px;
`;

export const InputContainer = styled.View`
  gap: 12px;
`;

export const Input = styled.TextInput`
  height: 60px;
  width: 100%;
  padding: 8px;
  background-color: #bbb;
  margin-bottom: 8px;
  color: #000;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const FooterText = styled.Text`
  color: #868889;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
`;

export const FooterLinkContainer = styled.TouchableOpacity``;
export const FooterLink = styled.Text`
  color: #1a1;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  margin-left: 8px;
`;
