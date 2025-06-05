import React, { useEffect, useState } from "react";
import { questionsData } from "../questionsdata";
import { getDatabase, ref, get } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { useQuestions } from "../context/questionContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuestionsList = () => {
  const { selectedQuestion, handleSelectQuestion, questionscore } =
    useQuestions();
  const [questionList, setQuestionList] = useState([]);
  const navigate = useNavigate();
  const { examCode } = useQuestions();

  useEffect(() => {
    const fetchQuestionIds = async () => {
      const db = getDatabase();
      const snapshot = await get(ref(db, `companyid/${examCode}`));

      if (snapshot.exists()) {
        const idsObject = snapshot.val();
        const ids = Object.values(idsObject);

        const matchedQuestions = questionsData.filter((question) =>
          ids.includes(question.id)
        );

        setQuestionList(matchedQuestions);
      } else {
        console.log("No data available");
      }
    };

    fetchQuestionIds();
  }, [examCode]);

  const handleSolve = (id) => {
    handleSelectQuestion(id);
    navigate(`/solve/${id}`);
  };

  const handleSubmitTest = () => {
    let totalScore = 0;
    for (const score of Object.values(questionscore)) {
      totalScore += score;
    }

    toast.success("✅ Test submitted successfully!", {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "dark",
    });

    console.log(`Final Score: ${totalScore}`);
    setTimeout(() => {
      navigate("/dashboard");
    }, 3000);
  };

  return (
    <div className="bg-[#0f0f0f] min-h-screen p-6">
      <ToastContainer />

      <div className="flex justify-center mb-6">
        <button
          className="bg-[#e60073] text-white px-8 py-3 rounded-lg shadow-md hover:bg-[#cc0066] transition duration-300"
          onClick={handleSubmitTest}
        >
          Submit Test
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {questionList.map((question) => (
          <div
            key={question.id}
            className="bg-[#1a1a1a] border border-[#ff00ff] rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300"
          >
            <h2 className="text-xl font-semibold text-white mb-2">
              {question.title}
            </h2>
            <p className="text-sm text-gray-300 mb-3">{question.description}</p>
            <div className="text-sm text-gray-400 mb-2">
              <strong>Difficulty:</strong>{" "}
              <span
                className={
                  question.difficulty === "Easy"
                    ? "text-green-400"
                    : question.difficulty === "Medium"
                    ? "text-yellow-400"
                    : "text-red-400"
                }
              >
                {question.difficulty}
              </span>
            </div>
            <div className="text-sm text-gray-400 mb-4">
              <strong>Avg Time:</strong> {question.avgTime}
            </div>
            <button
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
              onClick={() => handleSolve(question.id)}
            >
              Solve
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionsList;
