import { FC } from 'react';
import styles from './ErrorMessage.module.scss'

interface IErrorMessage {
  message: string;
}

const ErrorMessage: FC<IErrorMessage> = ({ message }) => {
  if(!message) {
    return null;
  }
  return (
    <div className={styles['error-message']}>
        { message }
    </div>
  )
}

export default ErrorMessage