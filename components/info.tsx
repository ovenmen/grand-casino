import React, { FC, Fragment } from 'react'

interface IInfoProps {
    info: {
        header: string,
        description: string[],
        list: {
            title: string,
            items: string[]
        }
    }
}

const Info: FC<IInfoProps> = ({
    info
}) => (
    <section className="info">
        <div className="grid-x">
            <div className="cell">
                <h2 className="margin-bottom-2 subheader">{info.header}</h2>
                {info.description.map((item, index) => (
                    <p key={index} className="h5 margin-bottom-2">{item}</p>
                ))}
                {info.list &&
                    <Fragment>
                        <p className="h5 margin-bottom-2">{info.list.title}</p>
                        <ul className="margin-left-3">
                            {info.list.items.map((item, index) => (
                                <li key={index} className="h5 margin-bottom-1">{item}</li>
                            ))}
                        </ul>
                    </Fragment>
                }
            </div>
        </div>

        <style jsx>{`
            .info {
                padding: 5vw;
            }
        `}</style>
    </section>
)

export default Info