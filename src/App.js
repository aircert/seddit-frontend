import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { HashRouter, Switch, Route, Link} from 'react-router-dom'

import Posts from './Posts'
import AddPost from './AddPost'
import Authors from './Authors'

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const App = () => (
  <HashRouter >
    <ApolloProvider client={client}>
      <div className="container">
        <nav className="navbar navbar-dark bg-primary">
          <a className="navbar-brand" href="#">Seddit</a>
          <Link to={"/authors"}> 
            <span className="navbar-brand">Authors</span>
          </Link>
          <Link to={"/create-post"}> 
            <span className="navbar-brand">Create Post</span>
          </Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route exact path="/authors" component={Authors} />
          <Route exact path="/create-post" component={AddPost} />
        </Switch>
      </div>
    </ApolloProvider>
  </HashRouter> 
);

export default App;
