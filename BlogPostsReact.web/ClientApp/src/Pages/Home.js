import React, { useState, useEffect } from 'react';
import { Route, Link, useParams} from 'react-router-dom';
import axios from 'axios';
import BlogBox from '../Components/BlogBox';
import ViewBlog from './ViewBlog';

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const params = useParams();
    const page = parseInt(params.page);
    const isFirstPage = () => page === 1;
    
    useEffect(()=>{
      const getBlogs= async()=>{
          const { data } = await axios.get(`/api/blog/getpage ? page = ${ page }`);
        setBlogs(data);
      }
      getBlogs();
    },[page]);

    const generateBody=()=>{
      return blogs.map((b, i)=>{
        return <BlogBox
        blog={b}
        key={i}
        />
      });
    }

    return (
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1 className="my-4">
                LIT Blog
                <small>Nothing to see here...</small>
              </h1>
              {generateBody()}
                </div>
                <ul className="pagination justify-content-center mb-4">
                    {!isFirstPage() &&
                        <li classname="page-item">
                        <Link className="page-link" to={`/page/${page - 1}`}>Newer &rarr;</Link>
                        </li>
                    }
                </ul>
                       
          </div>
        </div>)
}
export default Home;