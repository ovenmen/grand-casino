export type ReviesFormProps = {
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
    }
}