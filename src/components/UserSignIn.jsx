import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function UserSignIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();
    const storedData = JSON.parse(localStorage.getItem("user")) || [];

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    let user;
    for (let i = 0; i < storedData.length; i++) {
      const userData = storedData[i];
      if (userData.email === email && userData.password === password) {
        user = userData;
        break;
      }
    }

    if (user) {
      console.log("User logged in successfully!");
      navigate("/homepage");
    } else {
      setError("User not found. Please check your credentials.");
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h3 className="text-3xl font-bold mb-8">User Sign-in</h3>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="text-lg mt-5 mr-5">
              Email-id:
            </label>
            <input
              id="email"
              type="text"
              placeholder="Enter your email"
              ref={emailRef}
              className="input-field"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-lg mt-5 mr-4">
              Password:
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              ref={passwordRef}
              className="input-field"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-4 mt-5"
          >
            Sign-In
          </button>
          <Link to="/signup" className="text-blue-500 hover:underline">
            Create your account
          </Link>
        </form>
      </div>
    </div>
  );
}
