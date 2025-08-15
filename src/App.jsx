import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './components/Layout';

import { AuthProvider } from './providers/AuthProvider';
import { DataProvider } from './providers/DataProvider';

import HomePage from './pages/HomePage';
import TribePage from './pages/TribePage';
import CreatorStudioPage from './pages/CreatorStudioPage';
import SettingsPage from './pages/SettingsPage';
import ProfilePage from './pages/ProfilePage';
import AuthPage from './pages/AuthPage';
import FeaturesPage from './pages/FeaturesPage';
import CreatorsPage from './pages/CreatorsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';


import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <Router>
          <Toaster position="top-center" reverseOrder={false} />
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/tribe/:id" element={<TribePage />} />
              <Route path="/studio" element={<ProtectedRoute><CreatorStudioPage /></ProtectedRoute>} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/profile/:id" element={<ProfilePage />} />
              <Route path="/login" element={<AuthPage />} />
              <Route path="/signup" element={<AuthPage />} />
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="/creators" element={<CreatorsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Layout>
        </Router>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
