import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

import Author from './Author';

const Authors = () => (
  <Query
    query={gql`
      {
        authors {
          id
          firstName
          lastName
          posts {
            title
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return data.authors.map((currentAuthor) => (
          <Author key={currentAuthor.id} author={currentAuthor} />
      ));
    }}
  </Query>
);
export default Authors;