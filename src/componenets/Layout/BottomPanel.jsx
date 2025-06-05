// import React, { useState, useEffect } from "react";
// import { useQuestions } from "../../context/questionContext";
// import "./BottomPanel.css";

// const BottomPanel = () => {
//   const { selectedQuestion, testResult } = useQuestions();
//   const [selectedTestCaseIndex, setSelectedTestCaseIndex] = useState(0);

//   useEffect(() => {
//     setSelectedTestCaseIndex(0);
//   }, [selectedQuestion]);

//   if (!selectedQuestion || !selectedQuestion.testCases) {
//     return (
//       <div className="no-test-cases">
//         <p>No test cases available.</p>
//       </div>
//     );
//   }

//   const selectedTestCase = selectedQuestion.testCases[selectedTestCaseIndex];
//   const resultForQuestion = testResult?.[String(selectedQuestion.id)] || {};
//   const testKey = `Test ${selectedTestCaseIndex + 1}`;
//   const testResultDetails = resultForQuestion[testKey] || {};

//   return (
//     <div className="bottom-panel">
//       {/* Test Case Selector */}
//       <div className="test-case-selector">
//         <label>Test Case:</label>
//         <div className="test-case-buttons">
//           {selectedQuestion.testCases.map((_, index) => {
//             const key = `Test ${index + 1}`;
//             const passed = resultForQuestion[key];

//             return (
//               <button
//                 key={index}
//                 className={`test-case-btn 
//                   ${selectedTestCaseIndex === index ? "active" : ""} 
//                   ${passed === true ? "pass" : passed === false ? "fail" : ""}`}
//                 onClick={() => setSelectedTestCaseIndex(index)}
//               >
//                 {index + 1}
//               </button>
//             );
//           })}
//         </div>
//       </div>

//       {/* Test Case Details */}
//       <div className="test-case-details">
//         <div className="detail-row">
//           <strong>Input:</strong>
//           <div className="input-grid">
//             {Object.entries(selectedTestCase.input)
//               .slice(0, 3) // Only first 3 inputs
//               .map(([key, value], idx) => (
//                 <div className="input-item" key={idx}>
//                   <span className="input-key"><strong>{key}:</strong></span>
//                   <span className="input-value">
//                     {typeof value === "string" && value.trim().startsWith("[")
//                       ? JSON.stringify(JSON.parse(value))
//                       : String(value)}
//                   </span>
//                 </div>
//               ))}
//           </div>
//         </div>

//         <div className="detail-row">
//           <strong>Expected Output:</strong>
//           <span>{JSON.stringify(selectedTestCase.output)}</span>
//         </div>

//         {/* Error Display */}
//         {testResultDetails?.error && (
//           <div className="detail-row error-display">
//             <strong>Error:</strong>
//             <pre>{testResultDetails.error}</pre>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BottomPanel;


import React, { useState, useEffect } from "react";
import { useQuestions } from "../../context/questionContext";
import "./BottomPanel.css";

const BottomPanel = () => {
  const { selectedQuestion, testResult } = useQuestions();
  const [selectedTestCaseIndex, setSelectedTestCaseIndex] = useState(0);

  useEffect(() => {
    setSelectedTestCaseIndex(0);
  }, [selectedQuestion]);

  if (!selectedQuestion || !selectedQuestion.testCases) {
    return (
      <div className="no-test-cases">
        <p>No test cases available.</p>
      </div>
    );
  }

  const selectedTestCase = selectedQuestion.testCases[selectedTestCaseIndex];
  const resultForQuestion = testResult?.[String(selectedQuestion.id)] || {};
  const testKey = `Test ${selectedTestCaseIndex + 1}`;
  const testResultDetails = resultForQuestion[testKey] || {};

  return (
    <div className="bottom-panel">
      {/* Test Case Selector */}
      <div className="test-case-selector">
        <label>Test Case:</label>
        <div className="test-case-buttons">
          {selectedQuestion.testCases.map((_, index) => {
            const key = `Test ${index + 1}`;
            const passed = resultForQuestion[key];

            return (
              <button
                key={index}
                className={`test-case-btn 
                  ${selectedTestCaseIndex === index ? "active" : ""} 
                  ${passed === true ? "pass" : passed === false ? "fail" : ""}`}
                onClick={() => setSelectedTestCaseIndex(index)}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Test Case Details */}
      <div className="test-case-details">
        <div className="detail-row">
          <strong>Input:</strong>
          <div className="input-grid">
            {Object.entries(selectedTestCase.input)
              .slice(0, 3) // Only first 3 inputs
              .map(([key, value], idx) => (
                <div className="input-item" key={idx}>
                  <span className="input-key"><strong>{key}:</strong></span>
                  <span className="input-value">
                    {typeof value === "string" && value.trim().startsWith("[")
                      ? JSON.stringify(JSON.parse(value))
                      : String(value)}
                  </span>
                </div>
              ))}
          </div>
        </div>

        <div className="detail-row">
          <strong>Expected Output:</strong>
          <span>{JSON.stringify(selectedTestCase.output)}</span>
        </div>

        {/* Error Display */}
        {testResultDetails?.error && (
          <div className="detail-row error-display">
            <strong>Error:</strong>
            <pre>{testResultDetails.error}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default BottomPanel;