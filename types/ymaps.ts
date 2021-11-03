export type YMapProps = {
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
    logo: string
}