import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuestions } from "../context/questionContext";
import LeftPanel from "../componenets/Layout/LeftPanel";
import TopPanel from "../componenets/Layout/TopPanel";

const SolvePage = () => {
  const { id } = useParams();
  const { handleSelectQuestion, selectedQuestion } = useQuestions();

  useEffect(() => {
    handleSelectQuestion(Number(id));
    // eslint-disable-next-line
  }, [id]);

  if (!selectedQuestion) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh", background: "#181818" }}
      >
        <div className="text-white fs-4">Question not found.</div>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ width: "40%", minWidth: 350, maxWidth: 600 }}>
        <LeftPanel />
      </div>
      <div style={{ flex: 1 }}>
        <TopPanel />
      </div>
    </div>
  );
};

export default SolvePage;