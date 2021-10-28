import React, { FC } from 'react'

interface IInfoProps {
    info: {
        header: string,
        description?: string[],
        list?: {
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
                {info?.description?.map(item => (
                    <p key={item} className="h5 margin-bottom-2">{item}</p>
                ))}
                {info.list && (
                    <>
                        <p className="h5 margin-bottom-2">{info.list.title}</p>
                        <ul className="margin-left-3">
                            {info.list.items.map(item => (
                                <li key={item} className="h5 margin-bottom-1">{item}</li>
                            ))}
                        </ul>
                    </>
                )}
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