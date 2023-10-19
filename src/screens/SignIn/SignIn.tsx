// COMPONENTS
import {Header} from '@components/Header/Header';

// NAVIGATION
import {useNavigation} from '@react-navigation/native';

// STYLES
import * as Style from './SignIn.styles';
import {ButtonComponent} from '@components/Button/Button';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {usePostSignin} from '@services/Auth/PostSignIn';
import {useEffect, useState} from 'react';

function SignIn() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const background = require('@assets/images/SignInBackground.jpeg');
  const navigation = useNavigation();
  const postSignIn = usePostSignin({email, password});

  const payload = {
    email,
    password,
  };

  const handleSignIn = (): void => {
    try {
      postSignIn.mutate({payload});
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  useEffect(() => {
    if (postSignIn.isSuccess) {
      Alert.alert('Login realizado com sucesso!');
      navigation.navigate('HomeTabs');
    }
    if (postSignIn.isError) {
      Alert.alert('Erro ao realizar login!');
    }
  }, [postSignIn.isSuccess, postSignIn.isError]);

  return (
    <KeyboardAvoidingView behavior="height">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Style.BackgroundContainer>
            <Style.Background source={background} />
            <Style.HeaderContainer>
              <Header title="Entre. A casa é sua!" color="#000" />
            </Style.HeaderContainer>
          </Style.BackgroundContainer>
          <Style.Content>
            <Style.Title>Faça seu Login</Style.Title>
            <Style.Description>
              Entre em sua conta e comece a comprar.
            </Style.Description>
            <Style.InputContainer>
              <Style.Input
                placeholder="e-mail"
                placeholderTextColor={'#000'}
                autoCapitalize="none"
                onChangeText={e => setEmail(e)}
                value={email}
              />
              <Style.Input
                placeholder="senha"
                placeholderTextColor={'#000'}
                autoCapitalize="none"
                secureTextEntry
                onChangeText={p => setPassword(p)}
                value={password}
              />
              <ButtonComponent
                title="Entrar"
                onPress={(): void => handleSignIn()}
              />
            </Style.InputContainer>

            <Style.Footer>
              <Style.FooterText>Não tem uma conta?</Style.FooterText>
              <Style.FooterLinkContainer>
                <Style.FooterLink
                  onPress={(): void => navigation.navigate('SignUp')}>
                  Cadastre-se
                </Style.FooterLink>
              </Style.FooterLinkContainer>
            </Style.Footer>
          </Style.Content>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export {SignIn};
