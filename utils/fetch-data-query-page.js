const getDataQueryPage = async (req) => {
    const json = await req.query
    return json
}

export default getDataQueryPage
