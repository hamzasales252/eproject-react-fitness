import React, { useState } from 'react';

function NutritionTrack() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    password: '',
    role: '',
  });
  const [data, setData] = useState([
    { id: 1, breakfast: 'John Doe', lunch: 'john.doe@example.com', dinner: '123-456-7890', snacks: 'Admin', quantity: '5 meals' },
    { id: 2, breakfast: 'Jane Smith', lunch: 'jane.smith@example.com', dinner: '098-765-4321', snacks: 'Exhibitor', quantity: 'protein' },
  ]);
  const [deleteId, setDeleteId] = useState(null);

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

  const handleDelete = (id) => {
    setDeleteId(id);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    setData(data.filter(item => item.id !== deleteId));
    setIsDeleteModalOpen(false);
    setDeleteId(null);
  };

  const cancelDelete = () => {
    setIsDeleteModalOpen(false);
    setDeleteId(null);
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
        <table className="min-w-full divide-y divide-gray-200 bg-white text-gray-900">
          <thead className="bg-gray-800 text-gray-200">
            <tr>
              <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">Breakfast</th>
              <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">Lunch</th>
              <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">Dinner</th>
              <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">Snacks</th>
              <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">Quantity</th>
              <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 text-sm text-gray-900 text-center">{item.breakfast}</td>
                <td className="px-6 py-4 text-sm text-gray-900 text-center">{item.lunch}</td>
                <td className="px-6 py-4 text-sm text-gray-900 text-center">{item.dinner}</td>
                <td className="px-6 py-4 text-sm text-gray-900 text-center">{item.snacks}</td>
                <td className="px-6 py-4 text-sm text-gray-900 text-center">{item.quantity}</td>
                <td className="px-6 py-4 text-sm text-gray-900 text-center">
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-500 hover:text-red-700 focus:outline-none"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 6h12M6 6l1.5 13.5A1.5 1.5 0 0 0 8 21h8a1.5 1.5 0 0 0 1.5-1.5L18 6m-6-4v4m-1.5 0h3M6 6h12M6 6l1.5 13.5A1.5 1.5 0 0 0 8 21h8a1.5 1.5 0 0 0 1.5-1.5L18 6m-6-4v4m-1.5 0h3" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6 mx-4 my-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Create New User</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-900">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="Sets" className="block text-sm font-medium text-gray-900">Sets</label>
                <input
                  type="text"
                  id="Sets"
                  name="Sets"
                  value={formData.Sets}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="Reps" className="block text-sm font-medium text-gray-900">Reps</label>
                <input
                  type="text"
                  id="Reps"
                  name="Reps"
                  value={formData.Reps}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="Weight" className="block text-sm font-medium text-gray-900">Weight</label>
                <input
                  type="text"
                  id="Weight"
                  name="Weight"
                  value={formData.Weight}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="Notes" className="block text-sm font-medium text-gray-900">Notes</label>
                <input
                  type="text"
                  id="Notes"
                  name="Notes"
                  value={formData.Notes}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-sm p-6 mx-4 my-10">
            <h2 className="text-lg font-semibold mb-4 text-gray-900">Are you sure you want to delete this item?</h2>
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={cancelDelete}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={confirmDelete}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NutritionTrack;
