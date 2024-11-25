import { useEffect, useRef, useState } from "react";

export default function UserSignUp() {
  const [data, setData] = useState(null);

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("user")) || [];
    setData(storedData);
  }, []);

  useEffect(() => {
    if (data !== null) {
      localStorage.setItem("user", JSON.stringify(data));
    }
  }, [data]);

  function handleSubmit(event) {
    event.preventDefault();
    const newUser = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    setData((prev) => [...prev, newUser]);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-4 text-blue-600">
          Sign-Up
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <div className="flex items-center">
            <label htmlFor="name" className="block text-lg mr-4">
              Enter your Name:
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your Name"
              ref={nameRef}
              className="input-field"
            />
          </div>

          <div className="flex items-center">
            <label htmlFor="email" className="block text-lg mr-4">
              Email-id:
            </label>
            <input
              id="email"
              type="text"
              placeholder="Enter your email-id"
              ref={emailRef}
              className="input-field"
            />
          </div>

          <div className="flex items-center">
            <label htmlFor="password" className="block text-lg mr-4">
              Create your Password:
            </label>
            <input
              id="password"
              type="password"
              placeholder="Create your password"
              ref={passwordRef}
              className="input-field"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md mt-4"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
}
