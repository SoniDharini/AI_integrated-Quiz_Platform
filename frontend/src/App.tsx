import { useState } from 'react';
import { LoginPage } from './components/LoginPage';
import { SignUpPage } from './components/SignUpPage';
import { HomePage } from './components/HomePage';
import { ProfilePage } from './components/ProfilePage';
import { CreateQuizPage } from './components/CreateQuizPage';
import { FeaturesPage } from './components/FeaturesPage';

type Page = 'login' | 'signup' | 'home' | 'profile' | 'create-quiz' | 'features';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('home');
  };

  const handleSignUp = () => {
    setIsLoggedIn(true);
    setCurrentPage('home');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('login');
  };

  const handleNavigateToProfile = () => {
    setCurrentPage('profile');
  };

  const handleNavigateToCreateQuiz = () => {
    setCurrentPage('create-quiz');
  };

  const handleNavigateToFeatures = () => {
    setCurrentPage('features');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  if (currentPage === 'login') {
    return (
      <LoginPage 
        onLogin={handleLogin}
        onNavigateToSignUp={() => setCurrentPage('signup')}
      />
    );
  }

  if (currentPage === 'signup') {
    return (
      <SignUpPage 
        onSignUp={handleSignUp}
        onNavigateToLogin={() => setCurrentPage('login')}
      />
    );
  }

  if (currentPage === 'profile') {
    return <ProfilePage onBack={handleBackToHome} onLogout={handleLogout} />;
  }

  if (currentPage === 'create-quiz') {
    return <CreateQuizPage onBack={handleBackToHome} />;
  }

  if (currentPage === 'features') {
    return <FeaturesPage onBack={handleBackToHome} />;
  }

  return (
    <HomePage 
      onLogout={handleLogout} 
      onNavigateToProfile={handleNavigateToProfile}
      onNavigateToCreateQuiz={handleNavigateToCreateQuiz}
      onNavigateToFeatures={handleNavigateToFeatures}
    />
  );
}