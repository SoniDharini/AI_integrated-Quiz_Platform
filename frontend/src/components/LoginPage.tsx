import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, Bot, Sparkles, Eye, EyeOff } from 'lucide-react';
import api from "../api"; // <-- IMPORTANT: we imported axios instance

interface LoginPageProps {
  onLogin: () => void;
  onNavigateToSignUp: () => void;
}

export function LoginPage({ onLogin, onNavigateToSignUp }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await api.post("/login/", { email, password });

      if (response.data.success) {
        // store session in browser (optional)
        localStorage.setItem("user", JSON.stringify(response.data.user));

        alert("Login Successful 🎉");
        onLogin(); // navigate to dashboard
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      alert("⚠ Unable to connect to backend. Make sure Django is running.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#DFF4FF] to-[#B9E7FF] relative overflow-hidden">

      {/* Floating Effects & Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 bg-[#003B73]/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Main Section */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <motion.div 
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo */}
          <div className="text-center mb-8">
            <motion.div 
              className="inline-flex items-center justify-center w-24 h-24 mb-6 bg-gradient-to-br from-[#B9E7FF] to-white rounded-3xl shadow-lg border border-[#003B73]/10 relative"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Bot className="w-12 h-12 text-[#003B73]" />
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-6 h-2 border-b-2 border-[#003B73] rounded-full" />
            </motion.div>

            <h1 className="text-[#003B73] mb-2 text-3xl font-semibold">Welcome Back 👋</h1>
            <p className="text-[#003B73]/60">Login to continue learning</p>
          </div>

          {/* Login Form */}
          <motion.div 
            className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-[#003B73]/10 p-8"
            whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 59, 115, 0.15)" }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Email */}
              <div>
                <label className="block text-[#003B73] mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#003B73]/40" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 bg-gradient-to-r from-[#DFF4FF]/50 to-white border border-[#003B73]/10 rounded-2xl focus:ring-2 focus:ring-[#003B73]/30 outline-none"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-[#003B73] mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#003B73]/40" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-12 py-3.5 bg-gradient-to-r from-[#DFF4FF]/50 to-white border border-[#003B73]/10 rounded-2xl focus:ring-2 focus:ring-[#003B73]/30 outline-none"
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#003B73]/40 hover:text-[#003B73]"
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>
              </div>

              {/* Login Button */}
              <motion.button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#003B73] to-[#0056A8] text-white rounded-2xl shadow-lg"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
              >
                Login
              </motion.button>
            </form>

            {/* Redirect */}
            <div className="mt-6 text-center">
              <p className="text-[#003B73]/60">
                Don't have an account?{' '}
                <button onClick={onNavigateToSignUp} className="text-[#003B73] underline">
                  Sign Up
                </button>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
