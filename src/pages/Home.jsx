import React from 'react';
import { CiUser } from 'react-icons/ci';
import { FaCodePullRequest } from "react-icons/fa6";
import { PiHoodieThin } from "react-icons/pi";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', members: 200, classes: 50, training: 30 },
  { name: 'Feb', members: 220, classes: 45, training: 25 },
  { name: 'Mar', members: 250, classes: 60, training: 40 },
  { name: 'Apr', members: 270, classes: 55, training: 35 },
  { name: 'May', members: 300, classes: 70, training: 50 },
];

function Home() {
  return (
    <>
      <div className='flex flex-row gap-3 space-x-4 mt-9 '>
        <div className='flex p-5 justify-between items-center bg-white rounded-lg w-full'>
          <div className='flex items-center gap-2'>
            <div className='p-3 bg-green-300 flex justify-center rounded-xl'>
              <CiUser size={30} color='green' />
            </div>
            <p className='font-bold text-gray-500 text-xl'>Users</p>
          </div>
          <p className='font-bold text-gray-500 text-2xl'>0</p>
        </div>

        <div className='flex p-5 justify-between items-center bg-white rounded-lg w-full'>
          <div className='flex items-center gap-2'>
            <div className='p-3 bg-blue-300 flex justify-center rounded-xl'>
              <FaCodePullRequest size={30} color='blue' />
            </div>
            <p className='font-bold text-gray-500 text-xl'>Request</p>
          </div>
          <p className='font-bold text-gray-500 text-2xl'>2</p>
        </div>

        <div className='flex p-5 justify-between items-center bg-white rounded-lg w-full'>
          <div className='flex items-center gap-2'>
            <div className='p-3 bg-gray-300 flex justify-center rounded-xl'>
              <PiHoodieThin size={30} color='grey' />
            </div>
            <p className='font-bold text-gray-500 text-xl'>Consignments</p>
          </div>
          <p className='font-bold text-gray-500 text-2xl'>4</p>
        </div>
      </div>

      <div className='flex flex-row gap-4 mt-9'>
        <div className='w-1/2'>
          <div className='bg-white p-5 rounded-lg'>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="members" fill="#82ca9d" />
                <Bar dataKey="classes" fill="#8884d8" />
                <Bar dataKey="training" fill="#ffc658" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className='w-1/2'>
          <div className='bg-white p-5 rounded-lg'>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="members" stroke="#82ca9d" />
                <Line type="monotone" dataKey="classes" stroke="#8884d8" />
                <Line type="monotone" dataKey="training" stroke="#ffc658" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
