import logo from './logo.svg';
import './App.css';
import Login from './Pages/Authentication/Login/Login';
import Register from './Pages/Authentication/Register/Register';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routers/Routes';

function App() {
  return (
    <div className="App">
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
