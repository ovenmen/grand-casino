import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'

import sendFormData from '../utils/send-form-data'
import Input from './input'
import Textarea from './textarea'

const ContactForm = ({
    contactsForm: {
        header,
        submitButtonTitle,
        fields: [
            nameInput,
            phoneInput,
            cityInput,
            dateInput,
            messageInput
        ]
    }
}) => {
    const [fields, setFields] = useState({
        name: '',
        phone: '',
        city: '',
        date: '',
        message: ''
    })
    const [errors, setErrors] = useState({})

    const { name, phone, city, date, message } = fields

    const handleSubmit = useCallback(event => {
        event.preventDefault()
        const isFormValid = name !== '' && phone !== '' && city !== '' && date !== '' && message !== ''

        setErrors({
            ...errors,
            name: name === '',
            phone: phone === '',
            city: city === '',
            date: date === '',
            message: message === ''
        })

        if (isFormValid) {
            sendFormData('/api/send-contacts-form', { name, phone, city, date, message })
            window.alert('Заявка отправлена!')
            event.target.reset()
            setFields({
                name: '',
                phone: '',
                city: '',
                date: '',
                message: ''
            })
        }
    }, [name, phone, city, date, message])

    const handleChange = useCallback(event => {
        const fieldName = event.target.name
        const fieldValue = event.target.value

        setFields({
            ...fields,
            [fieldName]: fieldValue
        })
        setErrors({
            ...errors,
            [fieldName]: fieldValue === ''
        })
    })

    return (
        <section className="contact-form">
            <div className="grid-x">
                <div className="cell small-12 medium-12 large-12">
                    <div className="grid-x">
                        <div className="cell small-12 medium-12 large-12">
                            <h3 className="font-bold margin-bottom-3">{header}</h3>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="grid-x grid-margin-x">
                            <div className="cell small-12 medium-12 large-6 margin-bottom-1">
                                {nameInput && <Input
                                    name={nameInput.name}
                                    type={nameInput.type}
                                    placeholder={nameInput.placeholder}
                                    onChange={handleChange}
                                    error={errors.name}
                                />}
                            </div>
                            <div className="cell small-12 medium-12 large-6 margin-bottom-1">
                                {phoneInput && <Input
                                    name={phoneInput.name}
                                    type={phoneInput.type}
                                    placeholder={phoneInput.placeholder}
                                    onChange={handleChange}
                                    error={errors.phone}
                                />}
                            </div>
                        </div>
                        <div className="grid-x grid-margin-x">
                            <div className="cell small-12 medium-12 large-6 margin-bottom-1">
                                {cityInput && <Input
                                    name={cityInput.name}
                                    type={cityInput.type}
                                    placeholder={cityInput.placeholder}
                                    onChange={handleChange}
                                    error={errors.city}
                                />}
                            </div>
                            <div className="cell small-12 medium-12 large-6 margin-bottom-1">
                                {dateInput && <Input
                                    name={dateInput.name}
                                    type={dateInput.type}
                                    placeholder={dateInput.placeholder}
                                    onChange={handleChange}
                                    error={errors.date}
                                />}
                            </div>
                        </div>
                        <div className="grid-x">
                            <div className="cell small-12 medium-12 large-12 margin-bottom-1">
                                {messageInput && <Textarea
                                    name={messageInput.name}
                                    type={messageInput.type}
                                    placeholder={messageInput.placeholder}
                                    onChange={handleChange}
                                    rows={8}
                                    error={errors.message}
                                />}
                            </div>
                        </div>
                        <div className="grid-x margin-top-1">
                            <div className="cell small-12 medium-12 large-12 text-right">
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

ContactForm.propTypes = {
    contactsForm: PropTypes.object,
    successMessage: PropTypes.string
}

export default ContactForm
