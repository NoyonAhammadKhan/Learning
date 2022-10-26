import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routers/Routes';
import CourseDetails from './Pages/Courses/CourseDetails/CourseDetails';

function App() {
  return (
    <div className="App">
   
       <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
