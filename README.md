# Atividade Única - React Native II

Professor: Cláudio Aparecido de Oliveira Matos
10 pontos

Aluno: Marcelo Amarante Ferreira Gomes (2373171024)

## Data de entrega: 13 de out.

## Enunciado

Nosso primeiro aplicativo oferece uma solução para Pedidos Online.
Para começar a utilizar, o usuário deverá realizar um cadastro inicial. Depois de cadastrado, ele poderá retornar à tela de Login e entrar usando o nome de usuário e senha que escolheu.
Ao entrar no aplicativo, o usuário será direcionado automaticamente para a tela principal, ou Home. Esta página deverá estar localizada no Bottom Navigator, conforme discutido em aula. A tela Home apresenta uma lista de produtos fornecidos por uma API Rest. Para cada produto, o aplicativo exibe uma imagem, o nome, a unidade de medida e o preço. Também são fornecidos botões para adicionar ou remover produtos do carrinho. Ao adicionar ou retirar produtos, o valor total e o Badge no Carrinho de Compras deverão ser atualizados.
Clicando em um produto específico, o usuário é levado a uma tela detalhada, onde poderá visualizar a imagem, nome, categoria, uma descrição e o preço por unidade. Após selecionar todos os produtos desejados e clicar no ícone do carrinho, o usuário será redirecionado para a tela de Checkout. Nessa tela, ele visualizará todos os itens escolhidos e o valor total da compra. Finalmente, ao optar por concluir a compra, o pedido deverá ser enviado diretamente para a API Rest.


Estou adicionando algumas imagens como referência, mas fiquem a vontade para usar a criatividade!

A Collection do Postman para testarem a API também está em anexo.

Infos úteis:
baseURL: https://master--relaxed-fenglisu-464c83.netlify.app/.netlify/functions

Login:
endpoint: /login-user
method: POST
payload:

{
"email": "algo@email.com",
"password": "suasenha"
}

Cadastro:
endpoint: /create-user
METHOD: POST
payload:

{
"name": "Seu nome",
"email": "algo@email.com",
"password": "suasenha"
}

Listagem de produtos:
endpoint: /read-products
METHOD: GET


Enviar pedido:
endpoint: /create-order
METHOD: POST
payload - Ex:

{
   "customer":{
      "_id":"123445",
      "name":"Claudio"
   },
   "items":[
      {
         "_id":"64da7728fb8b9b284f6e9c91",
         "quantity":1,
         "total":1.99,
         "imageUrl":"https://villalvafrutas.com.br/wp-content/uploads/2017/08/155.6.546.444994.jpg&quot;,
         "name":"Laranja",
         "price":1.99,
         "unit":"KG"
      },
      {
         "_id":"64da7772fb8b9b284f6e9c93",
         "quantity":1,
         "total":4,
         "imageUrl":"https://kinghorse.com.br/wp-content/uploads/2018/11/plantacao-de-morango.jpg&quot;,
         "name":"Morango",
         "price":4,
         "unit":"KG"
      },
      {
         "_id":"64da7a94fb8b9b284f6e9c97",
         "quantity":1,
         "total":7.99,
         "imageUrl":"https://www.soflor.com.br/wp-content/uploads/2014/08/pimentao-vermelho-50-sementes-4377-e1496690749652.jpg&quot;,
         "name":"Pimentão vermelho",
         "price":7.99,
         "unit":"KG"
      },
      {
         "_id":"64da78cffb8b9b284f6e9c95",
         "quantity":1,
         "total":6.89,
         "imageUrl":"https://static.itdg.com.br/images/auto-auto/5391eab33af911d9bad8e95a8b3a57f1/shutterstock-290834552.jpg&quot;,
         "name":"Maça",
         "price":6.89,
         "unit":"KG"
      }
   ]
}

# Texto do README.md criado pelo comando
## npx react-native init

Repare que o comando completo é ```npx react-native init --npm```, já que, quando se tem o ```yarn``` instalado, o ```npx``` sem a opção ```--npm``` vai usar o ```npm``` apenas para instalar o ```react-native```, e tentar usar o ```yarn``` para instalar todo o restante do projeto. E isso, em geral, não dá bons resultados! Acrescentando a opção ```--npm```, evitamos esse problema.

## Segue o texto:

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
