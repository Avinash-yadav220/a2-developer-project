
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import DemoForm from "./components/DemoForm";
import Hero from "./components/Hero";

export default function App() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="relative w-full min-h-screen overflow-hidden text-white">
      {/* 🔹 Global Video Background */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔹 Overlay (optional for dark tint) */}
      <div className="fixed inset-0 bg-[#0a162c]/70 z-10" />

      {/* 🔹 Foreground Content */}
      <div className="relative z-20">
        <Navbar onDemoClick={() => setDemoOpen(true)} />
        <Hero />
        {demoOpen && <DemoForm open={demoOpen} onClose={() => setDemoOpen(false)} />}
      </div>
    </div>
  );
}







// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         {/* Add more routes here if needed */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;