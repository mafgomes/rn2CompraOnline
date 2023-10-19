// COMPONENTS
import {Header} from '@components/Header/Header';

// NAVIGATION
import {useNavigation} from '@react-navigation/native';

// STYLES
import * as Style from './SignUp.styles';
import {ButtonComponent} from '@components/Button/Button';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {usePostSignUp} from '@services/Auth/PostSignUp';
import {useEffect, useState} from 'react';

function SignUp() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');

  const background = require('@assets/images/SignUpBackground.png');
  const navigation = useNavigation();
  const postSignUp = usePostSignUp({name, email, password});

  const payload = {
    name,
    email,
    password,
  };

  const handleSignIn = (): void => {
    try {
      postSignUp.mutate({payload});
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  useEffect(() => {
    if (postSignUp.isSuccess) {
      Alert.alert('Conta criada com sucesso! Use seus dados para fazer login.');
      navigation.navigate('SignIn');
    }
    if (postSignUp.isError) {
      Alert.alert('Erro ao realizar criação da conta!');
    }
  }, [postSignUp.isSuccess, postSignUp.isError]);

  return (
    <KeyboardAvoidingView behavior="height">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Style.BackgroundContainer>
            <Style.Background source={background} />
            <Style.HeaderContainer>
              <Header title="Cadastro" color="#fff" />
            </Style.HeaderContainer>
          </Style.BackgroundContainer>
          <Style.Content>
            <Style.Title>Cadastre-se</Style.Title>
            <Style.Description>
              Digite os dados pedidos e crie sua conta
            </Style.Description>
            <Style.InputContainer>
              <Style.Input
                placeholder="Nome"
                placeholderTextColor={'#000'}
                autoCapitalize="none"
                onChangeText={e => setName(e)}
                value={name}
              />
              <Style.Input
                placeholder="E-mail"
                placeholderTextColor={'#000'}
                autoCapitalize="none"
                onChangeText={e => setEmail(e)}
                value={email}
              />
              <Style.Input
                placeholder="Senha"
                placeholderTextColor={'#000'}
                autoCapitalize="none"
                secureTextEntry
                onChangeText={p => setPassword(p)}
                value={password}
              />
              <ButtonComponent
                title="Cadastrar"
                onPress={(): void => handleSignIn()}
              />
            </Style.InputContainer>
          </Style.Content>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export {SignUp};
