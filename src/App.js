import "./App.css";
import { AdminProvider } from "./hooks/AdminContext";
import Signin from "./pages/login/Signin";

function App() {
  return (
    <AdminProvider>
      <div>
        <Signin />
      </div>
    </AdminProvider>
  );
}

export default App;
