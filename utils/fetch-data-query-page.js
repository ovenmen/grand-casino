const getDataQueryPage = async ({ query }) => {
    try {
        return await query
    } catch (error) {
        throw new Error(error)
    }
}

export default getDataQueryPage
