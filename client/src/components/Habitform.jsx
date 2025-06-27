import React, { useState } from 'react';
import './Habitform.css'; // Custom CSS for shake animation

export const Habitform = () => {
  const [form, setForm] = useState({
    plan: '',
    description: '',
    day: '',
    category: '',
    startDate: '',
    endDate: '',
    schedule: ''
  });

  const [shake, setShake] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const hasEmpty = Object.values(form).some((value) => value === '');
    if (hasEmpty) {
      setShake(true);
      setTimeout(() => setShake(false), 500); // Reset shake after animation
    } else {
      alert('Form Submitted Successfully!');
      // Add your submit logic here
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 px-4">
      <div className="bg-white border border-gray-300 rounded-xl p-8 w-full max-w-4xl shadow-md">
        <h2 className="text-4xl font-extrabold text-center mb-6">
          <span className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600">H</span>
          ABIT FORM
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="bg-gray-100 p-6 rounded-lg shadow-inner space-y-4">
            <div>
              <label className="block font-semibold mb-1">Today Plan</label>
              <input type="text" name="plan" value={form.plan} onChange={handleChange} placeholder="Enter the habit" className="w-full p-2 border rounded-md" />
            </div>

            <div>
              <label className="block font-semibold mb-1">Description</label>
              <input type="text" name="description" value={form.description} onChange={handleChange} placeholder="Enter habit description" className="w-full p-2 border rounded-md" />
            </div>

            <div>
              <label className="block font-semibold mb-1">Day of the Week</label>
              <select name="day" value={form.day} onChange={handleChange} className="w-full p-2 border rounded-md">
                <option value="">Select</option>
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
                <option>Saturday</option>
                <option>Sunday</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-1 text-gray-700">Category</label>
              <select name="category" value={form.category} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option value="">Select a category</option>
                <option>Health</option>
                <option>Running</option>
                <option>Study</option>
                <option>Meditation</option>
                <option>Fitness</option>
                <option>Reading</option>
                <option>Custom</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold mb-1">Start Date</label>
                <input type="date" name="startDate" value={form.startDate} onChange={handleChange} className="w-full p-2 border rounded-md" />
              </div>
              <div>
                <label className="block font-semibold mb-1">End Date</label>
                <input type="date" name="endDate" value={form.endDate} onChange={handleChange} className="w-full p-2 border rounded-md" />
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-1">Schedule Date</label>
              <input type="datetime-local" name="schedule" value={form.schedule} onChange={handleChange} className="w-full p-2 border rounded-md" />
            </div>

            <div className="flex justify-between pt-4">
              <button
                type="submit"
                className={`${
                  shake ? 'shake' : ''
                } bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition duration-200 font-semibold`}
              >
                Submit
              </button>
              <button
                type="reset"
                className="bg-gradient-to-r from-red-400 to-red-600 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition duration-200 font-semibold"
                onClick={() => setForm({
                  plan: '',
                  description: '',
                  day: '',
                  category: '',
                  startDate: '',
                  endDate: '',
                  schedule: ''
                })}
              >
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Habitform;
