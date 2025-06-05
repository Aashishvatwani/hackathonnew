import React, { use, useContext } from "react";
import { useQuestions } from "../../context/questionContext";

const LanguageSelector = () => {
  const { language,updateLang } = useQuestions();

  const languageMap = {
    python: "Python 3",
    java: "Java",
    c: "C",
    cpp: "C++",
  };

  const handleChange = (e) => {
    updateLang(e.target.value);
  };

  return (
    <div className="mb-4">
      <label htmlFor="language" className="block font-semibold mb-1">
        Select Language:
      </label>
      
      <select
        id="language"
        value={language}
        onChange={handleChange}
        className="border rounded px-3 py-2 w-full"
         style={{
        backgroundColor: '#000',
        color: '#fff',
        padding: '2px',
        borderRadius: '4px',
        border: '1px solid #444',
        fontSize: '12px',
        marginbottom: '-30px',
        marginTop: '-30px',
      }}
      >
        {Object.entries(languageMap).map(([key, label]) => (
          <option key={key} value={key}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
