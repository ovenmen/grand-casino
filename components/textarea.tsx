import React, { FC } from 'react'

import { TextAreaProps } from '../types/textarea'

const Textarea: FC<TextAreaProps> = ({
    name,
    label,
    error,
    placeholder,
    cols,
    rows,
    onChange
}) => (
    <div className="field">
        <label htmlFor={name}>{label}
            <textarea
                cols={cols}
                rows={rows}
                name={name}
                placeholder={placeholder}
                className={error ? 'error' : ''}
                onChange={onChange}
            >
            </textarea>
        </label>

        <style jsx>{`
            .field textarea {
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

export default Textarea