import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {produce} from 'immer';
import {useParams, useHistory} from 'react-router-dom';

const MostRecent =()=>{
    const[id, setId]= useState('');
    const history= useHistory();

    useEffect(()=>{
        const getMostRecent = async()=>{
            const {data}= await axios.get('/api/blog/getnewestid');
            setId(data);
            history.push(`/viewblog/${id}`);
        }
        getMostRecent();
    }, []);
    return (
        <div>
            <h1>Loading...</h1>
        </div>
    );

}
export default MostRecent;