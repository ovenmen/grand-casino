import 'isomorphic-unfetch'

const dev = process.env.NODE_ENV !== 'production'
const protocol = dev ? 'http' : 'https'
const siteName = dev ? 'localhost' : 'grand-casino.com.ru'
const port = dev ? 3000 : 443

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
