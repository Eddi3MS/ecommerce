import { ErrorCard, Loading } from '@src/components'
import { Layout } from '@src/layouts'
import Error from '@src/views/Error'
import { Suspense, lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
const Home = lazy(() => import('@src/views/Home'))
const Category = lazy(() => import('@src/views/Category'))
const Product = lazy(() => import('@src/views/Product'))
const Products = lazy(() => import('@src/views/Products'))
const Success = lazy(() => import('@src/views/Success'))

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
            path: 'products',
            element: (
              <Suspense fallback={<Loading />}>
                <Products />
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
