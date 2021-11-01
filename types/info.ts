export type InfoProps = {
    info: {
        header: string,
        description?: string[],
        list?: {
            title: string,
            items: string[]
        }
    }
}