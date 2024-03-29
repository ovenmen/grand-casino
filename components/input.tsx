import React, { FC } from 'react'

import { InputProps } from '../types/input'

const Input: FC<InputProps> = ({
    name,
    label,
    error,
    type,
    placeholder,
    onChange
}) => (
    <div className="field">
        <label htmlFor={name}>{label}
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className={error ? 'error' : ''}
                onChange={onChange}
            />
        </label>

        <style jsx>{`
            .field input {
                border: none;
                border-bottom: 1px solid #d3d3d3;
                outline: none;
                width: 100%;
                min-width: 100%;
                max-width: 100%;
                padding: 1rem 0;
                color: #848484;
                line-height: 1rem;
            }
            .field .error {
                border-bottom: 1px solid #ff0000;
            }
        `}</style>
    </div>
)

export default Input