import styles from './ColorSwitch.module.scss'

const ColorSwitch = ({ color, onClick, isSelected }) => {
  return (
    <div
    className={`${styles['color-switch']} ${isSelected ? styles['color-switch_selected'] : ''} ${styles[`color-switch-${color}`]}`}
    onClick={onClick}
  ></div>
  )
}

export default ColorSwitch