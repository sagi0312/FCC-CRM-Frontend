import "./App.css";
import PageLayout from "./components/layout/PageLayout";
import { AdminProvider } from "./hooks/AdminContext";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <AdminProvider>
      <div>
        <PageLayout>
          <Dashboard />
        </PageLayout>
      </div>
    </AdminProvider>
  );
}

export default App;
