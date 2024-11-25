import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminPagexx() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();
    const adminData = JSON.parse(localStorage.getItem("admin")) || [];

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    let admin;
    for (let i = 0; i < adminData.length; i++) {
      const adminInfo = adminData[i];
      if (adminInfo.username === username && adminInfo.password === password) {
        admin = adminInfo;
        break;
      }
    }

    if (admin) {
      console.log("Admin logged in successfully!");
      navigate("/taskallocation");
    } else {
      setError("Admin not found. Please check your credentials.");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h3 className="text-3xl font-bold mb-8">Admin Sign-in</h3>
      {error && <div className="text-red-500">{error}</div>}
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-lg"
      >
        <div>
          <div>
            <label className="mb-2">Username:</label>
            <input
              className="border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Enter your username"
              type="text"
              ref={usernameRef}
            />
          </div>
          <div>
            <label className="mb-2">Password:</label>
            <input
              className="border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Enter your password"
              type="password"
              ref={passwordRef}
            />
          </div>
        </div>
        <br />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          type="submit"
        >
          Sign-In
        </button>
      </form>
    </div>
  );
}
