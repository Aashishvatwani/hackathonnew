import { useState, useEffect } from "react";
import { questionsData } from "../questionsData";
import { useQuestions } from "../context/questionContext";
import { useNavigate } from "react-router-dom";

const TestFeedback = () => {
  const [questions, setQuestions] = useState([]);
  const { handleSelectQuestion } = useQuestions();
  const navigate = useNavigate();

  const handleSolveClick1 = (questionId) => {
    handleSelectQuestion(questionId);
    navigate(`/solve/${questionId}`);
  };

  useEffect(() => {
    const extractedQuestions = questionsData
      .map(({ id, title, difficulty, complexity }) => ({
        id,
        title,
        difficulty,
        complexity,
      }))
      .sort((a, b) => a.difficulty.localeCompare(b.difficulty)); // Optional sorting by difficulty

    setQuestions(extractedQuestions);
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4 text-center text-purple-400 border-b-2 border-purple-600 pb-2">
        Practise Coding Problems
      </h2>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full border border-gray-700">
          <thead>
            <tr className="bg-purple-800 text-white">
              {Object.keys(questions[0] || {}).map((header, index) => (
                <th
                  key={index}
                  className="px-4 py-2 border border-gray-700 text-center"
                >
                  {header}
                </th>
              ))}
              <th className="px-4 py-2 border border-gray-700 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {questions.length > 0 ? (
              questions.map((item) => (
                <tr
                  key={item.id}
                  className="odd:bg-gray-800 even:bg-gray-900 text-gray-200 hover:bg-gray-700 transition duration-150"
                >
                  {Object.keys(item).map((key) => (
                    <td
                      key={`${item.id}-${key}`}
                      className="px-4 py-2 border border-gray-700 text-center"
                    >
                      {key === "complexity"
                        ? `Time: ${item[key].time}, Space: ${item[key].space}`
                        : item[key]}
                    </td>
                  ))}
                  <td className="px-4 py-2 border border-gray-700 text-center">
                    <button
                      aria-label={`Attempt question ${item.title}`}
                      className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-700 transition duration-150"
                      onClick={() => handleSolveClick1(item.id)}
                    >
                      Attempt
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={Object.keys(questions[0] || {}).length + 1}
                  className="px-4 py-2 border border-gray-700 text-center text-gray-400"
                >
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TestFeedback;