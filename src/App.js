import { Fragment } from 'react';
import './App.css';
import Error from './components/404/Error';
import Layout from './components/layout/Layout';
import MainLayout from './components/layout/MainLayout';
import SignIn from './components/sign/SignIn';
import Team from './components/team/Team';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import Auth from './components/auth/auth';
// const navigate = useNavigate()

function App() {
const auth = localStorage.getItem('user')
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/' element={<Layout/>}>
        <Route index element={<MainLayout/>}/>
        <Route path='team' element={ <Team/>}/>
      </Route>
      <Route path = 'login' element={<SignIn/>}/>
      <Route path ='*' element={<Error/>}/>
      </>
    )
  )
  return (
    <div className="App">
        {/* <Routes>
          <Route path='/' element={<Layout/>}>
              <Route index element={<MainLayout/>}/>
                <Route path='team' element={<Team/>}/>
        </Route>
        
            <Route path = 'login' element={<SignIn/>}/>
            <Route path ='*' element={<Error/>}/>
        </Routes> */}
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
