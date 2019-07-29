import 'isomorphic-unfetch'

const sendFormData = (url, data) => {
    const params = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data)
    }

    fetch(url, params)
}

export default sendFormData
