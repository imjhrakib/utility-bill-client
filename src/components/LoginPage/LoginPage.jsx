import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthContext";

const LoginPage = () => {
  const { user, setUser, signInUser, signInWithGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();

    if (user == null) {
      const email = e.target.email.value;
      const password = e.target.password.value;
      signInUser(email, password)
        .then((res) => {
          console.log(res.user.displayName);
          navigate("/");
        })
        .catch((err) => console.log(err.message));

      console.log("login successfully");
    } else {
      console.log("already exist");
    }
  };
  const handleGoogleSignIn = () => {
    if (user == null) {
      signInWithGoogle()
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => console.log(error.message));
    }
  };
  return (
    <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl mt-15 py-10">
      <h1 className="text-5xl text-center font-bold">Login</h1>
      <h4 className="text-center mt-2.5">
        Don't have an account?{" "}
        <span className="bg-[linear-gradient(to_right,_#632EE3_0%,_#1000FF_100%)] bg-clip-text text-transparent">
          <NavLink to={"/register"}>Register Now</NavLink>
        </span>
      </h4>
      <div className="card-body">
        <form onSubmit={handleLogin}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-outline btn-success mt-4">
              <NavLink to={"/login"}>Login</NavLink>
            </button>
          </fieldset>
        </form>
        {/* Google */}
        <button
          onClick={handleGoogleSignIn}
          className="btn bg-white text-black border-gray-700 hover:bg-[#34A853] hover:border-none"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
