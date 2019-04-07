import React from 'react'
import { string } from 'prop-types'

import Follow from './follow'

const ContactsInformation = ({ header, address, operationMode, phone, email }) => (
    <section className="contacts-information">
        <div className="grid-x">
            <div className="cell small-12 medium-12 large-12">
                <h3 className="margin-bottom-3 font-bold">{header}</h3>
            </div>
        </div>
        <div className="grid-x">
            <div className="cell small-12 medium-12 large-12">
                <p className="lead"><span className="font-bold">Адрес: </span>{address}</p>
                <p className="lead"><span className="font-bold">Режим работы: </span>{operationMode}</p>
                <p className="lead"><span className="font-bold">Телефон: </span>{phone}</p>
                <p className="lead"><span className="font-bold">Email: </span>{email}</p>
            </div>
        </div>
        <div className="grid-x">
            <div className="cell small-12 medium-12 large-12">
                <Follow />
            </div>
        </div>

        <style jsax>{`
            .contacts-information {
                padding: 5vw;
            }
        `}</style>
    </section>
)

ContactsInformation.propTypes = {
    header: string,
    address: string,
    operationMode: string,
    phone: string,
    email: string
}

export default ContactsInformation