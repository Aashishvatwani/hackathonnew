import { useState } from "react";
import { AlertTriangle, Maximize2, Minimize2 } from "lucide-react";
import SecurityBlocker from "../SecurityBlocker";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { database, ref } from "../firebaseConfig"; // Import Firebase functions
import { get } from "firebase/database";
import { useQuestions } from "../context/questionContext";

export default function PracticeInstructions({ toggleSidebar }) {
  const [riskRatio] = useState(0);
  const [testStarted, setTestStarted] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  // const { examCode, setExamCode } = QuestionsContext(); // Get examCode and setExamCode from context
  const { examCode, setExamCode } = useQuestions(); // Get examCode and setExamCode from context
  // const {questionscore,setQuestionscore,selectedQuestion} = useQuestions();


  const navigate = useNavigate(); // Initialize useNavigate

  const handleStartTest = async () => {
    if (examCode.trim() === "") {
      alert("Please enter the Exam Code before starting the test.");
      return;
    }

    try {
      // Reference to the companyid path in Firebase, checking for the examCode (e.g., "abcd")
      const companyRef = ref(database, `companyid/${examCode.trim()}`);

      // Fetch data from Firebase
      const snapshot = await get(companyRef);
      if (snapshot.exists()) {
        // If the exam code exists, store the questions and redirect to FetchData page
        const questions = snapshot.val();
        setTestStarted(true);
        navigate("/fetch-data", { state: { questions } }); // Pass questions to FetchData page
      } else {
        alert("Invalid Exam Code. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching data from Firebase:", error);
      alert("There was an error connecting to the server.");
    }
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
    if (!isFullScreen) {
      toggleSidebar(false);
    }
  };

  return (
    <div
      className={`bg-gray-900 min-h-screen w-full flex items-center justify-center p-0 m-0 ${
        isFullScreen ? "fixed inset-0 z-50" : ""
      } border border-purple-400`} // Added border classes
    >
      <div
        className={`text-white rounded-xl shadow-xl w-full max-w-4xl transition-all duration-300 ${
          isFullScreen ? "fixed inset-0 z-50 m-0 p-0" : "p-6"
        }`}
      >
        {!testStarted ? (
          <div className="w-full space-y-6">
            {/* Header Section */}
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-purple-400 tracking-wide">
                Practice Instructions
              </h2>
              <p className="text-red-400 font-medium">
                Risk Ratio: <span className="font-bold">{riskRatio}</span>
              </p>
            </div>

            {/* Instructions List */}
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-purple-200 text-base">
              {[
                "No tab switching (Risk Ratio increases if switched)",
                "No copy-pasting allowed",
                "No remote access (Detection will increase Risk Ratio)",
                "No split screen usage",
                "Certain browser extensions are blocked",
                "Tab cannot be closed until submission",
                "No screen recording or external sharing",
                "Single-person detection only (No multiple people in view)",
                "No electronic devices except the laptop",
                "AI-generated content will be checked for plagiarism",
                "The synchronized phone must have a wide-angle view of the participant",
              ].map((instruction, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-purple-400 mr-2">🔹</span>
                  <span>{instruction}</span>
                </li>
              ))}
            </ul>

            {/* Exam Code Input and Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8 sm:justify-center">
              <input
                type="text"
                value={examCode}
                onChange={(e) => setExamCode(e.target.value)} // Update examCode context
                placeholder="Enter Exam Code"
                className="px-4 py-2 border border-gray-300 rounded-lg text-black w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
              />
              <button
                onClick={handleStartTest}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg text-lg font-semibold w-full sm:w-auto transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Attempt Test
              </button>
            </div>
          </div>
        ) : (
          <div
            className={`flex flex-col w-full h-full ${
              isFullScreen
                ? "fixed inset-0 z-50 bg-gray-900 p-0 m-0"
                : "relative"
            }`}
          >
            <SecurityBlocker />
            <div className="flex justify-between items-center bg-gray-800 p-3 rounded-t-lg">
              <div className="flex items-center text-red-400">
                <AlertTriangle className="mr-2" size={20} />
                <span className="text-sm font-medium">
                  Warning: Any violations will increase your risk ratio!
                </span>
              </div>
              <button
                onClick={toggleFullScreen}
                className="text-purple-400 hover:text-purple-300 p-2 rounded-lg transition-colors"
                title={isFullScreen ? "Exit full screen" : "Enter full screen"}
              >
                {isFullScreen ? (
                  <Minimize2 size={20} />
                ) : (
                  <Maximize2 size={20} />
                )}
              </button>
            </div>

            <iframe
              src="http://localhost:5174/"
              title="Test Window"
              className="w-full h-screen rounded-b-lg"
              allow="camera; microphone; fullscreen"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}
