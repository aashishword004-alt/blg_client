import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from './blog';
import Home from './home';
import Register from './register';
import Profile from './profile';
import User from './user';
import Footer from './footer';
import Login from './login';
import Forgotpassword from './forgotpassword';

function App()
{
    return(
     <BrowserRouter>
     <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/forgotpassword' element={<Forgotpassword/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/user' element={<User/>}/>
        <Route path='/profile' element={<Profile/>} />


     </Routes>
     </BrowserRouter>
    )
}
createRoot(document.getElementById('root')).render(<App/>)
