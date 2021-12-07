import React, { useState, useEffect } from "react";
import axios from 'axios'

const AddUser = () => {
    // let history = useHistory();


    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);
    const [user, setUser] = useState([]);

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    
    const onSubmit = async e => {
        e.preventDefault();
        const add = {
            name : user.name,
            username : user.username,
            email : user.email,
            address : {
                street: user.street,
                suite: user.suite,
                city: user.city,
                zipcode: user.zipcode,
                geo:{
                    lat: user.lat,
                    lag: user.lag
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
        console.log(add);
        await axios.post("http://localhost:3005/users", add);
        // history.push("/");
    };

    useEffect(() => {
        fetch("http://localhost:3005/users")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setUser(result);
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
            <div className="container">
                <div className="main">
                    <h1>AddUser</h1>
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
                                value={user.street}
                                onChange={onInputChange}
                            />
                             <input
                                type="text"
                                className="address"
                                placeholder="Suite"
                                name="suite"
                                value={user.suite}
                                onChange={onInputChange}
                            />
                             <input
                                type="text"
                                className="address"
                                placeholder="City"
                                name="city"
                                value={user.city}
                                onChange={onInputChange}
                            />
                            <input
                                type="text"
                                className="address"
                                placeholder="Zip-code"
                                name="zipcode"
                                value={user.zipcode}
                                onChange={onInputChange}
                            />
                            <p>Geo</p>
                            <input
                                type="text"
                                className="address"
                                placeholder="Latitude"
                                name="lat"
                                value={user.lat}
                                onChange={onInputChange}
                            />
                            <input
                                type="text"
                                className="address"
                                placeholder="Langitude"
                                name="lag"
                                value={user.lag}
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
                                value={user.cname}
                                onChange={onInputChange}
                            />
                            <input
                                type="text"
                                className="C-Name"
                                placeholder="catchPhrase"
                                name="catchPhrase"
                                value={user.catchPhrase}
                                onChange={onInputChange}
                            />
                            <input
                                type="text"
                                className="C-Name"
                                placeholder="BS"
                                name="bs"
                                value={user.bs}
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

export default AddUser;

