import React from 'react'
import PropTypes from 'prop-types'

const Input = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    type,
    label,
    ...props
}) => (
    <div className="field">
        <label htmlFor={field.name}>{label}
            <input
                {...field}
                {...props}
                type={type}
                className={(touched[field.name] && errors[field.name]) && 'error'}
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

Input.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
    type: PropTypes.string,
    label: PropTypes.string
}

export default Input
