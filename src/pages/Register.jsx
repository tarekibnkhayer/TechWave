import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, updateUserInfo } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    const user = { name, email, photo };
    if (password.length < 6) {
      return Swal.fire("password should have at least 6 characters");
    }
    if (!/[A-Z]/.test(password)) {
      return Swal.fire("password should have at least one uppercase character");
    }
    if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(password)) {
      return Swal.fire("please add at least a special character in your password!");
    }
    createUser(email, password)
      .then(() => {
        updateUserInfo(name, photo).then().catch();
        fetch(
          "https://techwave-server-h2fyqkqh6-tarek-ibn-khayers-projects.vercel.app/users",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          }
        )
          .then((res) => res.json())
          .then((data) => console.log(data));
        Swal.fire("User created successfully");
        form.reset();
      })
      .catch((err) => Swal.fire(err.message));
  };
  return (
    <div className="hero  bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                name="photo"
                placeholder="photo url"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Create Account</button>
            </div>
            <div className="flex mt-2 items-center">
              <p>Already Have an account?</p>
              <NavLink to="/login" className="text-blue-400 font-black text-xl">
                Login
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
