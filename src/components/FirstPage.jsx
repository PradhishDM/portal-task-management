import { useNavigate } from "react-router-dom";

export default function FirstPage() {
  const navigate = useNavigate();

  function handleAdmin() {
    navigate("/adminpage");
  }

  function handleUser() {
    navigate("/signin");
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-5xl font-bold mb-8 text-red-500 font-mono ">
        Welcome to Your App
      </h1>
      <div className="flex space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-5 rounded-lg text-2xl "
          onClick={handleAdmin}
        >
          Admin
        </button>
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-12 py-5 rounded-lg text-2xl"
          onClick={handleUser}
        >
          User
        </button>
      </div>
    </div>
  );
}
