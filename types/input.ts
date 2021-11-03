import { BaseSyntheticEvent } from 'react'

export type InputProps = {
    name: string,
    label: string,
    error: boolean,
    type: string,
    placeholder: string,
    onChange: (event: BaseSyntheticEvent) => void
}