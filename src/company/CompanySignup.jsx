import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebaseConfig";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext"; 

const SignupPage = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [waveData, setWaveData] = useState([]);
  const { currentUser, setCurrentUser } = useAuth();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // Track window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (currentUser) {
      navigate("/company-dashboard"); // Redirect if already logged in
    }
  }, [currentUser, navigate]);

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
    const intervalId = setInterval(() => {
      setWaveData(waves =>
        waves.map(w => ({ ...w, phase: w.phase + w.speed * 0.02 }))
      );
    }, 30);
    return () => clearInterval(intervalId);
  }, []);

  // Email/password signup
  const handleSignup = async () => {
    if (!email || !password) return setError("Please fill in all fields.");
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setCurrentUser(userCredential.user); // ✅ Update context
      navigate("/company-dashboard");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Google signup
  const handleGoogleSignup = async () => {
    setLoading(true);
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      setCurrentUser(userCredential.user);
      navigate("/company-dashboard");
    } catch (error) {
      setError("Google signup failed.");
    } finally {
      setLoading(false);
    }
  };

  // GitHub signup
  const handleGithubSignup = async () => {
    setLoading(true);
    try {
      const userCredential = await signInWithPopup(auth, githubProvider);
      setCurrentUser(userCredential.user);
      navigate("/dashboard");
    } catch (error) {
      setError("GitHub signup failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative overflow-hidden min-h-screen bg-black">
      {/* Animated Background Waves */}
      <div className="absolute inset-0 pointer-events-none">
        {waveData.map(wave => {
          // Main wave
          const y0 = 50 + wave.amplitude * Math.sin(wave.phase);
          const y1 = 50 + wave.amplitude * Math.sin(wave.frequency * (windowWidth * 0.25) + wave.phase);
          const y2 = 50 + wave.amplitude * Math.sin(wave.frequency * (windowWidth * 0.75) + wave.phase);
          const y3 = 50 + wave.amplitude * Math.sin(wave.frequency * windowWidth + wave.phase);
          // Secondary wave (offset)
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

      {/* Sign Up Form */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="bg-black border border-purple-600 text-white shadow-lg rounded-xl p-6 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-4">Company Sign Up</h2>

          <button
            onClick={handleGoogleSignup}
            className="flex items-center justify-center gap-2 bg-gray-700 w-full py-2 rounded-md mb-3 hover:bg-gray-600 transition"
          >
            <FcGoogle /> Sign up with Google
          </button>

          <button
            onClick={handleGithubSignup}
            className="flex items-center justify-center gap-2 bg-gray-700 w-full py-2 rounded-md mb-4 hover:bg-gray-600 transition"
          >
            <FaGithub /> Sign up with GitHub
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
              placeholder="Create a password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="bg-gray-700 text-white p-2 rounded-md border border-gray-600 focus:outline-none"
            />

            <button
              onClick={handleSignup}
              className="bg-purple-600 hover:bg-purple-700 transition text-white py-2 rounded-md"
            >
              Create Account
            </button>

            <button
              onClick={() => navigate("/login")}
              className="bg-gray-600 hover:bg-gray-500 text-white py-2 rounded-md transition"
            >
              Already have an account? Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
