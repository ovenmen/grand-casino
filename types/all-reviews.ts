export type AllReviewsProps = {
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
    }
}