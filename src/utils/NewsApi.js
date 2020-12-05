export const getNews = (keyWord) => {
    const nowDate = new Date();
    return fetch('https://newsapi.org/v2/everything?' +
        `q=${keyWord}&` +
        'pageSize=100&' +
        'from=2020-12-01&' +
        `to=${nowDate}`,
        {
            method: 'GET',
            headers: {
                "Authorization": `Bearer 40ee307534d44f7698c25b0bafa4f7ed`
            }
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return res.json()
                    .then(data => Promise.reject(data.message))
            }
        })
        .catch(err => Promise.reject(err.message));
}
