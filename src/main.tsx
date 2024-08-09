import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import Contact from './routes/contact';
import ErrorPage from './error-page';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    // 해당 경로에 대한 에러 페이지를 설정합니다.
    errorElement:  <ErrorPage />,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />
      }
    ]
  },
  
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);