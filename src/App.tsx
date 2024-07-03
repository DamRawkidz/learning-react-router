
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Root from './pages/Root'
import HomePage from './pages/HomePage'
import SearchPage from './pages/search/SearchPages'

import { searchLoader } from './pages/search/searchLoader'
import { detailLoader } from './pages/details/detailLoader'
import DetailsPage from './pages/details/DetailsPage'
import { homeLoader } from './pages/home/homeLoader'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: homeLoader
      },
      {
        path: '/search',
        element:< SearchPage />,
        loader: searchLoader
      },
      {
        path: "/packages/:name",
        element: <DetailsPage />,
        loader: detailLoader
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}


export default App
