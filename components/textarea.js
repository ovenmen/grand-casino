import React from 'react'
import { object, string } from 'prop-types'

const Textarea = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    type,
    label,
    ...props
}) => (
    <div className="field">
        <label htmlFor={field.name}>{label}
            <textarea
                {...field}
                {...props}
                type={type}
                className={(touched[field.name] && errors[field.name]) && 'error'}
            ></textarea>
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

Textarea.propTypes = {
    field: object.isRequired,
    form: object.isRequired,
    type: string,
    label: string
}

export default Textarea