import { Suspense, lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../layouts'
const Home = lazy(() => import('../views/Home'))
const Category = lazy(() => import('../views/Category'))
const Product = lazy(() => import('../views/Product'))
import Error from '../views/Error'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        errorElement: <Error />,
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<p>loading...</p>}>
                <Home />
              </Suspense>
            ),
          },
          {
            path: ':category',
            element: (
              <Suspense fallback={<p>loading...</p>}>
                <Category />
              </Suspense>
            ),
          },
          {
            path: 'products/:id',
            element: (
              <Suspense fallback={<p>loading...</p>}>
                <Product />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
])

export default routes
