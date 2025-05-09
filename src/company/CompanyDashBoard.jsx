import React from 'react';
import { useNavigate } from 'react-router-dom'; // To navigate on button click
import Logout from '../pages/Logout'
const CompanyDashboard = () => {
  const navigate = useNavigate();

  // Dummy data for students
  const studentData = [
    { id: 1, riskRatio: 'High', totalScore: 85, totalQuestions: 20 },
    { id: 2, riskRatio: 'Low', totalScore: 90, totalQuestions: 25 },
    { id: 3, riskRatio: 'Medium', totalScore: 75, totalQuestions: 18 },
  ];

  return (
    <div className="bg-darkBg p-10 min-h-screen">
      {/* Header Section */}
      <div className="w-full max-w-6xl flex justify-between items-center mb-10">
        <div>
       
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            SkillTrack Pro
          </h1>
          <p className="text-gray-300 mt-1 text-sm">Empowering Companies with Student Insights</p>
        </div>
       
      </div>

      {/* Student Data Table */}
      <div className="overflow-x-auto rounded-lg shadow-lg bg-darkBg p-5">
     
        <h2 className="text-3xl font-semibold text-violet-400 mb-6">Student Insights</h2>
        <Logout/>
        <table className="min-w-full table-auto text-white">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">Risk Ratio</th>
              <th className="py-3 px-6 text-left">Total Score</th>
              <th className="py-3 px-6 text-left">Total Questions</th>
            </tr>
          </thead>
          <tbody>
            {studentData.map((student) => (
              <tr key={student.id} className="border-b border-gray-700">
                <td className="py-3 px-6">{student.id}</td>
                <td className="py-3 px-6">{student.riskRatio}</td>
                <td className="py-3 px-6">{student.totalScore}</td>
                <td className="py-3 px-6">{student.totalQuestions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
  onClick={() => navigate("/host-test")}
  className="bg-violet-600 hover:bg-violet-700 transition-all duration-300 px-6 py-2 rounded-full mr-6 text-white font-semibold shadow-lg transform hover:scale-105 hover:shadow-2xl"
>
  Make Question Set
</button>

    </div>
  );
};

export default CompanyDashboard;
