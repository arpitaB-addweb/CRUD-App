import React, { useState, useEffect, useReducer } from "react";
import axios from 'axios'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';


function Reducerformdemo() {
const initialState={
        name: "",
        username: "",
        email:"",
        street:"",
        suite:"",
        city:"",
        zipcode:"",
        phone:"",
        lat:"",
        lag:"",
        website:"",
        cname:"",
        catchPhrase:"",
        bs:"",
    }
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

    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;


    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);
  
    const [user, setUser] = useReducer(
        (curval, newval) => ({...curval , ...newval}), initialState
    )
    
    const {name,username, email,street,suite,city,zipcode,phone,lat,lag,website,cname,catchPhrase,bs} = user;
   
   
    function handleChange(e) {
        
        const{name, value} = e.target;
        setUser({ [name]: value})

    }
    
    const onSubmit = async (data) => {
     
        alert(JSON.stringify(data));
        console.log(data);
         await axios.post("http://localhost:3005/userdemo", data);
        // history.push("/");
    };

    useEffect(() => {
        fetch("http://localhost:3005/userdemo")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setUser(result);
                },
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
                    <h1>Add-User Component using useReducer </h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input
                            {...register("name", { required: true })}
                                type="text"
                                className="name"
                                placeholder="Enter Your Name"
                                name="name"
                                value={name}
                                onChange={handleChange}
                                
                                className={`${errors.name ? 'is-invalid' : ''}`} 
                            />
                             <div className="invalid-feedback">{errors.name?.message}</div>
                        </div>
                        <div className="form-group">
                            <input
                                {...register("username", { required: true })}
                                type="text"
                                className="username"
                                placeholder="Enter Your User-Name"
                                name="username"
                                value={username}
                                onChange={handleChange}
                              
                                className={`${errors.username ? 'is-invalid' : ''}`} 
                            />
                               <div className="invalid-feedback">{errors.username?.message}</div>
                        </div>
                        <div className="form-group">
                            <input
                                {...register("email", { required: true })}
                                type="text"
                                className="email"
                                placeholder="Enter Your Email"
                                name="email"
                                value={email}
                                onChange={handleChange}

                               className={`${errors.email ? 'is-invalid' : ''}`} 
                            />
                            <div className="invalid-feedback">{errors.email?.message}</div>
                        </div>
                        <div className="form-group">
                            <p>Address</p>
                            <input
                                {...register("street", { required: true })}
                                type="text"
                                className="address"
                                placeholder="Street"
                                name="street"
                                value={street}
                                onChange={handleChange}
                                className={`${errors.street ? 'is-invalid' : ''}`} 
                            />
                              <div className="invalid-feedback">{errors.street?.message}</div>
                             <input
                                {...register("suite", { required: true })}
                                type="text"
                                className="address"
                                placeholder="Suite"
                                name="suite"
                                value={suite}
                                onChange={handleChange}
                                className={`${errors.suite ? 'is-invalid' : ''}`} 
                            />
                              <div className="invalid-feedback">{errors.suite?.message}</div>
                             <input
                                {...register("city", { required: true })}
                                type="text"
                                className="address"
                                placeholder="City"
                                name="city"
                                value={city}
                                onChange={handleChange}

                               className={`${errors.city ? 'is-invalid' : ''}`} 
                            />
                              <div className="invalid-feedback">{errors.city?.message}</div>
                            <input
                                {...register("zipcode", { required: true })}
                                type="text"
                                className="address"
                                placeholder="Zip-code"
                                name="zipcode"
                                value={zipcode}
                                onChange={handleChange}

                                className={`${errors.zipcode ? 'is-invalid' : ''}`} 
                            />
                              <div className="invalid-feedback">{errors.zipcode?.message}</div>
                            <p>Geo</p>
                            <input
                            {...register("lat", { required: true })}
                                type="text"
                                className="address"
                                placeholder="Latitude"
                                name="lat"
                                value={lat}
                                onChange={handleChange}

                             className={`${errors.lat ? 'is-invalid' : ''}`} 
                                />
                                  <div className="invalid-feedback">{errors.lat?.message}</div>
                            <input
                            {...register("lag", { required: true })}
                                type="text"
                                className="address"
                                placeholder="Langitude"
                                name="lag"
                                value={lag}
                                onChange={handleChange}

                                className={`${errors.lag ? 'is-invalid' : ''}`} 
                            />
                            <div className="invalid-feedback">{errors.lag?.message}</div>
                        </div>
                        <div className="form-group">
                            <input
                            {...register("phone", { required: true })}
                                type="text"
                                className="phone"
                                placeholder="Phone"
                                name="phone"
                                value={phone}
                                onChange={handleChange}
                              className={`${errors.phone ? 'is-invalid' : ''}`} 
                            />
                                  <div className="invalid-feedback">{errors.phone?.message}</div>
                            
                        </div>
                        <div className="form-group">
                            <input
                            {...register("website", { required: true })}
                                type="text"
                                className="website"
                                placeholder="Website"
                                name="website"
                                value={website}
                                onChange={handleChange}

                               className={`${errors.website ? 'is-invalid' : ''}`} 
                                />
                                  <div className="invalid-feedback">{errors.website?.message}</div>
                        </div>
                        <div className="form-group">
                            <p>Company-Details</p>
                            <input
                            {...register("cname", { required: true })}
                                type="text"
                                className="C-Name"
                                placeholder="Company-name"
                                name="cname"
                                value={cname}
                                onChange={handleChange}
                                className={`${errors.cname ? 'is-invalid' : ''}`} 
                                />
                                  <div className="invalid-feedback">{errors.cname?.message}</div>
                            
                            <input
                            {...register("catchPhrase", { required: true })}
                                type="text"
                                className="C-Name"
                                placeholder="catchPhrase"
                                name="catchPhrase"
                                value={catchPhrase}
                                onChange={handleChange}
                              className={`${errors.catchPhrase ? 'is-invalid' : ''}`} 
                                />
                                  <div className="invalid-feedback">{errors.catchPhrase?.message}</div>
                            
                            <input
                            {...register("bs", { required: true })}
                                type="text"
                                className="C-Name"
                                placeholder="BS"
                                name="bs"
                                value={bs}
                                onChange={handleChange}
                                className={`${errors.bs ? 'is-invalid' : ''}`} 
                                />
                                  <div className="invalid-feedback">{errors.bs?.message}</div>
                            
                        </div>
                        <button className="btn-btn">Submit</button>
                    </form>
                    
                </div>
            </div>

        );
    }
}
export default Reducerformdemo;