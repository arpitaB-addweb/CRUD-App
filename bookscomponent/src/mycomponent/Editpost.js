import React, { useState, useEffect } from "react";
import axios from 'axios'
import {useParams} from "react-router-dom";

const Editpost = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);
    const { id } = useParams();
    const [post, setPost] = useState({
        userid: "",
        title: "",
        body: "",
    });

    const { userid, title, body } = post;
    const onInputChange = e => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    console.log(userid);
    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3005/posts/${id}`, post);
    
    };

    useEffect(() => {
        fetch("http://localhost:3005/posts")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setPost(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )

      loadUser();
    }, [])

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3005/posts/${id}`);
        console.log(result);
        setPost(result.data);
    };


    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="container">
                <div className="main2">
                    <h1>Add-Post</h1>
                    <form onSubmit={e => onSubmit(e)}>
                        <div className="form-group2">
                            <input
                                type="text"
                                className="userid"
                                placeholder="UserId"
                                name="userid"
                                value={userid}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className="form-group2">
                            <input
                                type="text"
                                className="title"
                                placeholder="Title"
                                name="title"
                                value={title}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className="form-group2">
                            <input
                                type="text"
                                className="body"
                                placeholder="Body"
                                name="body"
                                value={body}
                                onChange={onInputChange}
                            />
                        </div>
                        <button className="btn-btn">Update</button>
                    </form>
                </div>
            </div>

        );
    }
};
export default Editpost;
