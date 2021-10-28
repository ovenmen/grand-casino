import React, { BaseSyntheticEvent, FC, useState } from 'react'

import Input from './input'
import Textarea from './textarea'
import UploadButton from './upload-button'

interface IReviesFormProps {
    reviewsForm: {
        header: string,
        fields: [
            {
                name: string,
                type: string,
                placeholder: string
            },
            {
                name: string,
                type: string,
                placeholder: string
            },
            {
                name: string,
                type: string,
                placeholder: string
            },
            {
                name: string,
                type: string,
                placeholder: string
            }
        ],
        submitButtonTitle: string
    }
}

const ReviewsForm: FC<IReviesFormProps> = ({
    reviewsForm
}) => {
    const [formValues, setFormValues] = useState({
        name: '',
        city: '',
        date: '',
        message: '',
    })
    const [errors, setErrors] = useState({
        name: false,
        city: false,
        date: false,
        message: false
    })

    const [ nameInput, cityInput, dateInput, messageInput ] = reviewsForm.fields

    const handleSubmit = (event: BaseSyntheticEvent) => {
        event.preventDefault()
        const { name, city, date, message } = formValues
        const isFormValid = (name !== '') && (city !== '') && (date !== '') && (message !== '')

        setErrors({
            name: name === '',
            city: city === '',
            date: date === '',
            message: message === ''
        })

        if (isFormValid) {
            window.alert('Отзыв отправлен!')
            event.target.submit()
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
        <section className="review-form">
            <div className="grid-x">
                <div className="cell small-12 medium-12 large-12">
                    <div className="grid-x">
                        <div className="cell">
                            <h3 className="font-bold margin-bottom-3">{reviewsForm.header}</h3>
                        </div>
                    </div>
                    <form encType="multipart/form-data" onSubmit={handleSubmit} method="post" action="/api/send-review-form">
                        <div className="grid-x">
                            <div className="cell margin-bottom-1">
                                <UploadButton />
                            </div>
                        </div>
                        <div className="grid-x">
                            <div className="cell margin-bottom-1">
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
                        </div>
                        <div className="grid-x">
                            <div className="cell margin-bottom-1">
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
                        </div>
                        <div className="grid-x">
                            <div className="cell margin-bottom-1">
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
                            <div className="cell margin-bottom-1">
                                {messageInput && (
                                    <Textarea
                                        name={messageInput.name}
                                        label={messageInput.name}
                                        type={messageInput.type}
                                        placeholder={messageInput.placeholder}
                                        rows={8}
                                        onChange={handleChange}
                                        error={errors.message}
                                    />
                                )}
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

export default ReviewsForm