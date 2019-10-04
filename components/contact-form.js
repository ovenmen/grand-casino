import React from 'react'
import PropTypes from 'prop-types'

import sendFormData from '../utils/send-form-data'
import Input from './input'
import Textarea from './textarea'

class ContactForm extends React.PureComponent {
    state = {
        name: '',
        phone: '',
        city: '',
        date: '',
        message: '',
        errors: {}
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { name, phone, city, date, message } = this.state
        const isFormValid = name !== '' && phone !== '' && city !== '' && date !== '' && message !== ''

        this.setState({
            errors: {
                name: name === '',
                phone: phone === '',
                city: city === '',
                date: date === '',
                message: message === ''
            }
        })

        if (isFormValid) {
            sendFormData('/api/send-contacts-form', { name, phone, city, date, message })
            window.alert('Заявка отправлена!')
            event.target.reset()
        }
    }

    handleChange = (event) => {
        const fieldName = event.target.name
        const fieldValue = event.target.value
        this.setState((prevState) => ({
            [fieldName]: fieldValue,
            errors: {
                ...prevState.errors,
                [fieldName]: fieldValue === ''
            }
        }))
    }

    render () {
        const { contactsForm } = this.props
        const [ nameInput, phoneInput, cityInput, dateInput, messageInput ] = contactsForm.fields
        const { errors } = this.state

        return (
            <section className="contact-form">
                <div className="grid-x">
                    <div className="cell small-12 medium-12 large-12">
                        <div className="grid-x">
                            <div className="cell small-12 medium-12 large-12">
                                <h3 className="font-bold margin-bottom-3">{contactsForm.header}</h3>
                            </div>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="grid-x grid-margin-x">
                                <div className="cell small-12 medium-12 large-6 margin-bottom-1">
                                    {nameInput && <Input
                                        name={nameInput.name}
                                        type={nameInput.type}
                                        placeholder={nameInput.placeholder}
                                        onChange={this.handleChange}
                                        error={errors.name}
                                    />}
                                </div>
                                <div className="cell small-12 medium-12 large-6 margin-bottom-1">
                                    {phoneInput && <Input
                                        name={phoneInput.name}
                                        type={phoneInput.type}
                                        placeholder={phoneInput.placeholder}
                                        onChange={this.handleChange}
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
                                        onChange={this.handleChange}
                                        error={errors.city}
                                    />}
                                </div>
                                <div className="cell small-12 medium-12 large-6 margin-bottom-1">
                                    {dateInput && <Input
                                        name={dateInput.name}
                                        type={dateInput.type}
                                        placeholder={dateInput.placeholder}
                                        onChange={this.handleChange}
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
                                        onChange={this.handleChange}
                                        rows={8}
                                        error={errors.message}
                                    />}
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
}

ContactForm.propTypes = {
    contactsForm: PropTypes.object,
    successMessage: PropTypes.string
}

export default ContactForm
