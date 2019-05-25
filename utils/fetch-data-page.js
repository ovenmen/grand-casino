import 'isomorphic-unfetch'

const dev = process.env.NODE_ENV !== 'production'
const protocol = 'http'
const port = dev ? 3000 : 80

const fetchDataPage = (namePage) => async ({ err, res }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    const url = `${protocol}://localhost:${port}/api/v1/pages/${namePage}`
    const params = { method: 'POST' }
    const response = await fetch(url, params)
    const json = await response.json()

    return {
        data: json.data,
        statusCode
    }
}

export default fetchDataPage
