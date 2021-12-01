import React, { useState, useEffect } from "react";
import axios from 'axios'
import {useParams} from "react-router-dom";

const Edit = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);
    const { id } = useParams();
    const [user, setUser] = useState([]);
   
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
console.log(user)
    const onSubmit = async e => {
        e.preventDefault();
        console.log(user)
        const add = {
            name : user.name,
            username : user.username,
            email : user.email,
            address : {
                street: user.address.street,
                suite: user.address.suite,
                city: user.address.city,
                zipcode: user.address.zipcode,
                geo:{
                    lat: user.address.geo.lat,
                    lag: user.address.geo.lag
                }
            },
            phone: user.phone,
            website: user.website,
            company : {
                cname: user.cname,
                catchPhrase: user.catchPhrase,
                bs: user.bs
            }
        }
        await axios.put(`http://localhost:3005/users/${id}`, add);
    
    };

    useEffect(() => {
        fetch("http://localhost:3005/users")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result[0].address,"result")
                    setIsLoaded(true);
                    setUser(result[0]);
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
        const result = await axios.get(`http://localhost:3005/users/${id}`);
        setUser(result.data);
        console.log(result,"all data")
    };


    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="container">
                <div className="main">
                    <h1>Add-User</h1>
                    <form onSubmit={e => onSubmit(e)}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="name"
                                placeholder="Enter Your Name"
                                name="name"
                                value={user.name}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="username"
                                placeholder="Enter Your User-Name"
                                name="username"
                                value={user.username}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="email"
                                placeholder="Enter Your Email"
                                name="email"
                                value={user.email}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <p>Address</p>
                            <input
                                type="text"
                                className="address"
                                placeholder="Street"
                                name="street"
                                value={user.address?.street}
                                onChange={onInputChange}
                            />
                             <input
                                type="text"
                                className="address"
                                placeholder="Suite"
                                name="suite"
                                value={user.address?.suite}
                                onChange={onInputChange}
                            />
                             <input
                                type="text"
                                className="address"
                                placeholder="City"
                                name="city"
                                value={user.address?.city}
                                onChange={onInputChange}
                            />
                            <input
                                type="text"
                                className="address"
                                placeholder="Zip-code"
                                name="zipcode"
                                value={user.address?.zipcode}
                                onChange={onInputChange}
                            />
                            <p>Geo</p>
                            <input
                                type="text"
                                className="address"
                                placeholder="Latitude"
                                name="lat"
                                value={user.address?.geo?.lat}
                                onChange={onInputChange}
                            />
                            <input
                                type="text"
                                className="address"
                                placeholder="Langitude"
                                name="lag"
                                value={user.address?.geo?.lag}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="phone"
                                placeholder="Phone"
                                name="phone"
                                value={user.phone}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="website"
                                placeholder="Website"
                                name="website"
                                value={user.website}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <p>Company-Details</p>
                            <input
                                type="text"
                                className="C-Name"
                                placeholder="Company-name"
                                name="cname"
                                value={user.company?.cname}
                                onChange={onInputChange}
                            />
                            <input
                                type="text"
                                className="C-Name"
                                placeholder="catchPhrase"
                                name="catchPhrase"
                                value={user.company?.catchPhrase}
                                onChange={onInputChange}
                            />
                            <input
                                type="text"
                                className="C-Name"
                                placeholder="BS"
                                name="bs"
                                value={user.company?.bs}
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
export default Edit;
