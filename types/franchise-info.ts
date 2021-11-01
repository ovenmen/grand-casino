export type FranchiseInfoProps = {
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
    }
}