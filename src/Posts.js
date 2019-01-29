import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

import Post from './Post';

const Posts = () => (
  <Query
    query={gql`
      {
        posts {
          id
          title
          author {
            firstName
          }
          votes
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return data.posts.map((currentPost) => (
          <Post key={currentPost.id} post={currentPost} />
      ));
    }}
  </Query>
);
export default Posts;