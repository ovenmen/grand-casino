import React, { Fragment } from 'react'
import { bool } from 'prop-types'
import { omit } from 'lodash'
import classnames from 'classnames'

const Field = props => {
    const passedProps = omit(props, 'isValid')
    const className = classnames('field', !props.isValid && 'error')

    return (
        <Fragment>
            {passedProps.type === 'textarea'
                ? <textarea {...passedProps} className={className}></textarea>
                : <input {...passedProps} className={className} />
            }

            <style jsx>{`
                .field {
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
                .error {
                    border-bottom: 1px solid #ff0000;
                }
            `}</style>
        </Fragment>
    )
}

Field.propTypes = {
    isValid: bool
}

export default Field