import { ChangeEvent } from "react"

interface IOption {
    value: string
    label: string
}

export interface IFilter {
    id: string
    options: IOption[]
    handleChange: (event: ChangeEvent<HTMLSelectElement>) => void
    label?: string
}