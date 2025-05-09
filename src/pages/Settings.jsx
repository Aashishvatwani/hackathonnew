import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUserCircle, FaEnvelope, FaIdBadge, FaSignOutAlt } from "react-icons/fa";

const Logout = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const user = auth.currentUser;

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="bg-gray-900 border border-purple-700 rounded-2xl p-6 w-full max-w-md shadow-2xl backdrop-blur-lg bg-opacity-80"
      >
        <div className="flex flex-col items-center text-center">
          <FaUserCircle className="text-purple-500 text-6xl mb-3 animate-pulse" />
          <h2 className="text-2xl font-bold mb-1">Welcome Back</h2>
          <p className="text-sm text-gray-400 mb-6">You are signed in securely 🚀</p>
        </div>

        {user ? (
          <div className="space-y-3 text-left">
            <div className="flex items-center gap-3">
              <FaUserCircle className="text-purple-400" />
              <span className="text-sm truncate">{user.displayName || "Unknown User"}</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-purple-400" />
              <span className="text-sm break-all">{user.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <FaIdBadge className="text-purple-400" />
              <span className="text-xs break-all">{user.uid}</span>
            </div>
          </div>
        ) : (
          <p className="text-red-500 text-center">No user is logged in.</p>
        )}

        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.03 }}
          onClick={handleLogout}
          className="mt-8 w-full flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 transition rounded-lg text-white font-semibold"
        >
          <FaSignOutAlt className="text-lg" />
          Logout
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Logout;
