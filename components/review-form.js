import React from 'react'
import { array, string } from 'prop-types'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { format } from 'date-fns'

import Input from './input'
import Textarea from './textarea'

import { API_SEND_FORM_URL_REVIEW } from '../config'
import sendFormData from '../utils/send-form-data'

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .required('Required'),
    city: Yup.string()
        .required('Required'),
    date: Yup.string()
        .required('Required'),
    message: Yup.string()
        .required('Required')
})

class ReviewsForm extends React.PureComponent {
    handleSubmit = (values, actions) => {
        const data = {
            ...values,
            date: format(values.date, 'DD/MM/YYYY'),
            createdDate: format(new Date(), 'DD/MM/YYYY H:m:s Z')
        }
        actions.setSubmitting(false)
        sendFormData(API_SEND_FORM_URL_REVIEW, data)
        window.alert(this.props.successMessage)
        actions.resetForm()
    }

    render () {
        const { header, fields, submitButtonTitle } = this.props
        const [ nameInput, cityInput, dateInput, messageInput ] = fields
        const initialValues = {
            name: '',
            city: '',
            date: '',
            message: ''
        }

        return (
            <section className="review-form">
                <div className="grid-x">
                    <div className="cell small-12 medium-12 large-12">
                        <div className="grid-x">
                            <div className="cell">
                                <h3 className="font-bold margin-bottom-3">{header}</h3>
                            </div>
                        </div>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={SignupSchema}
                            onSubmit={this.handleSubmit}
                            render={() => (
                                <Form>
                                    <div className="grid-x">
                                        <div className="cell margin-bottom-1">
                                            {nameInput && <Field
                                                name={nameInput.name}
                                                type={nameInput.type}
                                                placeholder={nameInput.placeholder}
                                                component={Input}
                                            />}
                                        </div>
                                    </div>
                                    <div className="grid-x">
                                        <div className="cell margin-bottom-1">
                                            {cityInput && <Field
                                                name={cityInput.name}
                                                type={cityInput.type}
                                                placeholder={cityInput.placeholder}
                                                component={Input}
                                            />}
                                        </div>
                                    </div>
                                    <div className="grid-x">
                                        <div className="cell margin-bottom-1">
                                            {dateInput && <Field
                                                name={dateInput.name}
                                                type={dateInput.type}
                                                placeholder={dateInput.placeholder}
                                                component={Input}
                                            />}
                                        </div>
                                    </div>
                                    <div className="grid-x">
                                        <div className="cell margin-bottom-1">
                                            {messageInput && <Field
                                                name={messageInput.name}
                                                type={messageInput.type}
                                                placeholder={messageInput.placeholder}
                                                component={Textarea}
                                                rows={8}
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
                                </Form>
                            )}
                        />
                    </div>
                </div>

                <style jsx>{`
                    .review-form {
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

ReviewsForm.propTypes = {
    header: string,
    fields: array,
    submitButtonTitle: string,
    successMessage: string
}

export default ReviewsForm
