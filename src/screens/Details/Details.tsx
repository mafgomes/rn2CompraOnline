import React from 'react';
import {View} from 'react-native';

// ASSETS
import Minus from '@assets/icons/minus.svg';
import Plus from '@assets/icons/plus.svg';

// COMPONENTS
import {ScrollView, Text} from 'react-native';

// STYLES
import * as Style from './Details.styles';
import * as AppTheme from '@styles/theme';
import {ItemProps} from '@shared/types/itemTypes';
import {Header} from '@components/Header/Header';
import {ButtonComponent} from '@components/Button/Button';
import {cartQuantity, cartItems} from '@atom/store';
import {useAtom} from 'jotai';
import {useIsFocused, useNavigation} from '@react-navigation/native';

function Details(props: any) {
  const product = props.route.params.item as ItemProps;
  const [quantity, setQuantity] = useAtom(cartQuantity);
  const [, setItems] = useAtom(cartItems);
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  React.useEffect(() => {
    if (!isFocused) {
      setQuantity(0);
    }
  }, [isFocused]);

  const handleAddItem = (): void => {
    setQuantity(quantity + 1);
  };

  const handleRemoveItem = (): void => {
    setQuantity(quantity - 1);
  };

  const handleAddToCart = (): void => {
    navigation.goBack();
    setItems(prevItems => {
      const itemExistenteIndex = prevItems.findIndex(
        item => item.name === product.name,
      );

      if (itemExistenteIndex !== -1) {
        // Se o item já existe no carrinho, crie uma cópia do array anterior
        const novoCarrinho = [...prevItems];

        // Atualize a quantidade do item existente
        novoCarrinho[itemExistenteIndex].quantity! += quantity!;

        return novoCarrinho;
      } else {
        // Caso contrário, adicione um novo item ao carrinho
        const newProduct = {...product, quantity: quantity};
        return [...prevItems, newProduct];
      }
    });
  };

  return (
    <ScrollView>
      <Header title={`Detalhes do produto ${product.name}`} color="#000" />
      <Style.Container>
        <Style.BackgroundImage source={{uri: product.imageUrl}} />
        <Style.Content>
          <Style.ProductName>{product.name}</Style.ProductName>
          <View style={{flexDirection: 'row'}}>
            <Style.ProductUnits>{product.unit}</Style.ProductUnits>
            <Style.Pricing>R$ {product.price}</Style.Pricing>
          </View>
          <Style.ProductDescription>{product.description}</Style.ProductDescription>
          <Style.AddToCart>
            <Style.AddToCartText>Quantidade</Style.AddToCartText>
            <Style.ManageQuantity>
              <Style.Remove onPress={(): void => handleRemoveItem()}>
                <Minus width={24} height={24} color={AppTheme.default.COLORS.app_buttons} />
              </Style.Remove>
              <Style.QuantityText>{quantity || 0}</Style.QuantityText>
              <Style.Add onPress={(): void => handleAddItem()}>
                <Plus width={24} height={24} color={AppTheme.default.COLORS.app_buttons} />
              </Style.Add>
            </Style.ManageQuantity>
          </Style.AddToCart>
          <ButtonComponent
            title="Adicionar ao carrinho"
            onPress={(): void => handleAddToCart()}
          />
        </Style.Content>
      </Style.Container>
    </ScrollView>
  );
}

export {Details};
