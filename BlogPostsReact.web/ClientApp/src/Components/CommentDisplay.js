import {Route, Link} from 'react-router-dom';
import React, {useState, useEffect} from 'react';


function CommentDisplay({comment}){
    const {commentBody, name, date, blogPostId, id}= comment;
    return(
        <div className="media-body">
            <h5 className="mt-0">
                {name}
            </h5>
            <small> Posted on {date}</small>
            <br/>
            <h5 className="mt-0">
                {commentBody}
            </h5>
        </div>
    );
}
export default CommentDisplay;