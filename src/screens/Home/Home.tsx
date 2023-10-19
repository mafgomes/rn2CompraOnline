import React, {useEffect, useState} from 'react';
import {View, FlatListProps} from 'react-native';

// NAVIGATION
import {useIsFocused, useNavigation} from '@react-navigation/native';

// SERVICES
import {useGetProducts} from '@services/Products/GetProducts';

// STYLES
import * as Style from './Home.styles';
import {ItemProps} from '@shared/types/itemTypes';
import {ListEmpty} from '@components/ListEmpty/ListEmpty';
import {Text} from 'react-native-svg';

// TODO: alterar a API, pra não ter que fazer 2 chamadas
// só pra obter o nome do cliente:
// function Home(props: any) {
  // const user = props.route.params.item as User;
  // const [quantity, setQuantity] = useAtom(cartQuantity);

function Home(props: any) {

  const navigation = useNavigation();
  const getProducts = useGetProducts();
  const isFocused = useIsFocused();
  const [items, setItems] = useState<ItemProps[]>([]);

  useEffect(() => {
    if (!isFocused) {
      setItems([]);
      getProducts.remove();
    }
  }, [isFocused]);

  useEffect(() => {
    if (getProducts.data) {
      setItems(getProducts.data);
    }
  }, [getProducts.data]);

  return (
    <Style.Container edges={['top']}>
      <Style.Header>
        <Style.Button>
          <Style.AvatarContainer>
            <Style.Avatar source={{uri: 'https://thispersondoesnotexist.com/'}} />
          </Style.AvatarContainer>
        </Style.Button>
        <Style.User>
          <Style.Greeting>Olá, [Fulano]!</Style.Greeting>
          <Style.Message>(Faltou uma busca de nome de usuário</Style.Message>
          <Style.Message>por ID ou por e-mail na API...)</Style.Message>
        </Style.User>
      </Style.Header>

      <Style.Title>Confira:</Style.Title>

      <Style.FlatList
        data={items as FlatListProps<ItemProps>['data']}
        keyExtractor={item => (item as ItemProps)._id}
        numColumns={2}
        renderItem={(itm) => {
          const item = itm.item as ItemProps;
          return (
            <Style.ProductContainer
              onPress={(): void => navigation.navigate('Details', {item})}>
              <Style.ProductImage
                source={{
                  uri: item.imageUrl,
                }}
            />
              <Style.ProductInfo>
                <Style.ProductName>{item.name}</Style.ProductName>
                <View style={{flexDirection: 'row'}}>
                  <Style.ProductUnits>{item.unit}</Style.ProductUnits>
                  <Style.ProductPrice>R$ {item.price}</Style.ProductPrice>
                </View>
              </Style.ProductInfo>
            </Style.ProductContainer>
          );
        }}
        ListEmptyComponent={() => {
          return getProducts.isFetching ? (
            <Text>Carregando...</Text>
          ) : (
            <ListEmpty message="Ainda não há produtos na loja! Por favor, volte mais tarde." />
          );
        }}
      />
    </Style.Container>
  );
}

export {Home};
