import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';



const AddUser = () => {
    // let history = useHistory();

    const validationSchema = Yup.object().shape({
       
        name: Yup.string()
            .required('Name is required'),
        username: Yup.string()
            .required("UserName is required"),
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        street: Yup.string()
            .required("Address is required field"),
        suite: Yup.string()
            .required("Address is required field"),
        city: Yup.string()
            .required("Address is required field"),
        zipcode: Yup.number()
            .required("Address is required field"),
        phone: Yup.number()
            .typeError("That doesn't look like a phone number")
            .positive("A phone number can't start with a minus")
            .integer("A phone number can't include a decimal point")
            .min(10)
            .required('A phone number is required'),
        lat: Yup.number()
            .required(),
        lag: Yup.number()
            .required(),
        website: Yup.string()
            .required('It is required'),
        cname: Yup.string()
            .required("Please add this!!"),
        catchPhrase: Yup.string()
            .required("Please add this!!"),
        bs: Yup.string()
            .required("Please add this!!")
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    const { register, handleSubmit, reset , formState } = useForm(formOptions);
    const { errors } = formState;


    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);
    const [user, setUser] = useState([]);

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    
    const onSubmit = async (data) => {
        // e.preventDefault()
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
        alert(JSON.stringify(data));
        console.log(data);
         await axios.post("http://localhost:3005/users", data);
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="name"
                                placeholder="Enter Your Name"
                                name="name"
                                value={user.name}
                                onChange={onInputChange}

                                {...register('name')} className={`${errors.name ? 'is-invalid' : ''}`} 
                            />
                             <div className="invalid-feedback">{errors.name?.message}</div>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="username"
                                placeholder="Enter Your User-Name"
                                name="username"
                                value={user.username}
                                onChange={onInputChange}

                                {...register('username')} className={`${errors.username ? 'is-invalid' : ''}`} 
                            />
                               <div className="invalid-feedback">{errors.username?.message}</div>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="email"
                                placeholder="Enter Your Email"
                                name="email"
                                value={user.email}
                                onChange={onInputChange}

                                {...register('email')} className={`${errors.email ? 'is-invalid' : ''}`} 
                            />
                            <div className="invalid-feedback">{errors.email?.message}</div>
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
                                {...register('street')} className={`${errors.street ? 'is-invalid' : ''}`} 
                            />
                              <div className="invalid-feedback">{errors.street?.message}</div>
                             <input
                                type="text"
                                className="address"
                                placeholder="Suite"
                                name="suite"
                                value={user.suite}
                                onChange={onInputChange}
                                {...register('suite')} className={`${errors.suite ? 'is-invalid' : ''}`} 
                            />
                              <div className="invalid-feedback">{errors.suite?.message}</div>
                             <input
                                type="text"
                                className="address"
                                placeholder="City"
                                name="city"
                                value={user.city}
                                onChange={onInputChange}

                                {...register('city')} className={`${errors.city ? 'is-invalid' : ''}`} 
                            />
                              <div className="invalid-feedback">{errors.city?.message}</div>
                            <input
                                type="text"
                                className="address"
                                placeholder="Zip-code"
                                name="zipcode"
                                value={user.zipcode}
                                onChange={onInputChange}

                                {...register('zipcode')} className={`${errors.zipcode ? 'is-invalid' : ''}`} 
                            />
                              <div className="invalid-feedback">{errors.zipcode?.message}</div>
                            <p>Geo</p>
                            <input
                                type="text"
                                className="address"
                                placeholder="Latitude"
                                name="lat"
                                value={user.lat}
                                onChange={onInputChange}

                                {...register('lat')} className={`${errors.lat ? 'is-invalid' : ''}`} 
                                />
                                  <div className="invalid-feedback">{errors.lat?.message}</div>
                            <input
                                type="text"
                                className="address"
                                placeholder="Langitude"
                                name="lag"
                                value={user.lag}
                                onChange={onInputChange}

                                {...register('lag')} className={`${errors.lag ? 'is-invalid' : ''}`} 
                            />
                                  <div className="invalid-feedback">{errors.lag?.message}</div>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="phone"
                                placeholder="Phone"
                                name="phone"
                                value={user.phone}
                                onChange={onInputChange}
                                {...register('phone')} className={`${errors.phone ? 'is-invalid' : ''}`} 
                            />
                                  <div className="invalid-feedback">{errors.phone?.message}</div>
                            
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="website"
                                placeholder="Website"
                                name="website"
                                value={user.website}
                                onChange={onInputChange}

                                {...register('website')} className={`${errors.website ? 'is-invalid' : ''}`} 
                                />
                                  <div className="invalid-feedback">{errors.website?.message}</div>
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
                                {...register('cname')} className={`${errors.cname ? 'is-invalid' : ''}`} 
                                />
                                  <div className="invalid-feedback">{errors.cname?.message}</div>
                            
                            <input
                                type="text"
                                className="C-Name"
                                placeholder="catchPhrase"
                                name="catchPhrase"
                                value={user.catchPhrase}
                                onChange={onInputChange}
                                {...register('catchPhrase')} className={`${errors.catchPhrase ? 'is-invalid' : ''}`} 
                                />
                                  <div className="invalid-feedback">{errors.catchPhrase?.message}</div>
                            
                            <input
                                type="text"
                                className="C-Name"
                                placeholder="BS"
                                name="bs"
                                value={user.bs}
                                onChange={onInputChange}
                                {...register('bs')} className={`${errors.bs ? 'is-invalid' : ''}`} 
                                />
                                  <div className="invalid-feedback">{errors.bs?.message}</div>
                            
                        </div>
                        <button className="btn-btn">Submit</button>
                    </form>
                    
                </div>
            </div>

        );
    }
};

export default AddUser;

