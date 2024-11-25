import { useState, useEffect } from "react";

export default function TaskAllocation() {
  const [task, setTask] = useState({
    employee: "",
    task: "",
    status: "Pending",
  });
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem("taskData");
    if (savedData) {
      setTableData(JSON.parse(savedData));
    }
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setTask((prevTask) => ({ ...prevTask, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const updatedData = [...tableData, task];
    localStorage.setItem("taskData", JSON.stringify(updatedData));
    setTableData(updatedData);
    setTask({ employee: "", task: "", status: "Pending" });
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-4">Welcome Admin!</h2>
        <div className="form-container mt-5">
          <form onSubmit={handleSubmit} className="task-form">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
              <label className="block text-lg">Employee:</label>
              <input
                type="text"
                id="employee"
                name="employee"
                value={task.employee}
                onChange={handleChange}
                className="input-field"
                placeholder="Enter employee name"
              />
              <label className="block text-lg">Task:</label>
              <input
                type="text"
                id="task"
                name="task"
                value={task.task}
                onChange={handleChange}
                className="input-field"
                placeholder="Enter task description"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mt-6"
            >
              Assign Task
            </button>
          </form>
        </div>

        <h3 className="text-xl font-semibold mt-8">Assigned Tasks:</h3>
        <table className="w-full table-auto mt-4">
          <thead>
            <tr>
              <th className="px-4 py-2">Employee</th>
              <th className="px-4 py-2">Task</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">{data.employee}</td>
                <td className="px-4 py-2">{data.task}</td>
                <td className="px-4 py-2">{data.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
