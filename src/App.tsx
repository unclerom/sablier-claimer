import * as React from 'react'
import { ApolloProvider } from '@apollo/client'
import { Alert, AlertDescription, AlertIcon, ChakraProvider, theme } from '@chakra-ui/react'
import { client } from './apollo/client'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { WalletProvider } from 'components/WalletProvider'
import { Header } from 'components/Header'
import { StreamPage } from 'pages/Stream'

export const App = (): JSX.Element => (
  <ApolloProvider client={client}>
    <ChakraProvider theme={theme} resetCSS>
      <WalletProvider>
        <Alert status='info'>
          <AlertIcon />
          <AlertDescription>
            This dapp was created to allow additional wallets to claim from Sablier streams. This
            dapp is not built or maintained by Sablier.{' '}
            <b>No warranty or support of any kind is provided.</b>
          </AlertDescription>
        </Alert>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/stream/:id' component={StreamPage} />
          </Switch>
        </BrowserRouter>
      </WalletProvider>
    </ChakraProvider>
  </ApolloProvider>
)
