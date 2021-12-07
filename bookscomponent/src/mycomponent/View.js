import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const View = () => {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        address: "",
        company: "",
        website: ""
    });
    const { id } = useParams();
    
    useEffect(() => {
        loadUser();
    },[]);
   
    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3005/users/${id}`);
        setUser(res.data);
    };

    return (
        <div className="container py-4">
            <p className="display-4">User Id: {id}</p>
            <hr />
            <ul className="list-group w-50">
                <li className="list-group-item">name: {user.name}</li>
                <li className="list-group-item">user name: {user.username}</li>
                <li className="list-group-item">email: {user.email}</li>
                <li className="list-group-item">phone: {user.phone}</li>
                <li className="list-group-item">Address: {user.address.city}</li>
                <li className="list-group-item">Company: {user.company.cname}</li>
                <li className="list-group-item">Website: {user.website}</li>
            </ul>
        </div>
    );
};

export default View;
