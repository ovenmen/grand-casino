export type EventDescriptionProps = {
    event: {
        header: string,
        image?: string,
        list: {
            title: string,
            items: string[]
        },
        description: string[],
        marker: string,
        linkPriceHref: string,
        linkPriceTitle: string
    }
}