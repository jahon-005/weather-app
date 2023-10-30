const KEY = '96b947a45d33d7dc1c49af3203966408'
async function getData(city) {
    let base = `https://api.openweathermap.org/data/2.5/weather`;
    let query = `?q=${city}&units=metric&appid=${KEY}`;
        loader(true)
    let request = await fetch(base + query)
    let data = await request.json()
    loader(false)
    return data
}
