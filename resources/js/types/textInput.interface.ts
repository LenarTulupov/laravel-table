import { ChangeEvent } from "react"

export interface ITextInput {
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    id?: string
    required?: boolean
    className?: string
  }