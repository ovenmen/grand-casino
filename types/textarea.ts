import { BaseSyntheticEvent } from 'react'

export type TextAreaProps = {
    name: string,
    label: string,
    error: boolean,
    placeholder: string,
    rows?: number,
    cols?: number,
    onChange: (event: BaseSyntheticEvent) => void
}