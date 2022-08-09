import React, {useState, useEffect} from 'react';
import { Route, Link } from 'react-router-dom';


function BlogBox({blog}){
    const{id, title, body, date, name, comments }= blog;

    return(
        <div class="card mb-4">
                    <div class="card-body">
                    <Link to={`/viewblog/${id}`} >
                    <h2 className="card-title">{title}</h2>
                    </Link>
                    <p class="card-text">{body}</p>
                    <div className="md-3">
                        <small>{comments.length} comment(s)</small>
                    </div>
                    <Link to={`/viewblog/${id}`} >
                    <button className="btn btn-primary">Read More &rarr;</button>
                    </Link>
                    </div>
                    <div class="card-footer text-muted">
                        Posted on {date} by
                        <br/>
                        {name}
                    </div>
                </div>
    );
}
export default BlogBox;