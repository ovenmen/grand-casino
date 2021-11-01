export type ContactFormProps = {
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
    }
}