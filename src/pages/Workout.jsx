import React, { useState } from 'react';

function Workout() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    password: '',
    role: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setIsModalOpen(false);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Create
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Sets</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Reps</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Weight</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Notes</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
            {/* Example data */}
            <tr>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">John Doe</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">john.doe@example.com</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">123-456-7890</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">Admin</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">Admin</td>

            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">Jane Smith</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">jane.smith@example.com</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">098-765-4321</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">Exhibitor</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">Admin</td>
            </tr>
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50 dark:bg-opacity-70">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-2xl p-6 mx-4 my-10">
            <h2 className="text-xl text-white font-semibold mb-4">Create New User</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="Name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-left">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="Sets" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-left">Sets</label>
                <input
                  type="ext"
                  id="Sets"
                  name="Sets"
                  value={formData.Sets}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="Reps" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-left">Reps</label>
                <input
                  type="text"
                  id="Reps"
                  name="Reps"
                  value={formData.Reps}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="Weight" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-left">Weight</label>
                <input
                  type="text"
                  id="Weight"
                  name="Weight"
                  value={formData.Weight}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="Notes" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-left">Notes</label>
                <input
                  type="text"
                  name="Notes"
                  value={formData.Notes}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-600"
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Workout;
