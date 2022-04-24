import React from "react";
import './login.scss'

import Image from '../../images/login_img.png'
import LoginForm from "../../components/Form/LoginForm";


function Login() {
    return (  
        <div className="container">
            <div className="left">
                <LoginForm/>
            </div>
            <div className="right">
                <img src={Image} width='400' height={400} alt="" />
            </div>
        </div>
    );
}

export default Login;
