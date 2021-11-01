export type FooterProps = {
    logo: string,
    footer: {
        description: string,
        address: string,
        operationMode: string,
        email: string,
        phone: string,
        copirated: string
    },
    navigation: {
         items: [
            {
                title: string,
                value: string,
                submenu?: [
                    {
                        title: string,
                        value: string,
                    }
                ]
            }
        ]
    }
}