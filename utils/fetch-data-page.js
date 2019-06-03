import 'isomorphic-unfetch'

import { SITE_NAME } from '../config'

const dev = process.env.NODE_ENV !== 'production'
const protocol = dev ? 'http': 'https'
const port = dev ? 3000 : 443
const host = dev ? 'localhost' : SITE_NAME

const fetchDataPage = (namePage) => async ({ err, res }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    const url = `${protocol}://${host}:${port}/api/v1/pages/${namePage}`
    const params = {
        method: 'POST',
        timeout: 3000,
        compress: true
    }
    const response = await fetch(url, params)
    const json = await response.json()

    return {
        data: json.data,
        statusCode
    }
}

export default fetchDataPage
