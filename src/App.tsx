
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Root from './pages/Root'
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPages'
import DetailPage from './pages/DetailsPage'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/search',
        element:< SearchPage />,
        loader: async ({ request }) => {
          const { searchParams } = new URL(request.url)
          const term = searchParams.get("term")
          if(!term){
            throw new Error('Search term must be provided')
          }
        
          
        }
      },
      {
        path: "/packages/:name",
        element: <DetailPage />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}


export default App
