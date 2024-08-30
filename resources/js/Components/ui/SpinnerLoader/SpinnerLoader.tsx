import ReactDOM from 'react-dom';
// import { ImSpinner2 } from "react-icons/im";
import { CgSpinner } from "react-icons/cg";
import styles from './SpinnerLoader.module.scss'

const SpinnerLoader = () => {
  
  return  ReactDOM.createPortal(
    <div className={styles['spinner-loader']}>
      {/* <ImSpinner2 className={styles['spinner-loader__icon']}/> */}
      <CgSpinner className={styles['spinner-loader__icon']}/>
    </div>,
    document.body
  )
}

export default SpinnerLoader