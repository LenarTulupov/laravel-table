import { FC, ReactNode } from "react"

interface ICardButton {
    children: ReactNode
    className?: string
}

const CardButton: FC<ICardButton> = ({children, className}) => {
  return (
    <button className={className}>
        { children }
    </button>
  )
}

export default CardButton