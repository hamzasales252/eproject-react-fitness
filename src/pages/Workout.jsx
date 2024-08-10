import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa'; // Import the trash icon from react-icons
import * as Yup from 'Yup'; //
function Workout() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    Sets: '',
    Reps: '',
    Weight: '',
    Notes: '',
  });
  const [workouts, setWorkouts] = useState([
    { name: 'John Doe', Sets: '3', Reps: '10', Weight: '50kg', Notes: 'Keep back straight' },
    { name: 'Jane Smith', Sets: '4', Reps: '8', Weight: '60kg', Notes: 'Increase weight gradually' },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setWorkouts([...workouts, formData]);
    setFormData({ name: '', Sets: '', Reps: '', Weight: '', Notes: '' });
    setIsModalOpen(false);
  };

  const handleDelete = (index) => {
    const newWorkouts = workouts.filter((_, i) => i !== index);
    setWorkouts(newWorkouts);
    setIsDeleteModalOpen(false);
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
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
            {workouts.map((workout, index) => (
              <tr key={index}>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">{workout.name}</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">{workout.Sets}</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">{workout.Reps}</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">{workout.Weight}</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">{workout.Notes}</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">
                  <button
                    onClick={() => {
                      setIsDeleteModalOpen(true);
                      setDeleteIndex(index);
                    }}
                    className="text-red-500 hover:text-red-700 focus:outline-none"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50 dark:bg-opacity-70">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-2xl p-6 mx-4 my-10">
            <h2 className="text-xl text-black font-semibold mb-4 dark:text-white">Create New Workout</h2>
           <Formik initialValues={{name:'',Sets:'',Reps:'',Weight:'',Notes:''}}
           validationSchema={
            Yup.object({
              name: Yup.string().required(),
              Sets: Yup.number().required(),
              Reps:Yup.number().required(),
              Weight:Yup.number().required(),
              Notes:Yup.string().required(),
            })
           }
           onSubmit={async(values)=>{
            const token = localStorage.getItem('token'); 
            await axios.post(`${API_URL}workout/create`,values,{
              headers: {
                Authorization: `Bearer ${token}`
            }
            })
            .then((response)=>{
                fetchUser();
                toast.success("Submitted successfully")
               
                setIsModalOpen(false)
            
            })
            .catch((error)=>{
              toast.error(error.response.data.message)
            })
          }}
           >
            <Form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-left">Name</label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="Sets" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-left">Sets</label>
                <Field
                  type="number"
                  id="Sets"
                  name="Sets"
                 
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="Reps" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-left">Reps</label>
                <Field
                  type="number"
                  id="Reps"
                  name="Reps"
                 
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="Weight" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-left">Weight</label>
                <Field
                  type="number"
                  id="Weight"
                  name="Weight"
                 step="any"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="Notes" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-left">Notes</label>
                <Field
                  type="text"
                  id="Notes"
                  name="Notes"
                 
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
            </Form>
            </Formik>
          </div>
        </div>
      )}
      {isDeleteModalOpen && (
               <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50 dark:bg-opacity-70">
               <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-md p-6 mx-4 my-10">
                 <h2 className="text-xl text-black font-semibold mb-4 dark:text-white">Are you sure you want to delete this workout?</h2>
                 <div className="flex justify-end space-x-4">
                   <button
                     type="button"
                     onClick={() => setIsDeleteModalOpen(false)}
                     className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                   >
                     Cancel
                   </button>
                   <button
                     type="button"
                     onClick={() => handleDelete(deleteIndex)}
                     className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 dark:focus:ring-red-600 dark:bg-red-600 dark:hover:bg-red-700"
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
     
     export default Workout;
     