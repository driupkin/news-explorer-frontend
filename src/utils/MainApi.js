export const BASE_URL = 'https://api.ned.students.nomoreparties.co';
// export const BASE_URL = 'http://localhost:3000'
function handleResponse(res) {
    if (res.ok) {
        return res.json();
    } else {
        return res.json()
            .then(data => {
                if (data.validation) {
                    return Promise.reject(data.validation.body.message);

                } else {
                    return Promise.reject(data.message);
                }
            })
    }
}

function handleResponseError(err) {
    console.log('handleResponseError')
    return Promise.reject(err)
}

export const register = (email, password, name) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, name })
    })
        .then(handleResponse)
        .then(data => { return data })
        .catch(handleResponseError);
};

export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(handleResponse)
        .then((data) => {
            if (data.token) {
                localStorage.setItem('jwt', data.token);
                return data;
            }
        })
        .catch(handleResponseError);
};

export const getUser = (token, rout) => {
    return fetch(`${BASE_URL}/${rout}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
        .then(handleResponse)
        .then(data => { return data })
        .catch(handleResponseError);
};

export const getContent = (token, rout) => {
    return fetch(`${BASE_URL}/${rout}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
        .then(handleResponse)
        .then(data => { return data })
        .catch(handleResponseError);
};

export const addCard = (values, keyWord, token, rout) => {
    return fetch(`${BASE_URL}/${rout}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            keyWord: keyWord,
            urlToImage: values.urlToImage,
            publishedAt: values.publishedAt,
            title: values.title,
            description: values.description,
            url: values.url,
            source: values.source,
        })
    })
        .then(handleResponse)
        .catch(handleResponseError)
}

export const deleteCard = (token, rout, id) => {
    return fetch(`${BASE_URL}/${rout}/${id}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
        .then(handleResponse)
        .catch(handleResponseError)
}