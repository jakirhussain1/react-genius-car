import React from 'react';
import {Link} from 'react-router-dom'
import auth from '../../firebase-init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const handleSubmit = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email,password);
    }
    return (
        <div>
            <h2 className='text-center text-success my-5'>Please Register</h2>
            <form onSubmit={handleSubmit} className='w-50 mx-auto'>
            <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Name</label>
                    <input name='name' type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input name='password' type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
                <p>Already Registerd? <Link  className='text-decoration-none' to="/login">Please Login</Link></p>
            
            </form>

        </div>
    );
};

export default Register;