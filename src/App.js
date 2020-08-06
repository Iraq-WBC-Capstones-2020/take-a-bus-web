import React from 'react';
import Map from './components/MapContainer';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <div>
      <Navbar />
      <Map />
      <SignIn />
      <SignUp />
    </div>
  );
}

export default App;
