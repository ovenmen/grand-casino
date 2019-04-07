import React, { Component } from 'react'
import { array, string } from 'prop-types'
import { get } from 'lodash'

import Field from './field'

class ContactsForm extends Component {
    state = {
        name: '',
        phone: '',
        message: '',
        city: '',
        date: '',
        formErrors: {}
    }

    handleOnChange = (event) => {
        const target = get(event, 'target')
        const value = get(target, 'value')
        const name = get(target, 'name')

        this.setState({
            [name]: value
        })
    }

    handleSubmitForm = (event) => {
        event.preventDefault()
        const { name, phone, city, date } = this.state
        const isValid = name !== '' && phone !== '' && city !== '' && date !== ''
        this.setState({
            formErrors: {
                nameError: name === '' || false,
                phoneError: phone === '' || false,
                cityError: city === '' || false,
                dateError: date === '' || false
            }
        })

        isValid && event.target.submit()
    }

    render () {
        const { header, fields, submitButtonTitle } = this.props
        const [ nameInput, phoneInput, cityInput, dateInput, messageInput ] = fields
        const { nameError, phoneError, cityError, dateError, messageError } = this.state.formErrors

        return (
            <section className="contacts-from">
                <div className="grid-x">
                    <div className="cell small-12 medium-12 large-12">
                        <div className="grid-x">
                            <div className="cell small-12 medium-12 large-12">
                                <h3 className="font-bold margin-bottom-3">{header}</h3>
                            </div>
                        </div>
                        <form onSubmit={this.handleSubmitForm}>
                            <div className="grid-x grid-margin-x">
                                <div className="cell small-12 medium-12 large-6 margin-bottom-1">
                                    <Field
                                        name={nameInput.name}
                                        type={nameInput.type}
                                        placeholder={nameInput.placeholder}
                                        isValid={nameError}
                                        onChange={this.handleOnChange}
                                    />
                                </div>
                                <div className="cell small-12 medium-12 large-6 margin-bottom-1">
                                    <Field
                                        name={phoneInput.name}
                                        type={phoneInput.type}
                                        placeholder={phoneInput.placeholder}
                                        isValid={phoneError}
                                        onChange={this.handleOnChange}
                                    />
                                </div>
                            </div>
                            <div className="grid-x grid-margin-x">
                                <div className="cell small-12 medium-12 large-6 margin-bottom-1">
                                    <Field
                                        name={cityInput.name}
                                        type={cityInput.type}
                                        placeholder={cityInput.placeholder}
                                        isValid={cityError}
                                        onChange={this.handleOnChange}
                                    />
                                </div>
                                <div className="cell small-12 medium-12 large-6 margin-bottom-1">
                                    <Field
                                        name={dateInput.name}
                                        type={dateInput.type}
                                        placeholder={dateInput.placeholder}
                                        isValid={dateError}
                                        onChange={this.handleOnChange}
                                    />
                                </div>
                            </div>
                            <div className="grid-x">
                                <div className="cell small-12 medium-12 large-12 margin-bottom-1">
                                    <Field
                                        name={messageInput.name}
                                        type={messageInput.type}
                                        placeholder={messageInput.placeholder}
                                        isValid={messageError}
                                        rows={8}
                                        onChange={this.handleOnChange}
                                    />
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
                    .contacts-from {
                        padding: 5vw;
                    }
                    .submit-button {
                        border: 2px solid #372964;
                        padding: 0.5rem 1rem;
                        background: #372964;
                        display: inline-block;
                        transition: all 0.3s ease-in-out;
                    }
                    .submit-button input {
                        border: none;
                        background: transparent;
                        margin: 0;
                        transition: all 0.3s ease-in-out;
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

ContactsForm.propTypes = {
    header :string,
    fields: array,
    submitButtonTitle: string
}

export default ContactsForm