import { FC } from 'react';
import { getErrorMessage, TypeErrorCode } from '@/utils/getErrorMessage';
import styles from './ErrorMessage.module.scss'

interface IErrorMessage {
  code: TypeErrorCode;
}

const ErrorMessage: FC<IErrorMessage> = ({ code }) => {
  if(!code) {
    return null;
  }
  const message = getErrorMessage(code);

  return (
    <div className={`${styles['error-message']}`}>
        { message }
    </div>
  )
}

export default ErrorMessage