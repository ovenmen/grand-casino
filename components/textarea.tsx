import React, { FC } from 'react'

interface ITextAreaProps {
    name: string,
    label: string,
    error: string,
    placeholder: string
}

const Textarea: FC<ITextAreaProps> = ({
    name,
    label,
    error,
    placeholder
}, ...props) => (
    <div className="field">
        <label htmlFor={name}>{label}
            <textarea {...props} error={error} placeholder={placeholder} className={error ? 'error' : ''}></textarea>
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