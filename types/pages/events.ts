export type EventsProps = {
    header: string,
    headerImage: string,
    resolvedUrl: string,
    logo: string,
    navigation: {
        items: [
            {
                title: string,
                value: string,
                submenu?: [
                   {
                       title: string,
                       value: string
                   }
                ]
            }
        ]
    },
    breadcrumbs: [
        {
            active: boolean,
            title: string,
            value: string
        }
    ],
    info: {
        header: string,
        description: string[],
        list: {
            title: string,
            items: string[]
        }
    },
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
    },
    review: {
        header: string,
        description: {
            image: string,
            fullname: string,
            city: string,
            date: string,
            description: string
        }
    },
    footer: {
        description: string,
        address: string,
        operationMode: string,
        email: string,
        phone: string,
        copirated: string
    }
}