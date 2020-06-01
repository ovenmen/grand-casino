import 'isomorphic-unfetch'

const dev = process.env.NODE_ENV !== 'production'
const mode = process.env.MODE === 'no-certificate'
let protocol = dev ? 'http' : 'https'
let siteName = dev ? 'localhost' : 'grand-casino.com.ru'
let port = dev ? 3000 : 443

if (mode) {
    protocol = 'http'
    siteName = 'grand-casino.com.ru'
    port = 80
}

export default (namePage) => async ({ res, err, pathname }) => {
    try {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null
        const url = `${protocol}://${siteName}:${port}/api/${namePage}`
        const params = {
            method: 'POST',
            timeout: 5000,
            compress: true
        }
        const response = await fetch(url, params)
        const data = await response.json()
        let errorMessage = ''

        if (statusCode === 404) {
            errorMessage = 'Страница не найдена'
        }

        if (statusCode === 500) {
            errorMessage = 'Что-то пошло не так :('
        }

        return {
            ...data,
            pathname,
            statusCode,
            errorMessage
        }
    } catch (error) {
        throw new Error(error)
    }
}
