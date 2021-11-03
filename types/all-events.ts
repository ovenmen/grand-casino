export type AllEventsProps = {
    events: {
        items: [
            {
                image: string,
                headerHref: string,
                header: string,
                subheader: string,
                description: string,
                buttonHref: string,
                buttonTitle: string
            }
        ]
    }
}