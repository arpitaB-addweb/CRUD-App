import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Viewpost = () => {
    const [post, setPost] = useState({
        userid: "",
        title: "",
        body: "",
    });
    const { id } = useParams();
    
    useEffect(() => {
        loadPost();
    },[]);
   
    const loadPost = async () => {
        const res = await axios.get(`http://localhost:3005/posts/${id}`);
        setPost(res.data);
    };

    return (
        <div className="container py-4">
            <p className="display-4">Post Id: {id}</p>
            <hr />
            <ul className="list-group w-50">
                <li className="list-group-item">Post Id: {post.userid}</li>
                <li className="list-group-item">Title: {post.title}</li>
                <li className="list-group-item">Body: {post.body}</li>
            </ul>
        </div>
    );
};

export default Viewpost;