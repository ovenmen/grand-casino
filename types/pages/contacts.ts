export type ContactsProps = {
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
    contacts: {
        header: string,
        address: string,
        operationMode: string,
        email: string,
        phone: string
    },
    contactsForm: {
        header:string,
        submitButtonTitle: string,
        fields: [
            {
                name: string,
                type: string,
                placeholder: string
            },
            {
                name: string,
                type: string,
                placeholder: string
            },
            {
                name: string,
                type: string,
                placeholder: string
            },
            {
                name: string,
                type: string,
                placeholder: string
            },
            {
                name: string,
                type: string,
                placeholder: string
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