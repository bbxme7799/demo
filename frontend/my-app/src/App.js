import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './shared/Navigation/Navigation';

const Service = lazy(() => import('./Service/pages/Service'));

function App() {
  return (
    <Router>
      <Navigation/>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Service/>} />
          </Routes>
        </Suspense>
      </main>
    </Router>
  );
}

export default App;
