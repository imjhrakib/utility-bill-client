import React, { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";

const LoginPage = () => {
  const { user, setUser, signInUser, signInWithGoogle } =
    useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { theme, colors } = useContext(ThemeContext);

  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();

    if (user == null) {
      const email = e.target.email.value;
      const password = e.target.password.value;
      signInUser(email, password)
        .then((res) => {
          navigate(from, { replace: true });
        })
        .catch((err) => {
          Swal.fire({
            icon: "info", // icon type: 'success', 'error', 'info', etc.
            title: `${err.message}`,
            // text: `${err.message}`,
            confirmButtonText: "OK",
          });
        });
    } else {
      Swal.fire({
        icon: "info", // icon type: 'success', 'error', 'info', etc.
        title: "Already Logged In",
        text: "You are already logged in, please log out first to register a new account.",
        confirmButtonText: "OK",
      });
    }
  };
  const handleGoogleSignIn = () => {
    if (user == null) {
      signInWithGoogle()
        .then((result) => {
          setUser(result.user);
          navigate("/");
        })
        .catch((error) => console.log(error.message));
    } else {
      Swal.fire({
        icon: "info", // icon type: 'success', 'error', 'info', etc.
        title: "Already Logged In",
        text: "You are already logged in, please log out first to register a new account.",
        confirmButtonText: "OK",
      });
    }
  };
  return (
    <div className="pt-25">
      <div
        className={`card mx-auto w-full max-w-sm shrink-0 shadow-2xl py-10 border ${
          theme === "dark" ? "border-gray-700" : "border-gray-200"
        }`}
        style={{
          backgroundColor: theme === "dark" ? "#1F2225" : "#FFFFFF",
          color: theme === "dark" ? colors.dark.text : "#1f2937",
        }}
      >
        <Helmet>
          <title>Login || TrustBill</title>
        </Helmet>
        <h1 className="text-5xl text-center font-bold">Login</h1>
        <h4 className="text-center mt-2.5">
          Don't have an account?{" "}
          <span className="text-[#438A7A]">
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
                className={`input ${
                  theme === "dark"
                    ? "bg-gray-700 text-white"
                    : "bg-white text-black"
                }`}
                placeholder="Email"
                required
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className={`input ${
                  theme === "dark"
                    ? "bg-gray-700 text-white"
                    : "bg-white text-black"
                }`}
                placeholder="Password"
                required
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button
                className={`btn btn-outline bg-[#438A7A]  text-xl border-none mt-4 text-white`}
              >
                <NavLink to={"/login"}>Login</NavLink>
              </button>
            </fieldset>
          </form>
          {/* Google */}
          <button
            onClick={handleGoogleSignIn}
            className="btn bg-white text-black border border-[#438A7A] hover:bg-[#438A7A]"
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
    </div>
  );
};

export default LoginPage;
