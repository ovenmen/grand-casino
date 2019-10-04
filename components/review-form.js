import React from 'react'
import PropTypes from 'prop-types'

import Input from './input'
import Textarea from './textarea'
import UploadButton from './upload-button'

class ReviewsForm extends React.PureComponent {
    state = {
        name: '',
        city: '',
        date: '',
        message: '',
        errors: {}
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { name, city, date, message } = this.state
        const isFormValid = name !== '' && city !== '' && date !== '' && message !== ''

        this.setState({
            errors: {
                name: name === '',
                city: city === '',
                date: date === '',
                message: message === ''
            }
        })

        if (isFormValid) {
            window.alert('Отзыв отправлен!')
            event.target.submit()
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
        const { reviewsForm } = this.props
        const [ nameInput, cityInput, dateInput, messageInput ] = this.props.reviewsForm.fields
        const { errors } = this.state

        return (
            <section className="review-form">
                <div className="grid-x">
                    <div className="cell small-12 medium-12 large-12">
                        <div className="grid-x">
                            <div className="cell">
                                <h3 className="font-bold margin-bottom-3">{reviewsForm.header}</h3>
                            </div>
                        </div>
                        <form encType="multipart/form-data" onSubmit={this.handleSubmit} method="post" action="/api/send-review-form">
                            <div className="grid-x">
                                <div className="cell margin-bottom-1">
                                    <UploadButton />
                                </div>
                            </div>
                            <div className="grid-x">
                                <div className="cell margin-bottom-1">
                                    {nameInput && <Input
                                        name={nameInput.name}
                                        type={nameInput.type}
                                        placeholder={nameInput.placeholder}
                                        onChange={this.handleChange}
                                        error={errors.name}
                                    />}
                                </div>
                            </div>
                            <div className="grid-x">
                                <div className="cell margin-bottom-1">
                                    {cityInput && <Input
                                        name={cityInput.name}
                                        type={cityInput.type}
                                        placeholder={cityInput.placeholder}
                                        onChange={this.handleChange}
                                        error={errors.city}
                                    />}
                                </div>
                            </div>
                            <div className="grid-x">
                                <div className="cell margin-bottom-1">
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
                                <div className="cell margin-bottom-1">
                                    {messageInput && <Textarea
                                        name={messageInput.name}
                                        type={messageInput.type}
                                        placeholder={messageInput.placeholder}
                                        rows={8}
                                        onChange={this.handleChange}
                                        error={errors.message}
                                    />}
                                </div>
                            </div>
                            <div className="grid-x margin-top-1">
                                <div className="cell text-right">
                                    <div className="submit-button">
                                        <input type="submit" value={reviewsForm.submitButtonTitle} className="color-white h5" />
                                    </div>
                                </div>
                            </div>
                        </form>
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
    reviewsForm: PropTypes.object,
    successMessage: PropTypes.string
}

export default ReviewsForm
