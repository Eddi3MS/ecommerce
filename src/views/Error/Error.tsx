import { useRouteError } from 'react-router-dom'
import { IError } from '../../errors'
import { ErrorCard } from '../../components'

function ErrorPage() {
  const error = useRouteError() as IError

  return (
    <section>
      <ErrorCard errorMessage={error?.message} />
    </section>
  )
}

export default ErrorPage
