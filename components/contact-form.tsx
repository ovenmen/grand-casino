import React, { BaseSyntheticEvent, FC, useState } from 'react'

import sendFormData from '../lib/send-form-data'
import { ContactFormProps } from '../types/contact-form'
import Input from './input'
import Textarea from './textarea'

const ContactForm: FC<ContactFormProps> = ({
    contactsForm
}) => {
    const [formValues, setFormValues] = useState({
        name: '',
        phone: '',
        city: '',
        date: '',
        message: ''
    })
    const [errors, setErrors] = useState({
        name: false,
        phone: false,
        city: false,
        date: false,
        message: false
    })

    const [ nameInput, phoneInput, cityInput, dateInput, messageInput ] = contactsForm.fields

    const handleSubmit = (event: BaseSyntheticEvent) => {
        event.preventDefault()
        const { name, phone, city, date, message } = formValues
        const isFormValid = name && phone && city && date && message

        setErrors({
            name: !name,
            phone: !phone,
            city: !city,
            date: !date,
            message: !message
        })

        if (isFormValid) {
            sendFormData('/api/send-contacts-form', { name, phone, city, date, message })
            window.alert('Заявка отправлена!')
            event.target.reset()
        }
    }

    const handleChange = (event: BaseSyntheticEvent) => {
        const { name, value } = event.target

        setFormValues({
            ...formValues,
            [name]: value
        })

        setErrors({
            ...errors,
            [name]: value === ''
        })
    }

    return (
        <section className="contact-form">
            <div className="grid-x">
                <div className="cell small-12 medium-12 large-12">
                    <div className="grid-x">
                        <div className="cell small-12 medium-12 large-12">
                            <h3 className="font-bold margin-bottom-3">{contactsForm.header}</h3>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} method="POST">
                        <div className="grid-x grid-margin-x">
                            <div className="cell small-12 medium-12 large-6 margin-bottom-1">
                                {nameInput && (
                                    <Input
                                        name={nameInput.name}
                                        label={nameInput.name}
                                        type={nameInput.type}
                                        placeholder={nameInput.placeholder}
                                        onChange={handleChange}
                                        error={errors.name}
                                    />
                                )}
                            </div>
                            <div className="cell small-12 medium-12 large-6 margin-bottom-1">
                                {phoneInput && (
                                    <Input
                                        name={phoneInput.name}
                                        label={phoneInput.name}
                                        type={phoneInput.type}
                                        placeholder={phoneInput.placeholder}
                                        onChange={handleChange}
                                        error={errors.phone}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="grid-x grid-margin-x">
                            <div className="cell small-12 medium-12 large-6 margin-bottom-1">
                                {cityInput && (
                                    <Input
                                        name={cityInput.name}
                                        label={cityInput.name}
                                        type={cityInput.type}
                                        placeholder={cityInput.placeholder}
                                        onChange={handleChange}
                                        error={errors.city}
                                    />
                                )}
                            </div>
                            <div className="cell small-12 medium-12 large-6 margin-bottom-1">
                                {dateInput && (
                                    <Input
                                        name={dateInput.name}
                                        label={dateInput.name}
                                        type={dateInput.type}
                                        placeholder={dateInput.placeholder}
                                        onChange={handleChange}
                                        error={errors.date}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="grid-x">
                            <div className="cell small-12 medium-12 large-12 margin-bottom-1">
                                {messageInput && (
                                    <Textarea
                                        name={messageInput.name}
                                        label={messageInput.name}
                                        placeholder={messageInput.placeholder}
                                        onChange={handleChange}
                                        rows={8}
                                        error={errors.message}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="grid-x margin-top-1">
                            <div className="cell small-12 medium-12 large-12 text-right">
                                <div className="submit-button">
                                    <input type="submit" value={contactsForm.submitButtonTitle} className="color-white h5" />
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

export default ContactForm