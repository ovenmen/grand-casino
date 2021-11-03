export type PricesProps = {
    resolvedUrl: string,
    header: string,
    headerImage: string,
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
    breadcrumbs: [
        {
            active: boolean,
            title: string,
            value: string
        }
    ],
    prices: {
        items: [
            {
                title: string,
                value: string,
                description: string[],
                list: {
                    title: string,
                    items: string[]
                }
            }
        ]
    },
    action: {
        header: string,
        description: string,
        buttonTitle: string
        buttonHref: string
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