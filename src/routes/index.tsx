import React from 'react';
// ASSETS
import HomeIcon from '@assets/icons/home.svg';
import ShoppingIcon from '@assets/icons/shopping.svg';

// NAVIGATION
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// COMPONENTS
import {CartComponent} from '@components/CartComponent/CartComponent';

// SCREENS
import {SignIn} from '@screens/SignIn/SignIn';
import {SignUp} from '@screens/SignUp/SignUp';
import {Welcome} from '@screens/Welcome/Welcome';
import {Home} from '@screens/Home/Home';
import {Shopping} from '@screens/Shopping/Shopping';
import {Details} from '@screens/Details/Details';

export function Routes() {
  const HomeTabs = () => (
    <Tab.Navigator
      backBehavior="history"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#1a1',
        tabBarInactiveTintColor: '#d2d2d2',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <HomeIcon width={30} height={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Shopping"
        component={Shopping}
        options={{
          tabBarIcon: () => (
            <CartComponent
              icon={<ShoppingIcon width={20} height={20} color="#fff" />}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={Details}
        options={{
          tabBarButton: () => null,
          tabBarStyle: {
            display: 'none',
          },
        }}
      />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
