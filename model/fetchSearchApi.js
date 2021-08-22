const fetchSearchApi = async(value,page)=>{
    console.log(page)
    const URL = 'https://api.stackexchange.com/2.3/'
    let intitle = value;
    var found = await fetch(`${URL}search?order=desc&sort=activity&intitle=${intitle}&site=stackoverflow&pageSize=10&page=${page}`)
    .then(data=>data.json())
    .catch(error=>console.error(error))
    return found;
}

export default fetchSearchApi;