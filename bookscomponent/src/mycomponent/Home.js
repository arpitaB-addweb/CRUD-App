import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
    const [users, setUser] = useState([]);
    const [posts, setPost] = useState([]);


    useEffect(() => {
        loadUsers();
        loadPosts();
        
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3005/users");
        setUser(result.data.reverse());
    };


    const loadPosts = async () => {
        const result = await axios.get("http://localhost:3005/posts");
        setPost(result.data.reverse());
    };

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3005/users/${id}`);
        loadUsers();
    };

    const deletePost = async id => {
        await axios.delete(`http://localhost:3005/posts/${id}`);
        loadPosts();
    };


    return (
        <div className="container">
            <div className="table">
                <h1>User-Details Table</h1>
                <table class="table1">
                    <thead class="thead1">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">User_Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Website</th>
                            <th scope="col">Company</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.address.city}</td>
                                <td>{user.phone}</td>
                                <td>{user.website}</td>
                                <td>{user.company.cname}</td>
                                <td>
                                    <Link class="btn btn-primary mr-2" to={`/view/${user.id}`}>
                                        View
                                    </Link>
                                    <Link
                                        class="btn btn-outline-primary mr-2"
                                        to={`/edit/${user.id}`}
                                    >
                                        Edit
                                    </Link>
                                    <button className="button" onClick={()=>{deleteUser(user.id)}}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="table">
                <h1>Post-Details Table</h1>
                <table class="table1">
                    <thead class="thead1">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">User-Id</th>
                            <th scope="col">Title</th>
                            <th scope="col">Body</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{post.userid}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                                <td>
                                    <Link class="btn btn-primary mr-2" to={`/viewpost/${post.id}`}>
                                        View
                                    </Link>
                                    <Link
                                        class="btn btn-outline-primary mr-2"
                                        to={`/editpost/${post.id}`}
                                    >
                                        Edit
                                    </Link>
                                    {/* <Link
                                        class="btn btn-danger" onClick={deletePost(post.id)}
                                        >
                                        Delete
                                    </Link> */}
                                    <button className="button" onClick={()=>{deletePost(post.id)}}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;
