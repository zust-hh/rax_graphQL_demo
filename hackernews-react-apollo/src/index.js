import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
// 1
import { ApolloProvider } from 'react-apollo'
import ApolloClient from "apollo-boost";

// 2
const client = new ApolloClient({
    uri: "https://eu1.prisma.sh/zust_hh-4263a9/Hackernews/dev"
})

// 3
ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();