import React from 'react';
const Author = (props) => (
    <div className="card" style={{'width': '100%', 'marginTop': '10px'}}>
        <div className="card-body">
	        <div className="float-right">
	        	<h5 className="card-text pull-right">{props.author.posts.length} post(s)</h5>
	        </div>
	        <h6 className="card-subtitle mb-2 text-muted">{props.author.firstName}</h6>
	        <h6 className="card-subtitle mb-2 text-muted">{props.author.lastName}</h6>
	        <a href="#" className="card-link">Go to Post ...</a>
        </div>
    </div>
);
export default Author;