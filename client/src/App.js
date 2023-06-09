import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import PlayerProfile from './pages/playerProfile'

const httpLink = createHttpLink({
  uri: '/graphql'
})

const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/" component={PlayerProfile} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
