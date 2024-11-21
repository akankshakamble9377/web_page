import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Assignment1 from './components/sidebar/Assignment1';
import Assignment2 from './components/sidebar/Assignment2';
import Assignment3 from './components/sidebar/Assignment3';
import PageNotFound from './components/sidebar/PageNotFound';
import './App.css';
import Header from './components/navbar/Header';

function App() {
  const routes = [
    { path: '/', element: <Assignment1 /> },
    { path: '/Assignment2', element: <Assignment2 /> },
    { path: '/Assignment3', element: <Assignment3 /> },
    { path: '*', element: <PageNotFound /> },
  ];
  return (
   <>
      <Router>

        <Sidebar />
        <Header/>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
      
        </Routes>
      </Router>


</>
  );
}

export default App;
