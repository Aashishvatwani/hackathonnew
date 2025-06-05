import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useQuestions } from "../../context/questionContext";
import ReactMarkdown from "react-markdown";

const LeftPanel = () => {
  const { selectedQuestion } = useQuestions();

  if (!selectedQuestion) {
    return (
      <div
        className="container-fluid text-white p-4 d-flex justify-content-center align-items-center"
        style={{
          backgroundColor: "#181818",
          height: "100vh",
        }}
      >
        <div
          className="border rounded p-5 text-center"
          style={{
            backgroundColor: "#222232",
            borderColor: "#444",
            minWidth: 280,
          }}
        >
          <p className="text-light fs-5 mb-0">Select a question to view details.</p>
        </div>
      </div>
    );
  }

  const formatText = (text) => {
    try {
      return text
        .replace(/\\n/g, '\n')
        .replace(/\\t/g, '\t')
        .replace(/\\r/g, '\r');
    } catch {
      return text;
    }
  };

  return (
    <div
      className="container-fluid text-white p-4"
      style={{
        backgroundColor: "#181818",
        height: "100vh",
        overflowY: "auto",
      }}
    >
      <div
        className="border rounded p-4 d-flex flex-column"
        style={{
          backgroundColor: "#222232",
          borderColor: "#444",
          minHeight: "90vh",
        }}
      >
        <h3 className="fw-bold text-light mb-4" style={{ fontSize: "1.8rem" }}>
          {selectedQuestion.id}. {selectedQuestion.title}
        </h3>

        <div className="d-flex flex-wrap align-items-center mb-4 gap-2">
          <span className="badge rounded-pill bg-warning text-dark" style={{ fontSize: "0.85rem", padding: "0.4rem 0.9rem" }}>
            {selectedQuestion.difficulty}
          </span>
          <span className="badge rounded-pill bg-secondary" style={{ fontSize: "0.85rem", padding: "0.4rem 0.9rem" }}>
            Time: {selectedQuestion.complexity.time} | Space: {selectedQuestion.complexity.space}
          </span>
          {selectedQuestion.avgTime && (
            <span className="badge rounded-pill bg-info text-dark" style={{ fontSize: "0.85rem", padding: "0.4rem 0.9rem" }}>
              Avg Time: {selectedQuestion.avgTime}
            </span>
          )}
        </div>

        <div className="text-light mb-4" style={{ fontSize: "1rem", lineHeight: 1.6 }}>
          <ReactMarkdown>{selectedQuestion.description}</ReactMarkdown>
        </div>

        {selectedQuestion.inputFormat && (
          <section className="mb-4">
            <h5 className="text-light mb-2" style={{ borderBottom: "2px solid #444", paddingBottom: "0.3rem", fontWeight: "600" }}>
              Input Format:
            </h5>
            <div style={{ fontSize: "1rem", lineHeight: 1.6 }}>
              <ReactMarkdown>{selectedQuestion.inputFormat}</ReactMarkdown>
            </div>
          </section>
        )}

        {selectedQuestion.outputFormat && (
          <section className="mb-4">
            <h5 className="text-light mb-2" style={{ borderBottom: "2px solid #444", paddingBottom: "0.3rem", fontWeight: "600" }}>
              Output Format:
            </h5>
            <div style={{ fontSize: "1rem", lineHeight: 1.6 }}>
              <ReactMarkdown>{selectedQuestion.outputFormat}</ReactMarkdown>
            </div>
          </section>
        )}

        <section className="mb-4">
          <h5 className="text-light mb-2" style={{ borderBottom: "2px solid #444", paddingBottom: "0.3rem", fontWeight: "600" }}>
            Example Input:
          </h5>
          <pre
            style={{
              backgroundColor: "#111",
              padding: "1rem",
              borderRadius: "6px",
              fontSize: "0.9rem",
              whiteSpace: "pre",
              fontFamily: "'Source Code Pro', monospace",
              maxHeight: "200px",
              overflowY: "auto",
              color: "#d4d4d4",
            }}
          >
            {formatText(selectedQuestion.qinput.trim())}
          </pre>
        </section>

        <section>
          <h5 className="text-light mb-2" style={{ borderBottom: "2px solid #444", paddingBottom: "0.3rem", fontWeight: "600" }}>
            Example Output:
          </h5>
          <pre
            style={{
              backgroundColor: "#111",
              padding: "1rem",
              borderRadius: "6px",
              fontSize: "0.9rem",
              whiteSpace: "pre",
              fontFamily: "'Source Code Pro', monospace",
              maxHeight: "200px",
              overflowY: "auto",
              color: "#d4d4d4",
            }}
          >
            {formatText(selectedQuestion.expectedOutput.trim())}
          </pre>
        </section>
      </div>
    </div>
  );
};

export default LeftPanel;
