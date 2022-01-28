import AddStudent from './Components/AddStudent';
import AllStudents from './Components/AllStudents';
import ViewStudent from './Components/ViewStudent';
import NavBar from './Components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<AddStudent />} />
        <Route path="/all" element={<AllStudents />} />
        <Route path="/view/:id" element={<ViewStudent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;