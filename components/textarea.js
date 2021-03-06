import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

const Textarea = (props) => (
    <div className="field">
        <label htmlFor={props.name}>{props.label}
            <textarea {..._.omit(props, 'error')} className={props.error && 'error'}></textarea>
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
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    rows: PropTypes.number,
    error: PropTypes.bool
}

export default Textarea
