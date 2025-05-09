import React, { useState } from "react";
import { motion } from "framer-motion";
import { questionsData } from "../questionsdata";
import { useNavigate } from 'react-router-dom';
import { ref, set, getDatabase } from "firebase/database";
import { useAuth } from '../AuthContext';

const SidebarSelectQuestion = () => {
  const [panelWidth, setPanelWidth] = useState(300);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const handleSolveClick1 = (questionId) => {
    handleSelectQuestion(questionId);
    navigate(`/solve/${questionId}`);
  };

  const handleResize = (e) => {
    const newWidth = Math.max(200, e.clientX);
    setPanelWidth(newWidth);
  };

  const handleSelectQuestion = (question) => {
    if (!selectedQuestions.some((q) => q.id === question.id)) {
      setSelectedQuestions((prev) => [...prev, question]);
    }
  };

  const handleRemoveQuestion = (questionId) => {
    setSelectedQuestions((prev) =>
      prev.filter((question) => question.id !== questionId)
    );
  };

  const handleConfirmSelection = () => {
    if (currentUser) {
      if (selectedQuestions.length === 0) {
        alert("Please select at least one question.");
        return;
      }

      // Generate a 4-character alphanumeric ID
      const packageId = Math.random().toString(36).substring(2, 6).toUpperCase();

      // Prepare question data as qid1: 1, qid2: 2, ...
      const questionData = {};
      selectedQuestions.forEach((question, index) => {
        questionData[`qid${index + 1}`] = question.id;
      });

      const db = getDatabase();
      const packageRef = ref(db, `companyid/${packageId}`);

      // Save to Firebase
      set(packageRef, questionData)
        .then(() => {
          console.log("Questions saved to Firebase under companyid:", packageId);
          alert(`Questions saved under Package ID: ${packageId}`);
        })
        .catch((error) => {
          console.error("Error saving questions:", error);
          alert("Failed to save questions!");
        });
    } else {
      alert("User not authenticated");
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        style={{
          width: panelWidth,
          backgroundColor: "#1e1e2f",
          overflowY: "auto",
          padding: "1rem",
          position: "relative",
        }}
      >
        <h3 className="text-white text-lg font-bold mb-4">Selected Questions</h3>
        {selectedQuestions.length > 0 ? (
          selectedQuestions.map((question) => (
            <div
              key={question.id}
              className="bg-gray-700 text-white p-4 rounded-lg mb-4 shadow-md"
            >
              <h4 className="font-semibold text-xl">{question.title}</h4>
              <p className="text-sm text-gray-400">Difficulty: {question.difficulty}</p>
              <p className="text-sm text-gray-400">
                Time: {question.complexity?.time}, Space: {question.complexity?.space}
              </p>
              <button
                onClick={() => handleRemoveQuestion(question.id)}
                className="bg-red-500 text-white py-1 px-4 mt-4 rounded hover:bg-red-600 transition"
              >
                Remove
              </button>
              <button
                onClick={() => handleSolveClick1(question.id)}
                className="bg-green-500 text-white py-1 px-4 mt-4 rounded hover:bg-green-400 transition"
              >
                Attempt
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No questions selected.</p>
        )}

        {/* Resize handle */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "5px",
            height: "100%",
            cursor: "ew-resize",
            backgroundColor: "darkgrey",
          }}
          onMouseDown={(e) => {
            e.preventDefault();
            document.addEventListener("mousemove", handleResize);
            document.addEventListener("mouseup", () => {
              document.removeEventListener("mousemove", handleResize);
            });
          }}
        ></div>
      </motion.div>

      {/* Main content */}
      <div
        style={{
          flex: 1,
          padding: "1rem",
          backgroundImage: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
          color: "#fff",
        }}
      >
        <h3 className="text-lg font-semibold text-white mb-4">All Coding Questions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {questionsData.map((question) => (
            <div
              key={question.id}
              className="bg-gray-800 text-white p-6 rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-all"
            >
              <h4 className="font-semibold text-xl mb-2">{question.title}</h4>
              <p className="text-sm text-gray-400">Difficulty: {question.difficulty}</p>
              <button
                onClick={() => handleSelectQuestion(question)}
                className="bg-blue-500 text-white py-1 px-4 mt-4 rounded hover:bg-blue-600 transition"
              >
                {selectedQuestions.some((q) => q.id === question.id) ? "Selected" : "Select"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Confirm button */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
        }}
      >
        <button
          onClick={handleConfirmSelection}
          className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 scale-110 transition"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default SidebarSelectQuestion;
