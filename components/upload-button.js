import React from 'react'
import PropTypes from 'prop-types'

const UploadButton = ({
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
            .field .error {
                border-bottom: 1px solid #ff0000;
            }
        `}</style>
    </div>
)

UploadButton.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
    type: PropTypes.string,
    label: PropTypes.string
}

export default UploadButton
