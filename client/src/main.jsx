import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from './blog';
import Home from './home';
import Register from './register';
import Profile from './profile';
import NotFound from './404';
import User from './user';
import Footer from './footer';
import Login from './login';
import Forgotpassword from './forgotpassword';
import { CookiesProvider } from 'react-cookie';
import Cookie from './cookie';
import View_blog from './view_blog';
import Create_blog from './c_blog';
function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/forgotpassword' element={<Forgotpassword />} />


            <Route element={<Cookie />}>
               <Route path='/home' element={<Home />} />
               <Route path='/user' element={<User />} />
               <Route path='/profile' element={<Profile />} />
               <Route path='/view_blog/:id' element={<View_blog />} />
               <Route path='/c_blog' element={<Create_blog/>} />
            </Route>

            <Route path="*" element={<NotFound />} />


         </Routes>
      </BrowserRouter>
   )
}
createRoot(document.getElementById('root')).render(<CookiesProvider><App/></CookiesProvider>)
