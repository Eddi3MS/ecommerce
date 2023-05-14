import { ErrorCard } from '@src/components'
import { IError } from '@src/errors'
import { useRouteError } from 'react-router-dom'

function ErrorPage() {
  const error = useRouteError() as IError

  return (
    <section>
      <ErrorCard errorMessage={error?.message} />
    </section>
  )
}

export default ErrorPage
