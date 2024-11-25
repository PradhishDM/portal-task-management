import { useEffect, useState } from "react";

export default function HomePage() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem("taskData");
    if (savedData) {
      setTableData(JSON.parse(savedData));
    }
  }, []);

  function handleTaskCompletion(index) {
    const updatedData = [...tableData];
    updatedData[index].status = "Completed";
    localStorage.setItem("taskData", JSON.stringify(updatedData));
    setTableData(updatedData);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-4">Welcome User!</h2>
        <h3 className="text-xl font-semibold mb-4">Assigned Tasks:</h3>
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Employee</th>
              <th className="px-4 py-2">Task</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index} className="border-b">
                <td className="px-6 py-3">{data.employee}</td>
                <td className="px-6 py-3">{data.task}</td>
                <td className="px-6 py-3">{data.status}</td>
                <td className="px-6 py-3">
                  {data.status === "Pending" && (
                    <button
                      onClick={() => handleTaskCompletion(index)}
                      className="bg-green-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                    >
                      Mark Completed
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
