import React, { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";

const RegistrationPage = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { theme, colors } = useContext(ThemeContext);
  const pattern = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
  const navigate = useNavigate();
  const { user, setUser, createUser, signInWithGoogle } =
    useContext(AuthContext);

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photo.value;
    const newUser = { name, email, password, photoURL };

    if (!pattern.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Weak password",
        text: "Password must contain at least 1 uppercase, 1 lowercase letter and be 6+ characters long.",
      });
      return;
    }

    if (user) {
      Swal.fire({
        icon: "info",
        title: "Already Logged In",
        text: "You are already logged in, please log out first to register a new account.",
        confirmButtonText: "OK",
      });
      return;
    }

    try {
      // 1️⃣ Create Firebase user
      const result = await createUser(email, password);
      const firebaseUser = result.user;

      // 2️⃣ Update Firebase profile
      await updateProfile(firebaseUser, {
        displayName: name,
        photoURL: photoURL,
      });

      // 3️⃣ Send user data to backend
      const response = await fetch(
        "https://utility-bill-server.vercel.app/users",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUser),
        }
      );
      const data = await response.json();
      console.log("Inserted in DB:", data);

      // 4️⃣ Update user context and navigate
      setUser(firebaseUser);
      navigate(from, { replace: true });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: error.message,
        confirmButtonText: "OK",
      });
    }
  };

  const handleGoogleSignIn = () => {
    if (user == null) {
      signInWithGoogle()
        .then((result) => {
          setUser(result.user);
          navigate(from, { replace: true });
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
    <div className="pt-20">
      <div
        className={`card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl p-5 my-10 border ${
          theme === "dark" ? "border-gray-700" : "border-gray-200"
        }`}
        style={{
          backgroundColor: theme === "dark" ? "#1F2225" : "#FFFFFF",
          color: theme === "dark" ? colors.dark.text : "#1f2937",
        }}
      >
        <Helmet>
          <title>Register || TrustBill</title>
        </Helmet>
        <h1 className="text-5xl font-bold mx-auto mb-2">Register now!</h1>
        <h4 className="mx-auto">
          Already have an account?{" "}
          <span className="text-[#438A7A]">
            <NavLink to={"/login"}>Login Now</NavLink>
          </span>
        </h4>
        <div className="card-body">
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                className={`input ${
                  theme === "dark"
                    ? "bg-gray-700 text-white"
                    : "bg-white text-black"
                }`}
                type="text"
                name="name"
                id="userId"
                placeholder="JH Rakib"
                required
              />
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className={`input ${
                  theme === "dark"
                    ? "bg-gray-700 text-white"
                    : "bg-white text-black"
                }`}
                placeholder="example.com"
                required
              />

              <label className="label">Image URL</label>
              <input
                className={`input ${
                  theme === "dark"
                    ? "bg-gray-700 text-white"
                    : "bg-white text-black"
                }`}
                type="text"
                name="photo"
                id=""
                placeholder="example.com"
              />
              <label className="label">Password</label>
              <input
                type="password"
                className={`input ${
                  theme === "dark"
                    ? "bg-gray-700 text-white"
                    : "bg-white text-black"
                }`}
                name="password"
                placeholder="Password"
                required
              />
              <button className="btn btn-outline border border-[#438A7A] text-lg text-[#438A7A] hover:bg-[#438A7A] hover:text-white mt-4">
                Register
              </button>
            </fieldset>
          </form>
          <p className="text-center text-xl font-bold">OR</p>
          {/* Google */}
          <button
            onClick={handleGoogleSignIn}
            className="btn bg-white  text-black border border-[#438A7A] hover:bg-[#438A7A]"
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

export default RegistrationPage;
