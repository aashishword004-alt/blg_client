import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Blog from './blog';
import Home from './home';
import Register from './register';
import Profile from './profile';
import User from './user';
import Footer from './footer';

createRoot(document.getElementById('root')).render(<User/>)
