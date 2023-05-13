import { useRouteError } from 'react-router-dom'
import { ErrorHandling } from '../../errors'

function ErrorPage() {
  const error = useRouteError()

  const errorHandling = new ErrorHandling(error, 'Something went wrong!')

  return (
    <>
      <p>{errorHandling.error.message}</p>
    </>
  )
}

export default ErrorPage
