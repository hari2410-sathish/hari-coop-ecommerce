import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Pet from './pages/pet/Pet';
import PetFeed from './pages/petfeed/PetFeed';
import Agriculture from './pages/agriculture/Agriculture';
import Seed from './pages/seed/Seed';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pet" element={<Pet />} />
        <Route path="/petfeed" element={<PetFeed />} />
        <Route path="/agriculture" element={<Agriculture />} />
        <Route path="/seed" element={<Seed />} />
      </Routes>
    </Router>
  );
}

export default App;

