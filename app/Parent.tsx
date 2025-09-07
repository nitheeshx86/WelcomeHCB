import React, { useState } from 'react';
import WelcomePage from './WelcomePage';
import HomeComponent from './HomeComponent';

export default function App() {
  const [userName, setUserName] = useState('');
  const [showHome, setShowHome] = useState(false);

  const handleNameSubmit = (name: string) => {
    setUserName(name);
    setShowHome(true);
  };

  return (
    <>
      {!showHome ? (
        <WelcomePage onSubmit={handleNameSubmit} />
      ) : (
        <HomeComponent userName={userName} />
      )}
    </>
  );
}
