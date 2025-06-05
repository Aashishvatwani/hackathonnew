import axios from "axios";

const PISTON_API_URL = "https://emkc.org/api/v2/piston/execute";

const languageMap = {
  javascript: "node",
  python: "python3",
  java: "java",
  c: "c",
  cpp: "cpp",
};

export const runCode = async (code, language,input) => {

  try {
    
    // console.log("Running code:", code);
    const language_id = languageMap[language] || "node";

    const { data } = await axios.post(
      PISTON_API_URL,
      {
        language: language,
        version: "*",
        files: [{ content: code }],
        stdin: input || "", // Use input if provided, otherwise default to empty string
      },
      { // Added headers here
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    await data;

    if (data.run.stdout) return data.run.stdout;
    if (data.run.stderr) return data.run.stderr;
    return "No output received.";
  } catch (error) {
    console.error("error running code:", error);
    if (error.response) {
      return `Error: ${error.response.status} - ${error.response.data.message || error.response.statusText}`;
    }
    return `Error: ${error.message}`;
  }
};