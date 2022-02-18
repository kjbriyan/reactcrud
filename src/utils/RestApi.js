
export function RestApi(body) {
    const testPromise = new Promise((resolve, reject) => {
        const urlFetch = fetch('https://reqres.in/api/login', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })
        urlFetch.then(res => {
            res.json()
                .then(resJson => {
                    resolve(resJson)
                    console.log("berhasil ", resJson)
                })
                .catch(err => console.log("gagal ", err))
        })
    })
    return testPromise
}
