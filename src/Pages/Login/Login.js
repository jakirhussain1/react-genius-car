import React, { useRef } from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase-init';
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const navigate = useNavigate();
      let location = useLocation();
      let from = location.state?.from?.pathname || "/";
      if(user)
      {
        navigate(from, { replace: true });
      }
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const handleSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email,password);
    }
    return (
        <div>
            <h2 className='text-center text-success my-5'>Please Login</h2>
            <form onSubmit={handleSubmit} className='w-50 mx-auto'>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input ref={passwordRef} type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <p>Are you new Genius Car? <Link  className='text-decoration-none' to="/register">Please Register first</Link></p>
            
            </form>

        </div>
    );
};

export default Login;