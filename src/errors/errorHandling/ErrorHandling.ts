import { AxiosError } from 'axios'
import { AppError } from '..'

export interface IError {
  statusCode: number
  message: string
}

function checkErrorMessage(message?: string | string[]) {
  if (!message) return undefined

  return Array.isArray(message) ? message.join(', ') : message
}

class ErrorHandling {
  private _statusCode: number
  private _message: string

  constructor(error: AxiosError | any, defaultMessage?: string) {
    if (error instanceof AppError) {
      this._statusCode = error.statusCode ?? 400
      this._message = error.message ?? (defaultMessage || '')
    } else {
      this._statusCode = error?.response?.status ?? 400
      this._message =
        checkErrorMessage(error.response.data.message) ||
        checkErrorMessage(error.message) ||
        defaultMessage ||
        'Something went wrong.'
    }
  }

  get error(): IError {
    return {
      statusCode: this._statusCode,
      message: this._message,
    }
  }
}

export { ErrorHandling }
