import React from "react";

const ErrorPopup = ({ errorOutput, onClose }) => {
  if (!errorOutput) return null;

  return (
    <div
      style={{
        backgroundColor: "#1e1e2f",
        color: "#ff5252",
        padding: "1rem",
        position: "fixed",
        top: "20%",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
        width: "60%",
        border: "2px solid #ff5252",
        borderRadius: "8px",
        fontFamily: "monospace",
        whiteSpace: "pre-wrap",
        boxShadow: "0 0 10px rgba(255, 82, 82, 0.5)",
      }}
    >
      <strong>Error:</strong>
      <div style={{ marginTop: "0.5rem" }}>{errorOutput}</div>
      <button
        style={{
          marginTop: "1rem",
          padding: "5px 10px",
          backgroundColor: "#ff5252",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
};

export default ErrorPopup;
