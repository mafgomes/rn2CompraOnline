// ASSETS
import User from '@assets/icons/user.svg';

// STYLES
import * as Style from './Welcome.styles';

// NAVIGATION
import {useNavigation} from '@react-navigation/native';

// COMPONENTS
import {Header} from '@components/Header/Header';
import {ButtonComponent} from '@components/Button/Button';

function Welcome() {
  const background = require('@assets/images/WelcomeBackground.jpeg');
  const navigation = useNavigation();

  return (
    <>
      <Style.BackgroundContainer>
        <Style.Background source={background} />
        <Style.HeaderContainer>
          <Header title="Boas Vindas" />
        </Style.HeaderContainer>
      </Style.BackgroundContainer>
      <Style.Content>
        <Style.Title>Compra Online</Style.Title>
        <Style.Description>
          Faça suas compras de forma simples e prática.
        </Style.Description>
        <ButtonComponent
          title="Entrar"
          icon={<User width={26} height={26} color="white" />}
          onPress={(): void => navigation.navigate('SignIn')}
        />
        <Style.Footer>
          <Style.FooterText>Não tem uma conta?</Style.FooterText>
          <Style.FooterLinkContainer>
            <Style.FooterLink onPress={(): void => navigation.navigate('SignUp')}>
              Cadastre-se
            </Style.FooterLink>
          </Style.FooterLinkContainer>
        </Style.Footer>
      </Style.Content>
    </>
  );
}

export {Welcome};
