export type CasinoClubProps = {
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
    event: {
        header: string,
        list: {
            title: string,
            items: string[]
        },
        description: string[],
        marker: string,
        linkPriceHref: string,
        linkPriceTitle: string
    },
    photos: {
        header: string,
        items: string[]
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