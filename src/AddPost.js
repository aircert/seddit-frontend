import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const POST_MUTATION = gql`
  mutation PostMutation($title: String!) {
    addPost(title: $title, authorId: 1) {
      id
      author {
        firstName
      }
    }
  }
`

class AddPost extends Component {
  state = {
    title: '',
    authorId: null
  }

  render() {
    const { title, authorId } = this.state
    if(authorId) {
      return (
        <div>
          <input
            className="text-field"
            value={title}
            onChange={e => this.setState({ title: e.target.value })}
            type="text"
            placeholder="A title for the post"
          />
          <Mutation mutation={POST_MUTATION} variables={{ title }} onCompleted={() => this.props.history.push('/')}>
            {postMutation => <button className="btn btn-primary" onClick={postMutation}>Submit</button>}
          </Mutation>
        </div>
      )
    } else {
      return (
        <div>
          <input
            className="text-field"
            value={authorId}
            onBlur={e => this.setState({ authorId: e.target.value })}
            type="text"
            placeholder="Author ID"
          />
          <button className="btn btn-primary">Submit</button>
        </div>
      )
    }
  }
}

export default AddPost;