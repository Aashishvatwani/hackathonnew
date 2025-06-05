import React, { useState } from "react";
import { motion } from "framer-motion";
import { questionsData } from "../questionsData";// Assuming your questionsData is imported from here
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'; // Import uuid for generating unique IDs
import { ref, set, getDatabase } from "firebase/database"; // Firebase Realtime Database methods
import { useAuth } from '../AuthContext'; // Import AuthContext to get current user

const SidebarSelectQuestion = () => {
  const [panelWidth, setPanelWidth] = useState(300); // Sidebar width
  const [selectedQuestions, setSelectedQuestions] = useState([]); // State to store selected questions
  const selected = false;
  const navigate = useNavigate();
  const { currentUser } = useAuth(); // Get current user from AuthContext

  const handleSolveClick1 = (questionId) => {
    handleSelectQuestion(questionId);
    navigate(`/solve/${questionId}`);
  };

  const handleResize = (e) => {
    const newWidth = Math.max(200, e.clientX); // Minimum width is 200px
    setPanelWidth(newWidth);
  };

  const handleSelectQuestion = (question) => {
    if (!selectedQuestions.some((q) => q.id === question.id)) {
      setSelectedQuestions((prev) => [...prev, question]); // Add question if not already selected
    }
  };

  const handleRemoveQuestion = (questionId) => {
    setSelectedQuestions((prev) =>
      prev.filter((question) => question.id !== questionId)
    ); // Remove question from the selected list
  };

  const handleConfirmSelection = () => {
    if (currentUser) {
      // Add unique ID to each selected question
      const updatedQuestions = selectedQuestions.map((question) => ({
        ...question,
        uniqueId: uuidv4(), // Add unique ID to each question
      }));
      setSelectedQuestions(updatedQuestions);

      // Get a reference to the Realtime Database and store the questions
      const db = getDatabase();
      const selectedQuestionsRef = ref(db, `users/${currentUser.uid}/selectedQuestions`);

      // Create a unique reference for each selected question
      updatedQuestions.forEach((question) => {
        const questionRef = ref(db, `users/${currentUser.uid}/selectedQuestions/${question.uniqueId}`);
        
        // Save each selected question to the Realtime Database
        set(questionRef,   {
          id: question.id,
          title: question.title,
          difficulty: question.difficulty,
          complexity: question.complexity,
          // Include any other data you want to store
        })
          .then(() => {
            console.log("Question saved to Realtime Database:", question);
          })
          .catch((error) => {
            console.error("Error saving question:", error);
            alert("Error saving questions!");
          });
      });

      // Alert and Confirmation
      console.log("Confirmed Questions with Unique IDs:", updatedQuestions);
      alert("Questions confirmed and saved to Realtime Database!");
    } else {
      alert("User not authenticated");
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar displaying selected questions */}
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
        <h3 className="text-white text-lg font-bold mb-4">Selected  </h3>

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

        {/* Sidebar resize handle */}
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

      {/* Main content area displaying all questions */}
      <div
        style={{
          flex: 1,
          padding: "1rem",
          backgroundImage: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)", // Beautiful gradient background
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

      {/* Confirm Button at the bottom-right */}
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
