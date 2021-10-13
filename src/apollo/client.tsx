import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
// import { getMainDefinition } from '@apollo/client/utilities'
// import { WebSocketLink } from '@apollo/client/link/ws'

const httpLink = new HttpLink({
  uri: 'https://api.thegraph.com/subgraphs/name/sablierhq/sablier'
})

// the graph rate limited websocket link so commented out for now

// const wsLink = new WebSocketLink({
//   uri: 'ws://api.thegraph.com/subgraphs/name/sablierhq/sablier',
//   options: {
//     reconnect: true
//   }
// })

// /**
//  * @description A function that's called for each operation to execute and split between websocket and https
//  * @param left The Link to use for an operation if the function returns a "truthy" value
//  * @param right The Link to use for an operation if the function returns a "falsy" value
//  */
// const splitLink = split(
//   ({ query }) => {
//     const definition = getMainDefinition(query)
//     return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
//   },
//   wsLink,
//   httpLink
// )

export const client = new ApolloClient({
  link: httpLink, //splitLink,
  cache: new InMemoryCache()
})
