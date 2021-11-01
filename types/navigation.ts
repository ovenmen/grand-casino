export type NavigationProps = {
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
    },
    logo: string,
    resolvedUrl: string
}