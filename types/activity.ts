export type ActivityProps = {
    activity: {
        header: string,
        description: string[],
        buttonTitle: string,
        buttonHref: string,
        items: [
            {
                header: string,
                buttonTitle: string
                buttonHref: string
                image: string
            }
        ]
    }
}