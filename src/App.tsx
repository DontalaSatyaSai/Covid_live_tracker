import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
// Add this near your existing imports
import Chatbot from './components/shared/chatbot';

// Add this just before your closing </> in the return statement


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow">
          <HomePage />
          <Chatbot />
        </main>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;