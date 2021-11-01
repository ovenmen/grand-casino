export type ReviewsProps = {
    reviews: {
        header: string,
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