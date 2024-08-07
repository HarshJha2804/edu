import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter, useLocation } from 'react-router-dom';
import './index.css';
import Home from './component/Home/Home';
import Layout from './Layout';
import About from './component/About/about';
import Services from './component/Services/services';
// import Signup from './component/login&signup/LoginAndSignup';
import Insights from './component/Insights/Insights';
import Gallery from './component/Gallery/Gallery';
import Contact from './component/Contact/Contact';
// import Login from './component/Login/Login';
import Blog from './component/Blog/Blog';
import BlogPage from './component/Home/BlogPage';
import LoginAndSignup from './component/login&signup/LoginAndSignup';

// ScrollToTop component defined inline
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Layout component that includes ScrollToTop
const AppLayout: React.FC = () => (
  <>
    <ScrollToTop />
    <Layout />
  </>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />, // Use AppLayout which includes ScrollToTop
    children: [
      { path: '/', element: <Home /> },
      { path: '/aboutus', element: <About /> },
      { path: '/services', element: <Services /> },
      { path: '/blog', element: <Blog /> },
      { path: '/blog/:id', element: <BlogPage /> },
      { path: '/insights', element: <Insights /> },
      { path: '/gallery', element: <Gallery /> },
      { path: '/contact-us', element: <Contact /> },
      { path: '/login', element: <LoginAndSignup /> },
      { path: '/signup', element: <LoginAndSignup /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
