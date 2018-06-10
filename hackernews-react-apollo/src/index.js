import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider} from 'react-apollo"
import {ApolloClient} from 'apollo-client'
import {HttpLink} from 'apollo-link-http'
import{ InMemoryCache} from 'apollo-cache-inmemory'

const httpLink =new httpLink({uri:'http://localhost:4000'})
const client =new ApolloClient({
link:httpLink,
cache:new InMemoyCache()
})
ReactDOM..render(
<AppoloProvider client={client}>
<App />
</AppoloProvider>
,document.getElementById('root')
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
