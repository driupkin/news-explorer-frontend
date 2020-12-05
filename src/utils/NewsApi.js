export const getNews = (keyWord) => {
    const date = new Date;
    return fetch(`https://newsapi.org/v2/everything?q=${keyWord}&` +
        'pageSize=100&' +
        'from=2020-12-01&' +
        `to=${date}`,
        {
            method: 'GET',
            headers: {
                "Authorization": `Bearer 40ee307534d44f7698c25b0bafa4f7ed`
            }
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
        })
}
