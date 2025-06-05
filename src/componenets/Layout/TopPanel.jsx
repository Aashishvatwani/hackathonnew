import React, { useState, useEffect, useRef } from "react";
import Editor from "@monaco-editor/react";
import { useQuestions } from "../../context/questionContext";
import TestResultPopup from "./TestResultPopup";
import LanguageSelector from "./LanguageSelector";
import ErrorPopup from "./ErrorPopup";
import { runCode } from "../../services/codeRunner";

const TopPanel = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [summary, setSummary] = useState({ passed: 0, failed: 0 });
  const [loading, setLoading] = useState(false);
  const [justSubmitted, setJustSubmitted] = useState(false);
  const [codeOutput, setCodeOutput] = useState("");
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [errorOccurred, setErrorOccurred] = useState(false);

  const { updateQuestionScore, language, checkTestCases } = useQuestions();
  const {
    selectedQuestion,
    testResult,
    currentCode,
    setTestResults,
    setCurrentCodeHandler,
  } = useQuestions();

  const prevResultsRef = useRef(null);

  const handleSubmit = async () => {
    setLoading(true);
    setJustSubmitted(true);
    setShowErrorPopup(false);
    setShowPopup(false);
    setCodeOutput("");
    setErrorOccurred(false);

    const inputfile = selectedQuestion.qinput;
    const output = await runCode(currentCode, language, inputfile);
    
    if (!output) {
      setCodeOutput("Error: Code execution failed.");
      setShowErrorPopup(true);
      setErrorOccurred(true);
      setLoading(false);
      setJustSubmitted(false);
      return;
    }

    setCodeOutput(output);

    const lowerOutput = output.toLowerCase();
    if (
      lowerOutput.includes("error") ||
      lowerOutput.includes("exception") ||
      lowerOutput.includes("undefined") ||
      lowerOutput.includes("segmentation fault")
    ) {
      setShowErrorPopup(true);
      setErrorOccurred(true);
      setLoading(false);
      setJustSubmitted(false);
    } else {
      setErrorOccurred(false);
      prevResultsRef.current = testResult[selectedQuestion?.id] || null;
      checkTestCases(output, selectedQuestion);
    }
  };

  useEffect(() => {
    if (
      justSubmitted &&
      !errorOccurred &&
      selectedQuestion &&
      testResult[selectedQuestion.id] &&
      testResult[selectedQuestion.id] !== prevResultsRef.current
    ) {
      const results = testResult[selectedQuestion.id];
      const passed = Object.values(results).filter((val) => val === true).length;
      const failed = Object.values(results).filter((val) => val === false).length;
      setSummary({ passed, failed });
      setShowPopup(true);
      setLoading(false);
      setJustSubmitted(false);

      const totalScore = passed * 5;
      updateQuestionScore(selectedQuestion.id, totalScore);
    }
  }, [testResult, selectedQuestion, justSubmitted, errorOccurred]);

  return (
    <div
      style={{
        background: "#282c34",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          padding: "10px",
          background: "#1e1e2f",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <LanguageSelector />
        <button
          style={{
            padding: "5px 10px",
            borderRadius: "4px",
            background: "#5A20CB",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Run
        </button>
        <button
          onClick={handleSubmit}
          style={{
            padding: "5px 10px",
            borderRadius: "4px",
            background: "#28a745",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </div>

      <div style={{ flexGrow: 1 }}>
        <Editor
          height="100%"
          width="100%"
          language="cpp"
          value={currentCode}
          onChange={(newCode) => setCurrentCodeHandler(newCode)}
          theme="vs-dark"
          options={{
            fontSize: 14,
            minimap: { enabled: false },
            automaticLayout: true,
          }}
        />
      </div>

      {loading && (
        <div style={{ color: "#fff", textAlign: "center", margin: "1rem" }}>
          Checking your code...
        </div>
      )}

      {showPopup && (
        <TestResultPopup
          passed={summary.passed}
          failed={summary.failed}
          onClose={() => setShowPopup(false)}
        />
      )}

      {showErrorPopup && (
        <ErrorPopup
          errorOutput={codeOutput}
          onClose={() => setShowErrorPopup(false)}
        />
      )}
    </div>
  );
};

export default TopPanel;
