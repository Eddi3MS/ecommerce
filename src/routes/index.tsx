import { Suspense, lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { ErrorCard, Loading } from '../components'
import { Layout } from '../layouts'
import Error from '../views/Error'
const Home = lazy(() => import('../views/Home'))
const Category = lazy(() => import('../views/Category'))
const Product = lazy(() => import('../views/Product'))
const Success = lazy(() => import('../views/Success'))

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
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            ),
          },
          {
            path: ':category',
            element: (
              <Suspense fallback={<Loading />}>
                <Category />
              </Suspense>
            ),
          },
          {
            path: 'products/:id',
            element: (
              <Suspense fallback={<Loading />}>
                <Product />
              </Suspense>
            ),
          },
          {
            path: 'success',
            element: (
              <Suspense fallback={<Loading />}>
                <Success />
              </Suspense>
            ),
          },
          {
            path: '*',
            element: (
              <ErrorCard
                errorMessage="The page yo're looking for, weren't found."
                notFound
              />
            ),
          },
        ],
      },
    ],
  },
])

export default routes
