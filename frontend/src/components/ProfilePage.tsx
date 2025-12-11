import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft,
  User,
  Mail,
  Calendar,
  Flame,
  Trophy,
  Zap,
  Target,
  Brain,
  TrendingUp,
  Award,
  Star,
  CheckCircle,
  Clock,
  BarChart3,
  Medal,
  Crown,
  LogOut
} from 'lucide-react';

interface ProfilePageProps {
  onBack: () => void;
  onLogout: () => void;
}

export function ProfilePage({ onBack, onLogout }: ProfilePageProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'performance' | 'achievements'>('overview');
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutConfirm(true);
  };

  const confirmLogout = () => {
    setShowLogoutConfirm(false);
    onLogout();
  };

  const cancelLogout = () => {
    setShowLogoutConfirm(false);
  };

  // Mock user data
  const userData = {
    name: 'Alex Johnson',
    email: 'alex.johnson@email.com',
    joinDate: 'January 15, 2024',
    avatar: 'AJ',
    level: 8,
    xp: 2450,
    xpToNextLevel: 3000,
    streak: 7,
    longestStreak: 12,
    totalQuizzes: 47,
    quizzesCreated: 12,
    quizzesTaken: 35,
    averageScore: 87,
    totalBadges: 12,
    rank: 'Top 5%',
  };

  const recentActivity = [
    { id: 1, type: 'quiz_taken', title: 'JavaScript Advanced Concepts', score: 92, date: '2 hours ago', xp: 150 },
    { id: 2, type: 'quiz_created', title: 'React Hooks Deep Dive', date: '1 day ago', xp: 100 },
    { id: 3, type: 'quiz_taken', title: 'CSS Grid & Flexbox', score: 88, date: '2 days ago', xp: 120 },
    { id: 4, type: 'achievement', title: 'Week Warrior Badge Unlocked', date: '3 days ago', xp: 200 },
    { id: 5, type: 'quiz_taken', title: 'Python Basics', score: 95, date: '4 days ago', xp: 140 },
  ];

  const achievements = [
    { id: 1, title: 'First Steps', description: 'Complete your first quiz', icon: Star, color: 'from-blue-400 to-blue-600', unlocked: true },
    { id: 2, title: 'Week Warrior', description: '7-day streak', icon: Flame, color: 'from-orange-400 to-orange-600', unlocked: true },
    { id: 3, title: 'Knowledge Seeker', description: 'Take 25 quizzes', icon: Brain, color: 'from-purple-400 to-purple-600', unlocked: true },
    { id: 4, title: 'Perfect Score', description: 'Score 100% on a quiz', icon: Target, color: 'from-green-400 to-green-600', unlocked: true },
    { id: 5, title: 'Quiz Master', description: 'Create 10 quizzes', icon: Trophy, color: 'from-yellow-400 to-yellow-600', unlocked: true },
    { id: 6, title: 'Speed Demon', description: 'Complete quiz in record time', icon: Zap, color: 'from-cyan-400 to-cyan-600', unlocked: true },
    { id: 7, title: 'Consistent Learner', description: '30-day streak', icon: Medal, color: 'from-indigo-400 to-indigo-600', unlocked: false },
    { id: 8, title: 'Champion', description: 'Reach level 10', icon: Crown, color: 'from-pink-400 to-pink-600', unlocked: false },
  ];

  const performanceData = [
    { category: 'JavaScript', quizzes: 12, avgScore: 89, bestScore: 98 },
    { category: 'React', quizzes: 8, avgScore: 92, bestScore: 100 },
    { category: 'CSS', quizzes: 10, avgScore: 85, bestScore: 94 },
    { category: 'Python', quizzes: 5, avgScore: 88, bestScore: 95 },
    { category: 'General', quizzes: 12, avgScore: 84, bestScore: 91 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#DFF4FF] to-[#B9E7FF]">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-[#003B73]/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <motion.button
                onClick={onBack}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-2xl shadow-md border border-[#003B73]/10 hover:shadow-lg transition-all text-[#003B73]"
                whileHover={{ scale: 1.05, x: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Home</span>
              </motion.button>
              <div className="text-[#003B73] text-xl font-semibold">My Profile</div>
            </div>
            
            <motion.button
              onClick={handleLogoutClick}
              className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <>
          {/* Backdrop */}
          <motion.div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={cancelLogout}
          />
          
          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div 
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 border border-[#003B73]/10"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <LogOut className="w-8 h-8 text-red-600" />
                </div>
                <h2 className="text-[#003B73] mb-2">Confirm Logout</h2>
                <p className="text-[#003B73]/70">
                  Are you sure you want to logout? Your progress is saved, but we&apos;ll miss you!
                </p>
              </div>

              <div className="flex gap-3">
                <motion.button
                  onClick={cancelLogout}
                  className="flex-1 py-3.5 bg-gradient-to-r from-[#DFF4FF] to-white border-2 border-[#003B73]/20 text-[#003B73] rounded-2xl hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Cancel
                </motion.button>
                <motion.button
                  onClick={confirmLogout}
                  className="flex-1 py-3.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Yes, Logout
                </motion.button>
              </div>
            </motion.div>
          </div>
        </>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Profile Header Card */}
        <motion.div
          className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-[#003B73]/10 p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Avatar */}
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-32 h-32 bg-gradient-to-br from-[#003B73] to-[#0056A8] rounded-3xl flex items-center justify-center shadow-2xl border-4 border-white">
                <span className="text-white text-4xl">{userData.avatar}</span>
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg border-2 border-white">
                <span className="text-white">{userData.level}</span>
              </div>
            </motion.div>

            {/* User Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="text-[#003B73] text-3xl font-semibold mb-2">{userData.name}</div>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-[#003B73]/70 mb-4">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>{userData.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Joined {userData.joinDate}</span>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-xl shadow-lg">
                  <Flame className="w-4 h-4" />
                  <span>{userData.streak} Day Streak</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#003B73] to-[#0056A8] text-white rounded-xl shadow-lg">
                  <Trophy className="w-4 h-4" />
                  <span>Level {userData.level}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-400 to-purple-600 text-white rounded-xl shadow-lg">
                  <Award className="w-4 h-4" />
                  <span>{userData.totalBadges} Badges</span>
                </div>
              </div>
            </div>

            {/* Rank Badge */}
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl mb-2">
                <Crown className="w-12 h-12 text-white" />
              </div>
              <p className="text-[#003B73] text-lg font-semibold">{userData.rank}</p>
              <p className="text-[#003B73]/60">Global Rank</p>
            </div>
          </div>

          {/* XP Progress Bar */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#003B73]" />
                <span className="text-[#003B73]">Level {userData.level} Progress</span>
              </div>
              <span className="text-[#003B73]/70">{userData.xp} / {userData.xpToNextLevel} XP</span>
            </div>
            <div className="w-full bg-[#DFF4FF]/50 rounded-full h-4 overflow-hidden border border-[#003B73]/10">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#003B73] to-[#0056A8]"
                initial={{ width: 0 }}
                animate={{ width: `${(userData.xp / userData.xpToNextLevel) * 100}%` }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </div>
            <p className="text-[#003B73]/60 mt-1">{userData.xpToNextLevel - userData.xp} XP to Level {userData.level + 1}</p>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <motion.button
            onClick={() => setActiveTab('overview')}
            className={`flex-1 py-4 rounded-2xl transition-all ${
              activeTab === 'overview'
                ? 'bg-gradient-to-r from-[#003B73] to-[#0056A8] text-white shadow-lg'
                : 'bg-white/80 text-[#003B73] border border-[#003B73]/10'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Overview
          </motion.button>
          <motion.button
            onClick={() => setActiveTab('performance')}
            className={`flex-1 py-4 rounded-2xl transition-all ${
              activeTab === 'performance'
                ? 'bg-gradient-to-r from-[#003B73] to-[#0056A8] text-white shadow-lg'
                : 'bg-white/80 text-[#003B73] border border-[#003B73]/10'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Performance
          </motion.button>
          <motion.button
            onClick={() => setActiveTab('achievements')}
            className={`flex-1 py-4 rounded-2xl transition-all ${
              activeTab === 'achievements'
                ? 'bg-gradient-to-r from-[#003B73] to-[#0056A8] text-white shadow-lg'
                : 'bg-white/80 text-[#003B73] border border-[#003B73]/10'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Achievements
          </motion.button>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-6">
              <motion.div
                className="p-6 bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-[#003B73]/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-[#003B73]">{userData.totalQuizzes}</h3>
                </div>
                <p className="text-[#003B73]/70">Total Quizzes</p>
              </motion.div>

              <motion.div
                className="p-6 bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-[#003B73]/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-[#003B73]">{userData.averageScore}%</h3>
                </div>
                <p className="text-[#003B73]/70">Average Score</p>
              </motion.div>

              <motion.div
                className="p-6 bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-[#003B73]/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center">
                    <Flame className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-[#003B73]">{userData.longestStreak}</h3>
                </div>
                <p className="text-[#003B73]/70">Longest Streak</p>
              </motion.div>

              <motion.div
                className="p-6 bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-[#003B73]/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-[#003B73]">{userData.xp}</h3>
                </div>
                <p className="text-[#003B73]/70">Total XP Earned</p>
              </motion.div>
            </div>

            {/* Recent Activity */}
            <motion.div
              className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-[#003B73]/10 p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-[#003B73] mb-6 text-2xl">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#DFF4FF]/30 to-white rounded-2xl border border-[#003B73]/10 hover:shadow-lg transition-all"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      activity.type === 'quiz_taken' ? 'bg-gradient-to-br from-blue-400 to-blue-600' :
                      activity.type === 'quiz_created' ? 'bg-gradient-to-br from-purple-400 to-purple-600' :
                      'bg-gradient-to-br from-yellow-400 to-yellow-600'
                    }`}>
                      {activity.type === 'quiz_taken' && <Target className="w-6 h-6 text-white" />}
                      {activity.type === 'quiz_created' && <Brain className="w-6 h-6 text-white" />}
                      {activity.type === 'achievement' && <Trophy className="w-6 h-6 text-white" />}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[#003B73]">{activity.title}</h3>
                      <div className="flex items-center gap-3 text-[#003B73]/60">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{activity.date}</span>
                        </div>
                        {activity.score && (
                          <span>Score: {activity.score}%</span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#003B73] to-[#0056A8] text-white rounded-xl">
                      <Zap className="w-4 h-4" />
                      <span>+{activity.xp} XP</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        )}

        {activeTab === 'performance' && (
          <motion.div
            className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-[#003B73]/10 p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <BarChart3 className="w-8 h-8 text-[#003B73]" />
              <h2 className="text-[#003B73]">Performance by Category</h2>
            </div>

            <div className="space-y-6">
              {performanceData.map((item, index) => (
                <motion.div
                  key={item.category}
                  className="p-6 bg-gradient-to-r from-[#DFF4FF]/30 to-white rounded-2xl border border-[#003B73]/10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-[#003B73]">{item.category}</h3>
                    <span className="text-[#003B73]/60">{item.quizzes} quizzes</span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-[#003B73]/60 mb-2">Average Score</p>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 bg-white rounded-full h-3 overflow-hidden border border-[#003B73]/10">
                          <motion.div
                            className="h-full bg-gradient-to-r from-[#003B73] to-[#0056A8]"
                            initial={{ width: 0 }}
                            animate={{ width: `${item.avgScore}%` }}
                            transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                          />
                        </div>
                        <span className="text-[#003B73] min-w-[3rem]">{item.avgScore}%</span>
                      </div>
                    </div>

                    <div>
                      <p className="text-[#003B73]/60 mb-2">Best Score</p>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 bg-white rounded-full h-3 overflow-hidden border border-[#003B73]/10">
                          <motion.div
                            className="h-full bg-gradient-to-r from-green-400 to-green-600"
                            initial={{ width: 0 }}
                            animate={{ width: `${item.bestScore}%` }}
                            transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                          />
                        </div>
                        <span className="text-[#003B73] min-w-[3rem]">{item.bestScore}%</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Summary Stats */}
            <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-[#003B73]/10">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-[#003B73]">{userData.quizzesTaken}</h3>
                <p className="text-[#003B73]/70">Quizzes Taken</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-[#003B73]">{userData.quizzesCreated}</h3>
                <p className="text-[#003B73]/70">Quizzes Created</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-[#003B73]">{userData.averageScore}%</h3>
                <p className="text-[#003B73]/70">Overall Average</p>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'achievements' && (
          <motion.div
            className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-[#003B73]/10 p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Trophy className="w-8 h-8 text-[#003B73]" />
              <div>
                <h2 className="text-[#003B73] text-2xl">Achievements & Badges</h2>
                <p className="text-[#003B73]/60">{achievements.filter(a => a.unlocked).length} of {achievements.length} unlocked</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  className={`p-6 rounded-2xl border-2 transition-all ${
                    achievement.unlocked
                      ? 'bg-gradient-to-br from-white to-[#DFF4FF]/30 border-[#003B73]/20 shadow-lg'
                      : 'bg-white/40 border-[#003B73]/10 opacity-60'
                  }`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: achievement.unlocked ? 1.05 : 1, y: achievement.unlocked ? -5 : 0 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg ${
                    !achievement.unlocked && 'grayscale'
                  }`}>
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-[#003B73] text-center mb-2">{achievement.title}</h3>
                  <p className="text-[#003B73]/60 text-center">{achievement.description}</p>
                  {achievement.unlocked && (
                    <div className="mt-3 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}