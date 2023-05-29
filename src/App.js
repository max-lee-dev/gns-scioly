import "./App.css";
import Home from "./pages/Home";
import Navbar from "./pages/components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Sponsors from "./pages/Sponsors";
import Awards from "./pages/Awards";

import Footer from "./pages/components/Footer";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider, Box } from "@chakra-ui/react";

function App() {
  return (
    <Router>
      <ChakraProvider className="font">
        <Navbar />
        <Box minHeight="96vh" bg="#f2f2f2" color="white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/awards" element={<Awards />} />
          </Routes>
        </Box>
        <Footer />
      </ChakraProvider>
    </Router>
  );
}

export default App;
