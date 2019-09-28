import 'isomorphic-unfetch'

const sendFormData = async (url, data, contentType) => {
    try {
        const params = {
            method: 'POST',
            headers: {
                'Content-type': contentType || 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(data)
        }
    
        await fetch(url, params)
    } catch (error) {
        throw new Error(error)
    }
}

export default sendFormData
