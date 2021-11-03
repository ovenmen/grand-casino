export type ReviewsProps = {
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
    reviews: {
        header: string,
        emptyReviewsMessage: string,
        actionReviewsMessage: string,
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
    reviewsForm: {
        header: string,
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
            }
        ],
        submitButtonTitle: string
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