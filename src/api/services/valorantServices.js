async function getAgents(){
    const data = await fetch('https://valorant-api.com/v1/agents').then(responce=> responce.json()).then(data=>data.data)
    console.log(data)
    return data
}

module.exports = {getAgents}