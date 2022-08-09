import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {produce} from 'immer';
import {useParams, useHistory} from 'react-router-dom';
import {Route, Link} from 'react-router-dom';

const Admin=()=>{
    const [blog, setBlog]= useState({
        title:'',
        body:'',
        name:'Shana Basch'
    });
    const history= useHistory();

    const onTextChange= (e)=>{
        const newBlog= produce(blog, draft=>{
            draft[e.target.name]= e.target.value;
        });
        setBlog(newBlog);
    }

    const onSubmitClick = async()=>{
        await axios.post('/api/blog/addblog', blog);
        history.push('/');
    }

    const{title, body, date, name}=blog;
    return(
        <div className="container">
            <main role="main" className="pb-3">
                <div className="row">
                    <div className="col-md-8 offset-md-2 jumbotron">
                        <h3>Add New Post</h3>
                        <input type="text" onChange={onTextChange} className="form-control" placeholder="Title" value={title} name="title"/>
                        <br/>
                        <textarea value={body} onTextChange={onTextChange} name="body" placeholder="What's on your mind?"  className="form-control" rows="20"></textarea>
                        <br/>
                        <button className="btn btn-primary" onClick={onSubmitClick}>Submit Post!</button>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Admin;