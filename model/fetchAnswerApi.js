const fetchAnswerApi = (question_id)=>{
    const URL = 'https://api.stackexchange.com/2.3/'
    let value = question_id;
    var found = fetch(`${URL}questions/${value}/answers?order=desc&sort=activity&filter=withbody&site=stackoverflow`)
    .then(data=>data.json())
    .catch(error=>console.error(error))
    return found
}

export default fetchAnswerApi;