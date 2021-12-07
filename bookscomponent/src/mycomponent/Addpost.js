import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';



const Addpost = () => {
    const validationSchema = Yup.object().shape({
       
        UserId: Yup.number()
            .required('UserName is required')
            .min(4),
        Title: Yup.string()
            .required('title is required'),
        Body: Yup.string()
            .required('Body is required')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    const { register, handleSubmit, reset , formState } = useForm(formOptions);
    const { errors } = formState;

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);
    const [post, setPost] = useState({
        userid: "",
        title: "",
        body: "",
    });
    const { userid, title, body } = post;
    const onInputChange = e => {
        console.log(e.target.value)
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    const onSubmit = async (data) => {
        console.log(data)
        alert(JSON.stringify(data));
        await axios.post("http://localhost:3005/posts",data);
        
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group2">
                            <input
                                type="text"
                                placeholder="UserId"
                                name="userid"
                                value={userid}
                                onChange={onInputChange}
                                {...register('UserId')} className={`${errors.UserId ? 'is-invalid' : ''}`} 
                                
                            />
                            <div className="invalid-feedback">{errors.UserId?.message}</div>
                        </div>
                        <div className="form-group2">
                            <input
                                type="text"
                                className="title"
                                placeholder="Title"
                                name="title"
                                value={title}
                                onChange={onInputChange}
                                 {...register('Title')} className={`${errors.Title ? 'is-invalid' : ''}`} 
                            />
                             <div className="invalid-feedback">{errors.Title?.message}</div>
                        </div>
                        <div className="form-group2">
                            <input
                                type="text"
                                className="body"
                                placeholder="Body"
                                name="body"
                                value={body}
                                onChange={onInputChange}
                                {...register('Body')} className={`${errors.Body ? 'is-invalid' : ''}`}
                            />
                             <div className="invalid-feedback">{errors.Body?.message}</div>
                        </div>
                        <button className="btn-btn">Submit</button>
                        <button type="button" onClick={()=> reset()}>Reset</button>
                    </form>
                </div>
            </div>

        );
    }
};

export default Addpost;

