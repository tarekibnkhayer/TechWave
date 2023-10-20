import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";

const Login = () => {
    const {loginUser, googleLogin} = useContext(AuthContext);
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        loginUser(email, password)
        .then(() => {
            Swal.fire("Logged in successfully");
            form.reset();
        })
        .catch(err =>  Swal.fire(err.message));
    };
    const handleGoogleLogin = () => {
      const provider = new GoogleAuthProvider();
      googleLogin(provider)
      .then(() => {
        Swal.fire("You are successfully logged in");
      })
      .catch(err => Swal.fire(err.message));
    };
    return (
        <div className="hero bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
          <div className="flex mt-2 items-center">
            <p>Do not have an account?</p> <NavLink to='/register' className="text-blue-400 font-black text-xl">Register</NavLink>
          </div>
        </div>
      </form>
      <div className="text-center">
       <p className="text-xl">Login with:</p>
        <button onClick={handleGoogleLogin}><FcGoogle className="text-2xl"></FcGoogle></button>
       </div>
    </div>
  </div>      
</div>
    );
};

export default Login;