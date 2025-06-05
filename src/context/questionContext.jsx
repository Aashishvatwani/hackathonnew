import React, { createContext, useState, useEffect, useContext } from "react";
// import { questionsData } from "../questionsData";
import { questionsData } from "../questionsData";
import { runCode } from "../services/codeRunner.js";
const QuestionsContext = createContext();

export const QuestionsProvider = ({ children }) => {
  const [selectedQuestion, setSelectedQuestion] = useState(
    questionsData[0] || null
  ); // Set the first object as default
  const [currentCode, setCurrentCode] = useState(
    "//Start writing your code here..."
  ); // Store current code
  const [testResult, setTestResults] = useState({});
  const [examCode, setExamCode] = useState("");
  const [language, setLanguage] = useState("cpp");

  const updateLang = (lang) => {
    setLanguage(lang);
    console.log("Language set to:", lang);
  };

  const [questionscore, setQuestionscore] = useState({});
  const updateQuestionScore = (questionId, score) => {
    console.log("Updating score for question:", questionId, "Score:", score);
   
    setQuestionscore((prevScores) => {
      const updatedScores = {
        ...prevScores,
        [questionId]: score,
      };
      console.log("Updated Question Scores:", updatedScores);
      return updatedScores;
    });
  };
  useEffect(() =>{
    if (selectedQuestion && selectedQuestion.id) {
      const storedCode = localStorage.getItem(`code_${selectedQuestion.id}`);
      if (storedCode) {
        setCurrentCode(storedCode);
      } else {
        setCurrentCode("//Start writing your code here...");
      }
    }
  }, [selectedQuestion]);

  const setCurrentCodeHandler = (code) => {
    setCurrentCode(code);
    if(selectedQuestion && selectedQuestion.id) {
     localStorage.setItem(`code_${selectedQuestion.id}`, code);
    }
  };
  async function generateCppWithTests(userCode, testCases, codeTemplate) {
    console.log(userCode, selectedQuestion.id);

    console.log(finalCode);

    const output = await runCode(finalCode, language);
    console.log("Output:", output);
    if(output){
      testCases(output, selectedQuestion);
    }else{
      console.error("No output received from the code execution.");
    }
   
  }



const checkTestCases = (userOutput, selectedQuestion) => {
  // Split both outputs into lines and trim whitespace
  const expected = selectedQuestion.expectedOutput
    .trim()
    .split('\n')
    .map(line => line.trim());
  const actual = userOutput
    .trim()
    .split('\n')
    .map(line => line.trim());

  let passed = 0, failed = 0;
  const results = {};

  for (let i = 0; i < expected.length; i++) {
    if (actual[i] === expected[i]) {
      passed++;
      results[`Test ${i + 1}`] = true;
    } else {
      failed++;
      results[`Test ${i + 1}`] = false;
    }
  }

  // Update testResult state for this question
  setTestResults(prev => ({
    ...prev,
    [selectedQuestion.id]: results,
  }));

  console.log(`Passed: ${passed}, Failed: ${failed}`);
    console.log("Current test case object:",testResult);
  return { passed, failed };
  };
  const handleSelectQuestion = (questionId) => {
    const question = questionsData.find((q) => q.id === questionId);
    // console.log(question);
    setSelectedQuestion(question);
    };

  return (
    <QuestionsContext.Provider
      value={{
        // updateExpectedAndCode,
        selectedQuestion,
        setSelectedQuestion,
        currentCode,
        setCurrentCode, // Expose function to update code
        questionsData,
        examCode,
        setExamCode,
        updateLang,
        language,
        questionscore,
        setQuestionscore,
        testResult,
        setTestResults,
        updateQuestionScore,
        handleSelectQuestion,
        setCurrentCodeHandler,
        checkTestCases,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
};

export const useQuestions = () => {
  return useContext(QuestionsContext);
};

