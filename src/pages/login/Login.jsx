import { Link } from "react-router-dom";
import "./login.scss"
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const Login = () => {

  const {login} = useContext(AuthContext);

  const handleLogin=() =>{
    login();
  };

  return (
    <div className='login'>
      <div className='card'>
        <div className='left'>
          <h1>SocialMedia</h1>
          <p>Welcome back to Instagram. Sign in to check out what your friends, family & interests have been capturing & sharing around the world.</p> 
          <span>Don't you have an account?</span>
          <Link to="/register">
          <button>Register</button>
          </Link> 
        </div>
        <div className='right'>
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="UserName"/>
            <input type="text" placeholder="Password"/>
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
    
  );
};

export default Login;

