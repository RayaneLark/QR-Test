import './loginform.scss';
import Google from '../../images/Google_logo.png';


function LoginForm() {
    return (
            <div className="formCard">
                <form action="">
                    <h1>Welcome back</h1>
                    <h3>Welcome back! Please enter your details</h3>
                    <span>Email</span>
                    <div className="inputBox">
                        <input type="mail" className="mail" placeholder='Enter your mail'/>
                    </div>
                    <span>Password</span>
                    <div className="inputBox">
                        <input type="mail" className="mail" placeholder='Enter your password'/>
                    </div>
                    <div className="usefull">
                        <div className='checkBox'>
                            <input type="checkbox" name="" id=""/>
                            Remember me for 30 days
                        </div>
                        <a href="">Forgot password ?</a>
                    </div>
                    <button className='btnSignin'>Sign in</button>
                    <button className='btnGoogle'>
                        <img src={Google} width={20} height={20} alt="" />
                        Sign in with Google
                    </button>
                    <div className="linkSignin">
                        Don't Have an account? <a href="">Sign up</a>
                    </div>
                </form>
            </div>
            
     );
}

export default LoginForm;