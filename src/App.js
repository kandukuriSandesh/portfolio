import logo from './logo.svg';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import {createBrowserRouter, Outlet, Route, RouterProvider, Routes} from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import './index.css'
import Portfolio from './components/Portfolio/Portfolio';
import { ToastContainer, toast } from 'react-toastify';
import { AboutMe } from './components/AboutMe/AboutMe';
import { ToggleProvider } from './context/ToggleContext/ToggleContext';
import ContactMe from './components/ContactMe/ContactMe';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/aboutme", element: <AboutMe /> },
      { path: "/contactme", element: <ContactMe /> },


    ],
  }
]);

function RootLayout() {
  return (
    <ToggleProvider>

    <div className="flex flex-col min-h-screen">
      <Header />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
        <ToastContainer />
      <div className="flex-grow flex justify-center items-center bg">
        <Outlet />
      </div>
      
    </div>
        </ToggleProvider>
  );
}

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
