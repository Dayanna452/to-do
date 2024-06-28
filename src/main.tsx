import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Homepage from './components/pages/Homepage.tsx'
import NotFound from './components/pages/NotFound.tsx'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global.ts'
import { theme } from './styles/theme.ts'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
    errorElement: <NotFound />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
    <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
