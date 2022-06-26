import './App.css';
import AppLayout from 'containers/layout/AppLayout';
import { ToastContainer } from "react-toastify";

function App() {
  return [
    <AppLayout key="layout">
    </AppLayout>,
    <ToastContainer
      key="toast"
      hideProgressBar
      pauseOnHover={false}
      pauseOnFocusLoss={false}
      autoClose={3000}
      position="top-right"
    />,
  ];

}

export default App;
