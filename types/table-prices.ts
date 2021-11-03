export type TablePricesProps = {
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
    }
}