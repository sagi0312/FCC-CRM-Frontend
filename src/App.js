import "./App.css";
import PageLayout from "./components/layout/PageLayout";
import { AdminProvider } from "./hooks/AdminContext";

function App() {
  return (
    <AdminProvider>
      <div>
        <PageLayout>Send different pages</PageLayout>
      </div>
    </AdminProvider>
  );
}

export default App;
