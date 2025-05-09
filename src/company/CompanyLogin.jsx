import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useNavigate,useLocation } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { ref, set } from "firebase/database";
import { auth, database } from "../firebaseConfig";
import { useAuth } from '../AuthContext';

const CompanyLoginPage = () => {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [waveData, setWaveData] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { currentUser, setCurrentUser } = useAuth(); // You can now use currentUser
  const from = location.state?.from?.pathname || "/dashboard";
  // Track window resize
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Initialize wave parameters
  useEffect(() => {
    const numberOfWaves = 5;
    const initial = Array.from({ length: numberOfWaves }, (_, i) => ({
      id: i,  
      amplitude: Math.random() * 20 + 30,
      frequency: Math.random() * 0.02 + 0.01,
      phase: Math.random() * 2 * Math.PI,
      speed: Math.random() * 0.5 + 0.5,
      opacity: Math.random() * 0.3 + 0.2,
      color: `rgba(124, 58, 237, ${Math.random() * 0.4 + 0.2})`,
    }));
    setWaveData(initial);
  }, []);

  // Animate wave phases
  useEffect(() => {
    const id = setInterval(() => {
      setWaveData(waves =>
        waves.map(w => ({ ...w, phase: w.phase + w.speed * 0.02 }))
      );
    }, 30);
    return () => clearInterval(id);
  }, []);


  // Save new user in database

  // Handlers
  const handleEmailPasswordLogin = async () => {
    if (!email || !password) return alert("Please enter both email and password.");
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
     
      alert("Logged in successfully!");
      navigate("/company-dashboard");
    } catch (err) {
      console.error(err);
      alert("Login failed. Please check your credentials.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const { user } = await signInWithPopup(auth, googleProvider);
   
      alert("Logged in successfully!");
      navigate("/company-dashboard");
    } catch (err) {
      console.error(err);
      alert("Google login failed.");
    }
  };

  const handleGithubLogin = async () => {
    try {
      const { user } = await signInWithPopup(auth, githubProvider);
      await storeUserInDatabase(user);
      alert("Logged in successfully!");
      navigate("/company-dashboard");
    } catch (err) {
      console.error(err);
      alert("GitHub login failed.");
    }
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };
  useEffect(() => {
    if (currentUser && location.pathname === "/login") {
      navigate(from, { replace: true });
    }
  }, [currentUser, navigate, location]);

  return (
    <div className="relative overflow-hidden min-h-screen bg-black">
      {/* Animated Background Waves */}
      <div className="absolute inset-0 pointer-events-none">
        {waveData.map(wave => {
          // precompute y-values
          const y0 = 50 + wave.amplitude * Math.sin(wave.phase);
          const y1 = 50 + wave.amplitude * Math.sin(wave.frequency * (windowWidth * 0.25) + wave.phase);
          const y2 = 50 + wave.amplitude * Math.sin(wave.frequency * (windowWidth * 0.75) + wave.phase);
          const y3 = 50 + wave.amplitude * Math.sin(wave.frequency * windowWidth + wave.phase);

          const y0b = 50 + (wave.amplitude / 1.5) * Math.sin(wave.phase + Math.PI / 4);
          const y1b = 50 + (wave.amplitude / 1.5) * Math.sin(wave.frequency * (windowWidth * 0.25) + wave.phase + Math.PI / 4);
          const y2b = 50 + (wave.amplitude / 1.5) * Math.sin(wave.frequency * (windowWidth * 0.75) + wave.phase + Math.PI / 4);
          const y3b = 50 + (wave.amplitude / 1.5) * Math.sin(wave.frequency * windowWidth + wave.phase + Math.PI / 4);

          return (
            <motion.svg
              key={wave.id}
              viewBox={`0 0 ${windowWidth} 100`}
              preserveAspectRatio="none"
              style={{ opacity: wave.opacity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  loop: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                  delay: wave.id * 0.2,
                }}
                d={`M0,${y0} C${windowWidth * 0.25},${y1} ${windowWidth * 0.75},${y2} ${windowWidth},${y3}`}
                fill="none"
                stroke={wave.color}
                strokeWidth={2}
              />
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  loop: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                  delay: wave.id * 0.2 + 1.5,
                }}
                d={`M0,${y0b} C${windowWidth * 0.25},${y1b} ${windowWidth * 0.75},${y2b} ${windowWidth},${y3b}`}
                fill="none"
                stroke={wave.color}
                strokeWidth={1.5}
              />
            </motion.svg>
          );
        })}
      </div>

      {/* Login Form */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="bg-black border border-purple-600 text-white shadow-lg rounded-xl p-6 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-4">Company Login</h2>

          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-2 bg-gray-700 w-full py-2 rounded-md mb-3 hover:bg-gray-600 transition"
          >
            <FcGoogle /> Login with Google
          </button>

          <button
            onClick={handleGithubLogin}
            className="flex items-center justify-center gap-2 bg-gray-700 w-full py-2 rounded-md mb-4 hover:bg-gray-600 transition"
          >
            <FaGithub /> Login with GitHub
          </button>

          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="bg-gray-700 text-white p-2 rounded-md border border-gray-600 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="bg-gray-700 text-white p-2 rounded-md border border-gray-600 focus:outline-none"
            />

            <button
              onClick={handleEmailPasswordLogin}
              className="bg-purple-600 hover:bg-purple-700 transition text-white py-2 rounded-md"
            >
              Login with Email/Password
            </button>

            <button
              onClick={handleForgotPassword}
              className="text-blue-400 underline text-sm hover:text-blue-300 transition w-max"
            >
              Forgot Password?
            </button>

            <button
              onClick={() => navigate("/company-signup")}
              className="bg-gray-600 hover:bg-gray-500 text-white py-2 rounded-md transition"
            >
              New here? Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyLoginPage;
