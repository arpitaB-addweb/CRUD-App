import React, { useState, useEffect } from "react";
import axios from 'axios'

const Addpost = () => {
    // let history = useHistory();


    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);
    const [post, setPost] = useState({
        userId: "",
        title: "",
        body: "",
    });
    const { userId, title, body } = post;
    const onInputChange = e => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3005/posts",post);
        alert("Data inserted successfully");
        // history.push("/");
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
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="container2">
                <div className="main2">
                    <h1>Add-Post</h1>
                    <form onSubmit={e => onSubmit(e)}>
                        <div className="form-group2">
                            <input
                                type="text"
                                className="userid"
                                placeholder="UserId"
                                name="userid"
                                value={userId}
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
                        <button className="btn-btn">Submit</button>
                    </form>
                </div>
            </div>

        );
    }
};

export default Addpost;

