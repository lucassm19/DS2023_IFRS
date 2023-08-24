import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './componentes/HomePage';
import { UserProvider } from './componentes/UserContext';

function App() {
  const user = { name: 'Tania', loggedIn: true }
  return (
    <UserProvider value={user}>
      <HomePage />
    </UserProvider>
  );
}

export default App
