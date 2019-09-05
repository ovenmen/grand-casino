import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

import sendFormData from '../utils/send-form-data'
import Input from './input'
import Textarea from './textarea'

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .required('Required'),
    phone: Yup.string()
        .required('Required'),
    city: Yup.string()
        .required('Required'),
    date: Yup.string()
        .required('Required'),
    message: Yup.string()
        .required('Required')
})

class ContactForm extends React.PureComponent {
    handleSubmit = (values, actions) => {
        const data = {
            ...values,
            date: values.date,
            createdDate: new Date().toLocaleDateString()
        }
        actions.setSubmitting(false)
        sendFormData('/api/send-contacts-form', data)
        window.alert('Заявка отправлена!')
        actions.resetForm()
    }

    render () {
        const { contactsForm } = this.props
        const [ nameInput, phoneInput, cityInput, dateInput, messageInput ] = contactsForm.fields
        const initialValues={
            name: '',
            phone: '',
            city: '',
            date: '',
            message: ''
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
                        <Formik
                            initialValues={initialValues}
                            validationSchema={SignupSchema}
                            onSubmit={this.handleSubmit}
                            render={() => (
                                <Form>
                                    <div className="grid-x grid-margin-x">
                                        <div className="cell small-12 medium-12 large-6 margin-bottom-1">
                                            {nameInput && <Field
                                                name={nameInput.name}
                                                type={nameInput.type}
                                                placeholder={nameInput.placeholder}
                                                component={Input}
                                            />}
                                        </div>
                                        <div className="cell small-12 medium-12 large-6 margin-bottom-1">
                                            {phoneInput && <Field
                                                name={phoneInput.name}
                                                type={phoneInput.type}
                                                placeholder={phoneInput.placeholder}
                                                component={Input}
                                            />}
                                        </div>
                                    </div>
                                    <div className="grid-x grid-margin-x">
                                        <div className="cell small-12 medium-12 large-6 margin-bottom-1">
                                            {cityInput && <Field
                                                name={cityInput.name}
                                                type={cityInput.type}
                                                placeholder={cityInput.placeholder}
                                                component={Input}
                                            />}
                                        </div>
                                        <div className="cell small-12 medium-12 large-6 margin-bottom-1">
                                            {dateInput && <Field
                                                name={dateInput.name}
                                                type={dateInput.type}
                                                placeholder={dateInput.placeholder}
                                                component={Input}
                                            />}
                                        </div>
                                    </div>
                                    <div className="grid-x">
                                        <div className="cell small-12 medium-12 large-12 margin-bottom-1">
                                            {messageInput && <Field
                                                name={messageInput.name}
                                                type={messageInput.type}
                                                placeholder={messageInput.placeholder}
                                                rows={8}
                                                component={Textarea}
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
                                </Form>
                            )}
                        />
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
