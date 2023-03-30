import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";

import { ThemeProvider } from "./hooks/ThemeContext";
function App() {
  return (
    <ThemeProvider>
      <div>
        <nav>
          <About />
          <Contact />
        </nav>
      </div>
    </ThemeProvider>
  );
}

export default App;
