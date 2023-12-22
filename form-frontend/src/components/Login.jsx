import React, { useState } from 'react';
import './styles/login.css';
 
const Login = () => {
    const [isSignUpActive, setSignUpActive] = useState(true);
 
    const handleToggle = () => {
        setSignUpActive(!isSignUpActive);
    };
    const onHandleSubmit = ()=>{

    }
 
    return (
        <div className={`container ${isSignUpActive ? 'active' : ''}`} id="container">
            <div className={`form-container ${isSignUpActive ? 'sign-up' : 'sign-in'}`}>
                {isSignUpActive ? (
                    <form>
                        <h1>Create Account</h1>
                       
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" required />
        <input type="password" placeholder="Password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})" required />
                        <button onClick={onHandleSubmit}>Sign up</button>
                    </form>
                ) : (
                    <form>
                        <h1>Sign In</h1>
                        
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        
                        <div style={{display:"flex"}}>
                        <img src="#" alt="ttes" height={"50px"}  style={{ borderRadius: '1 0px',marginTop:"10px" }} />
                        <input type="text" placeholder="Enter Captcha" style={{width:"120px",marginLeft:"20px"}} />
                        </div>
                       
                        <input type="checkbox" checked="checked"></input>
                       
               
                        <button>Sign In</button>
                    </form>
                )}
            </div>
            <div className="toggle-container">
                <div className="toggle">
                    <div className={`toggle-panel ${isSignUpActive ? 'toggle-left' : 'toggle-right'}`}>
                        {isSignUpActive ? (
                            <>
                                <h1>Welcome Back!</h1>
                                <p>Enter your email and password to login</p>
                                <button onClick={handleToggle}>Sign In</button>
                            </>
                        ) : (
                            <>
                                <h1>Hello, Friend!</h1>
                                <p>Register with your email</p>
                                <button onClick={handleToggle}>Sign Up</button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
 
export default Login;