import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo'
import { BrowserRouter } from 'react-router-dom'

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj8eg0fte1akq0144pdpmdk7e'
})

const client = new ApolloClient({
  networkInterface
})

ReactDOM.render(
  // wrap App with BrowserRouter so child components of App will get access to 
  // the routing functionality
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
  , document.getElementById('root')
)
registerServiceWorker();
