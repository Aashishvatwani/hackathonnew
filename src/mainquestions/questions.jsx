import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useQuestions } from "../context/questionContext";
import { useNavigate } from "react-router-dom";
import "./Questions.css"; // Import a dedicated CSS file

// Helper function to get difficulty badge class
const getDifficultyClass = (difficulty) => {
  switch (difficulty?.toLowerCase()) {
    case "easy":
      return "badge bg-success text-dark-emphasis"; // Brighter green for dark theme
    case "medium":
      return "badge bg-warning text-dark-emphasis"; // Standard warning yellow
    case "hard":
      return "badge bg-danger text-dark-emphasis"; // Standard danger red
    default:
      return "badge bg-secondary"; // Default grey
  }
};

const Questions = () => {
  const { questionsData, handleSelectQuestion } = useQuestions();
  const navigate = useNavigate();

  const handleSolveClick = (questionId) => {
    handleSelectQuestion(questionId);
    navigate(`/solve/${questionId}`);
  };

  return (
    <div className="questions-container">
      <h1 className="questions-title">Coding Challenges</h1>
      <div className="questions-list">
        {questionsData.map((question) => (
          <div
            key={question.id}
            className="question-card"
            onClick={() => handleSolveClick(question.id)} // Make the whole card clickable
          >
            <div className="card-header">
              <h4 className="question-title">
                {question.id}. {question.title}
              </h4>
              <span
                className={`difficulty-badge ${getDifficultyClass(
                  question.difficulty
                )}`}
              >
                {question.difficulty}
              </span>
            </div>
            <p className="question-description">{question.description}</p>
            <div className="question-details">
              <div className="detail-item">
                <strong>Avg Time:</strong> {question.avgTime || "N/A"}
              </div>
              <div className="detail-item">
                <strong>Time:</strong> O({question.complexity?.time || "?"})
              </div>
              <div className="detail-item">
                <strong>Space:</strong> O({question.complexity?.space || "?"})
              </div>
            </div>
            {/* Removed the explicit button, the whole card is clickable */}
            {/* If you still want an explicit button, uncomment below and remove onClick from the main div */}
            {/* <button
              className="btn btn-solve btn-sm"
              onClick={(e) => {
                 e.stopPropagation(); // Prevent card click when button is clicked
                 handleSolveClick(question.id);
              }}
            >
              Solve Challenge
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { questionsData } from "../questionsData";
// import { useNavigate } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";
// import { ref, set, getDatabase } from "firebase/database";
// import { useAuth } from "../AuthContext";

// const SidebarSelectQuestion = () => {
//   const [panelWidth, setPanelWidth] = useState(300);
//   const [selectedQuestions, setSelectedQuestions] = useState([]);
//   const navigate = useNavigate();
//   const { currentUser } = useAuth();

//   const handleSolveClick1 = (questionId) => {
//     handleSelectQuestion(questionsData.find(q => q.id === questionId));
//     navigate(`/solve/${questionId}`);
//   };

//   const handleResize = (e) => {
//     const newWidth = Math.max(200, e.clientX);
//     setPanelWidth(newWidth);
//   };

//   const handleSelectQuestion = (question) => {
//     if (!selectedQuestions.some((q) => q.id === question.id)) {
//       setSelectedQuestions((prev) => [...prev, question]);
//     }
//   };

//   const handleRemoveQuestion = (questionId) => {
//     setSelectedQuestions((prev) =>
//       prev.filter((question) => question.id !== questionId)
//     );
//   };

//   const handleConfirmSelection = () => {
//     if (currentUser) {
//       const updatedQuestions = selectedQuestions.map((question) => ({
//         ...question,
//         uniqueId: uuidv4(),
//       }));

//       setSelectedQuestions(updatedQuestions);

//       const db = getDatabase();

//       updatedQuestions.forEach((question) => {
//         const questionRef = ref(
//           db,
//           `users/${currentUser.uid}/selectedQuestions/${question.uniqueId}`
//         );

//         set(questionRef, {
//           id: question.id,
//           title: question.title,
//           difficulty: question.difficulty,
//           complexity: question.complexity,
//         })
//           .then(() => {
//             console.log("Question saved to Realtime Database:", question);
//           })
//           .catch((error) => {
//             console.error("Error saving question:", error);
//             alert("Error saving questions!");
//           });
//       });

//       alert("Questions confirmed and saved to Realtime Database!");
//     } else {
//       alert("User not authenticated");
//     }
//   };

//   return (
//     <div style={{ display: "flex", height: "100vh" }}>
//       {/* Sidebar */}
//       <motion.div
//         initial={{ x: -300 }}
//         animate={{ x: 0 }}
//         transition={{ type: "spring", stiffness: 100 }}
//         style={{
//           width: panelWidth,
//           backgroundColor: "#1e1e2f",
//           overflowY: "auto",
//           padding: "1rem",
//           position: "relative",
//         }}
//       >
//         <h3 className="text-white text-lg font-bold mb-4">Selected</h3>

//         {selectedQuestions.length > 0 ? (
//           selectedQuestions.map((question) => (
//             <div
//               key={question.id}
//               className="bg-gray-700 text-white p-4 rounded-lg mb-4 shadow-md"
//             >
//               <h4 className="font-semibold text-xl">{question.title}</h4>
//               <p className="text-sm text-gray-400">
//                 Difficulty: {question.difficulty}
//               </p>
//               <p className="text-sm text-gray-400">
//                 Time: {question.complexity?.time}, Space:{" "}
//                 {question.complexity?.space}
//               </p>
//               <button
//                 onClick={() => handleRemoveQuestion(question.id)}
//                 className="bg-red-500 text-white py-1 px-4 mt-4 rounded hover:bg-red-600 transition"
//               >
//                 Remove
//               </button>
//               <button
//                 onClick={() => handleSolveClick1(question.id)}
//                 className="bg-green-500 text-white py-1 px-4 mt-4 ml-2 rounded hover:bg-green-400 transition"
//               >
//                 Attempt
//               </button>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-400">No questions selected.</p>
//         )}

//         {/* Resize handle */}
//         <div
//           style={{
//             position: "absolute",
//             top: 0,
//             right: 0,
//             width: "5px",
//             height: "100%",
//             cursor: "ew-resize",
//             backgroundColor: "darkgrey",
//           }}
//           onMouseDown={(e) => {
//             e.preventDefault();
//             document.addEventListener("mousemove", handleResize);
//             document.addEventListener("mouseup", () => {
//               document.removeEventListener("mousemove", handleResize);
//             });
//           }}
//         ></div>
//       </motion.div>

//       {/* Main content */}
//       <div
//         style={{
//           flex: 1,
//           padding: "1rem",
//           backgroundImage: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
//           color: "#fff",
//           overflowY: "auto",
//         }}
//       >
//         <h3 className="text-lg font-semibold text-white mb-4">
//           All Coding Questions
//         </h3>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {questionsData.map((question) => (
//             <div
//               key={question.id}
//               className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300"
//             >
//               <h4 className="text-xl font-bold">{question.title}</h4>
//               <p className="text-sm text-gray-300">
//                 Difficulty: {question.difficulty}
//               </p>
//               <p className="text-sm text-gray-400 mt-1">
//                 Time: {question.complexity?.time} | Space:{" "}
//                 {question.complexity?.space}
//               </p>
//               <button
//                 onClick={() => handleSelectQuestion(question)}
//                 className="bg-blue-500 text-white py-1 px-4 mt-4 rounded hover:bg-blue-600 transition"
//               >
//                 Select
//               </button>
//               <button
//                 onClick={() => handleSolveClick1(question.id)}
//                 className="bg-green-500 text-white py-1 px-4 mt-2 rounded hover:bg-green-400 transition ml-2"
//               >
//                 Solve
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* Confirm button */}
//         {selectedQuestions.length > 0 && (
//           <div className="mt-8 text-center">
//             <button
//               onClick={handleConfirmSelection}
//               className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded shadow-lg transition"
//             >
//               Confirm Selected Questions
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SidebarSelectQuestion;

