import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {produce} from 'immer';
import {useParams, useHistory} from 'react-router-dom';
import {data} from 'jquery';
import CommentDisplay from '../Components/CommentDisplay';
import { compareAsc, format } from 'date-fns';

const ViewBlog=()=>{
    const [blog, setBlog]= useState({
        title:'',
        name:'',
        date:'',
        id:'',
        comments:[]
    });
    const [commentName, setName]= useState('');
    const[commentBody, setBody]=useState('');
    const history= useHistory();
    const{id}=useParams();

    const{title, body, name, date, comments}=blog;

    useEffect(()=>{
        const getBlog = async()=>{
            const{data}= await axios.get(`/api/blog/getblogbyid?id=${id}`);
            setBlog(data);
        }
        getBlog();
    },[id, blog]);

    const onSubmitClick= async()=>{
        await axios.post('/api/blog/addcomment', {name: commentName, commentBody, blogPostId: id});
        history.push('/')
    }
    const generateComments=()=>{
        return comments.map((c, i)=>{
            return <CommentDisplay
            comment={c}
            key={i}
            />
        });
    }

return (
    <div className="row">
        <div className="col-lg-8">
            <h1 className="mt-4">{title}</h1>
            <p className="lead">{name}</p>
            <p>Posted on {date}</p>
            
            <p>{body}</p>
           
            <div className="card my-4">
                <h5 className="card-header">Leave a Comment:</h5>
                <div className="form-group">
                    <div>
                        <input type="text" onChange={e=>setName(e.target.value)} placeholder="Please enter your name" class="form-control" name="CommentName"/>
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Type your comment here but remember to be nice..." onChange={e=>setBody(e.target.value)} name="commentBody" class="form-control" rows="3"></textarea>
                    </div>
                    <button disabled={commentBody===''|| commentName===''} className="btn btn-primary" onClick={onSubmitClick}>Submit</button>
                </div>
                
            </div>
        </div>
        <div>
        {generateComments()}
        </div>
    </div>
);
}
export default ViewBlog;