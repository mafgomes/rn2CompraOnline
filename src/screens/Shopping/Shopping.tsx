import React, {useEffect, useState} from 'react';

// COMPONENTS
import {Header} from '@components/Header/Header';
import {ButtonComponent} from '@components/Button/Button';

// ATOM
import {cartTotalQuantity, cartItems, cartTotal} from '@atom/store';
import {useAtom} from 'jotai';

// ICON
import ShoppingIcon from '@assets/icons/shopping.svg';

// STYLES
import * as Style from './Shopping.styles';
import {usePostOrder} from '@services/Products/PostOrder';
import {Alert, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

type Phase = 0 | 1 | 2;

function Shopping() {
  const [fase, setPhase] = useState<Phase>(0);
  const [totalQuantity] = useAtom(cartTotalQuantity);
  const [total] = useAtom(cartTotal);
  const [items, setItems] = useAtom(cartItems);
  const navigation = useNavigation();

  // TODO: O certo seria passar o ID do usuário logado aqui...
  const payload = {
    customer: {
      _id: '123456',
      name: 'Fulano de Tal',
    },
    items: items,
  };

  const postOrder = usePostOrder(payload);

  const handleOrder = (): void => {
    try {
      postOrder.mutate(payload);
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  useEffect(() => {
    if (postOrder.isSuccess) {
      setPhase(2);
      setItems([]);
    }
    if (postOrder.isError) {
      Alert.alert('Não pude registrar a compra!');
    }
  }, [postOrder.isSuccess, postOrder.isError]);

  const getButtonTitle = () => {
    switch (fase) {
      case 0:
        return 'Adicione itens ao carrinho';
      case 1:
        return 'Checkout';
      case 2:
        return 'Voltar para home';
      default:
        return 'Adicione itens ao carrinho';
    }
  };

  useEffect(() => {
    if (totalQuantity > 0) {
      setPhase(1);
    }
  }, [totalQuantity]);

  const renderHero = () => {
    if (totalQuantity === 0 && fase === 0) {
      return (
        <>
          <ShoppingIcon width={96} height={96} color="#1a1" />
          <Style.HeroTitle>Seu Carrinho esta vazio!</Style.HeroTitle>
        </>
      );
    }

    if (fase === 2) {
      return (
        <>
          <ShoppingIcon width={96} height={96} color="#1a1" />
          <Style.HeroTitle>Compra enviada com sucesso!</Style.HeroTitle>
        </>
      );
    }

    return <></>;
  };

  return (
    <ScrollView>
      <Style.Container>
        <Header title="Carrinho" color="#000" />
        <Style.Content>
          {fase === 1 ? (
            <>
              {items.map(item => (
                <Style.ProductContainer key={item._id}>
                  <Style.ProductImage
                    source={{
                      uri: item.imageUrl,
                    }}
                  />
                  <Style.ProductInfo>
                    <Style.ProductPrice>R$ {item.price}</Style.ProductPrice>
                    <Style.ProductName>{item.name}</Style.ProductName>
                    <Style.ProductUnits>{item.unit}</Style.ProductUnits>
                  </Style.ProductInfo>
                  <Style.ProductQuantityContainer>
                    <Style.ProductQuantity>{item.quantity}</Style.ProductQuantity>
                  </Style.ProductQuantityContainer>
                </Style.ProductContainer>
              ))}
              <Style.TotalContainer>
                <Style.TotalTitle>Total</Style.TotalTitle>
                <Style.TotalValue>R$ {total}</Style.TotalValue>
              </Style.TotalContainer>
            </>
          ) : (
            <Style.Hero>{renderHero()}</Style.Hero>
          )}
          <Style.ButtonContainer>
            <ButtonComponent
              title={getButtonTitle()}
              onPress={(): void => {
                if (fase === 0 || fase === 2) {
                  navigation.goBack();
                } else {
                  handleOrder();
                }
              }}
            />
          </Style.ButtonContainer>
        </Style.Content>
      </Style.Container>
    </ScrollView>
  );
}

export {Shopping};
