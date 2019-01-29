import React from 'react';
const Post = (props) => (
    <div className="card" style={{'width': '100%', 'marginTop': '10px'}}>
        <div className="card-body">
        	<div className="float-right">
	        	<a href="#">up</a>
	        	<h5 className="card-text pull-right">{props.post.votes} votes</h5>
	        	<a href="#">down</a>
	        </div>
	        <h5 className="card-title">{props.post.title}</h5>
	        <h6 className="card-subtitle mb-2 text-muted">by {props.post.author.firstName}</h6>
        </div>
    </div>
);

export default Post;