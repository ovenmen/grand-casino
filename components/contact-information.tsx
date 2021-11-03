import React, { FC } from 'react'

import { ContactInformationProps } from '../types/contact-information'
import Follow from './follow'

const ContactInformation: FC<ContactInformationProps> = ({
    contacts
}) => (
    <section className="contact-information">
        <div className="grid-x">
            <div className="cell small-12 medium-12 large-12">
                <h3 className="margin-bottom-3 font-bold">{contacts.header}</h3>
            </div>
        </div>
        <div className="grid-x">
            <div className="cell small-12 medium-12 large-12">
                <p className="lead"><span className="font-bold">Адрес: </span>{contacts.address}</p>
                <p className="lead"><span className="font-bold">Режим работы: </span>{contacts.operationMode}</p>
                <p className="lead"><span className="font-bold">Email: </span>{contacts.email}</p>
                <p className="lead"><span className="font-bold">Телефон: </span>{contacts.phone}</p>
            </div>
        </div>
        <div className="grid-x">
            <div className="cell small-12 medium-12 large-12 margin-top-2">
                <Follow />
            </div>
        </div>

        <style jsx>{`
            .contact-information {
                padding: 5vw;
            }
        `}</style>
    </section>
)

export default ContactInformation