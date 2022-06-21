import './App.css';
import LoginForm from './components/LoginForm';
import Signup from './components/Signup';
import { Route, Routes, useRoutes } from 'react-router-dom';
import { DataProvider } from './DataProvider';
import Head1 from './components/Head1';
function App() {
  return (
    <DataProvider>
      {/* <LoginForm/>  */}
      {/* <Example/>  */}
      {/* <Navbar/> */}
      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/values' element={<Head1/>}/>
      </Routes>
    </DataProvider>
  );
}

export default App;
