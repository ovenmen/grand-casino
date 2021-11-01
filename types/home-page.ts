export type HomeProps = {
    resolvedUrl: string,
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
    logo: string,
    promo: {
        header: string,
        description: string
    },
    action: {
        header: string,
        description: string,
        buttonTitle: string
        buttonHref: string
    },
    activity: {
        header: string,
        description: string[],
        buttonTitle: string,
        buttonHref: string,
        items: [
            {
                header: string,
                buttonTitle: string,
                buttonHref: string
                image: string
            }
        ]
    },
    reviews: {
        header: string,
        items: [
            {
                image: string,
                fullname: string,
                city: string,
                date: string,
                description: string
            }
        ]
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