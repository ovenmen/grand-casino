import React, { useState } from 'react'
import { array, string } from 'prop-types'
import { get } from 'lodash'

import Field from './field'
import { API_SEND_FORM_URL_REVIEW } from '../config'
import sendFormData from '../utils/send-form-data'

const ReviewsForm  = (props) => {
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [date, setDate] = useState('')
    const [message, setMessage] = useState('')
    const [nameError, setNameError] = useState(false)
    const [cityError, setCityError] = useState(false)
    const [dateError, setDateError] = useState(false)
    const [messageError, setMessageError] = useState(false)

    const handleOnChange = (event) => {
        const target = get(event, 'target')
        const value = get(target, 'value')
        const name = get(target, 'name')

        switch (name) {
        case 'name':
            setName(value)
            setNameError(value === '')
            break
        case 'city':
            setCity(value)
            setCityError(value === '')
            break
        case 'date':
            setDate(value)
            setDateError(value === '')
            break
        case 'message':
            setMessage(value)
            setMessageError(value === '')
            break
        default:
            break
        }
    }

    const handleSubmitForm = (event) => {
        event.preventDefault()
        const isValid = name !== '' && city !== '' && date !== '' && message !== ''
        const data = { name, city, date, message }

        setNameError(name === '')
        setCityError(city === '')
        setDateError(date === '')
        setMessageError(message === '')

        if (isValid) {
            sendFormData(API_SEND_FORM_URL_REVIEW, data)
            event.target.reset()
        }
    }

    const { header, fields, submitButtonTitle } = props
    const [ nameInput, cityInput, dateInput, messageInput ] = fields

    return (
        <section className="contact-form">
            <div className="grid-x">
                <div className="cell small-12 medium-12 large-12">
                    <div className="grid-x">
                        <div className="cell">
                            <h3 className="font-bold margin-bottom-3">{header}</h3>
                        </div>
                    </div>
                    <form onSubmit={handleSubmitForm}>
                        <div className="grid-x">
                            <div className="cell margin-bottom-1">
                                {nameInput && <Field
                                    name={nameInput.name}
                                    type={nameInput.type}
                                    placeholder={nameInput.placeholder}
                                    isValid={!nameError}
                                    onChange={handleOnChange}
                                />}
                            </div>
                        </div>
                        <div className="grid-x">
                            <div className="cell margin-bottom-1">
                                {cityInput && <Field
                                    name={cityInput.name}
                                    type={cityInput.type}
                                    placeholder={cityInput.placeholder}
                                    isValid={!cityError}
                                    onChange={handleOnChange}
                                />}
                            </div>
                        </div>
                        <div className="grid-x">
                            <div className="cell margin-bottom-1">
                                {dateInput && <Field
                                    name={dateInput.name}
                                    type={dateInput.type}
                                    placeholder={dateInput.placeholder}
                                    isValid={!dateError}
                                    onChange={handleOnChange}
                                />}
                            </div>
                        </div>
                        <div className="grid-x">
                            <div className="cell margin-bottom-1">
                                {messageInput && <Field
                                    name={messageInput.name}
                                    type={messageInput.type}
                                    placeholder={messageInput.placeholder}
                                    isValid={!messageError}
                                    rows={8}
                                    onChange={handleOnChange}
                                />}
                            </div>
                        </div>
                        <div className="grid-x margin-top-1">
                            <div className="cell text-right">
                                <div className="submit-button">
                                    <input type="submit" value={submitButtonTitle} className="color-white h5" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <style jsx>{`
                .contact-form {
                    padding: 5vw;
                }
                .submit-button {
                    border: 2px solid #372964;
                    background: #372964;
                    display: inline-block;
                    transition: all 0.3s ease-in-out;
                }
                .submit-button input {
                    border: none;
                    background: transparent;
                    margin: 0;
                    transition: all 0.3s ease-in-out;
                    outline: none;
                    padding: 0.5rem 1rem;
                }
                .submit-button:hover {
                    background: #ffffff;
                    color: #372964 !important;
                    cursor: pointer;
                }
                .submit-button:hover input {
                    color: #372964;
                    cursor: pointer;
                }
            `}</style>
        </section>
    )
}

ReviewsForm.propTypes = {
    header :string,
    fields: array,
    submitButtonTitle: string
}

export default ReviewsForm
