export type FranchiseProps = {
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
    franchise: {
        header: string,
        description: string,
        profit: {
            header: string,
            promo: string,
            description: string[]
        },
        advantages: {
            header: string,
            queston: string,
            action: string,
            linkHref: string,
            linkTitle: string,
            answer: string,
            items: [
                {
                    header: string,
                    promo: string
                    description: string[],
                    list: {
                        header: string,
                        description: string[]
                    },
                    note: string
                }
            ],
            
        }
    },
    action: {
        header: string,
        description: string,
        buttonTitle: string
        buttonHref: string
    },
    map: {
        header: string,
        items: [
            {
                long: number,
                lat: number,
                cooperation: string,
                city: string
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