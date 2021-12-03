import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

function Form() {
    const validationSchema = Yup.object().shape({
       
        UserName: Yup.string()
            .required('UserName is required'),
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        cc: Yup.string()
            .required('Country-code is required'),
        phone: Yup.number()
            .typeError("That doesn't look like a phone number")
            .positive("A phone number can't start with a minus")
            .integer("A phone number can't include a decimal point")
            .min(10)
            .required('A phone number is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

   
    const { register, handleSubmit , reset , formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(data) {
        console.log(JSON.stringify(data, null, 4))
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        return false;
    }

    return (
        <div className="card m-3">
            <h5 className="card-header">React Hook Form Validation Example</h5>
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-row">
                        <div className="form-group col-5">
                            <label>User Name</label>
                            <input name="UserName" type="text" {...register('UserName')} className={`${errors.UserName ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.UserName?.message}</div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col">
                            <label>Email</label>
                            <input name="email" type="text" {...register('email')} className={`${errors.email ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.email?.message}</div>
                        </div>
                        <label>Country-code</label>
                            <select name="cc" {...register('cc')} className={`form-control ${errors.cc ? 'is-invalid' : ''}`}>
                                <option value=""></option>
                                <option value="+1">+1</option>
                                <option value="+91">+91</option>
                            </select>
                            <div className="invalid-feedback">{errors.cc?.message}</div>
                        <div className="form-group col">
                            <label>Phone</label>
                            <input name="phone" type="text" {...register('phone')} className={`${errors.phone ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.phone?.message}</div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col">
                            <label>Password</label>
                            <input name="password" type="password" {...register('password')} className={`${errors.password ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.password?.message}</div>
                        </div>
                        <div className="form-group col">
                            <label>Confirm Password</label>
                            <input name="confirmPassword" type="password" {...register('confirmPassword')} className={`${errors.confirmPassword ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
                        </div>
                    </div>
                 
                    <div className="form-group">
                        <button type="submit" className="btn btn">Register</button>
                        <button type="button" className="btn btn-reset" onClick={()=> reset()}>Reset</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;