import "./App.css";
import Home from "./pages/Home";
import Navbar from "./pages/components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Sponsors from "./pages/Sponsors";
import Awards from "./pages/Awards";

import Footer from "./pages/components/Footer";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider, Box, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#204A97",
      // ...
      900: "#1a202c",
    },
    gold: {
      100: "#BBAA10",
    },
    silver: {
      100: "#C0C0C0",
    },
    bronze: {
      100: "#CD7F32",
    },
  },
});

function App() {
  return (
    <Router>
      <ChakraProvider className="font" theme={theme}>
        <Navbar />
        <Box bg="#f2f2f2" color="white">
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
