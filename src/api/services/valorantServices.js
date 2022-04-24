async function getAgents(){
    const data = await fetch('https://valorant-api.com/v1/agents').then(responce=> responce.json()).then(data=>data.data)
    return data
}

async function getAgentsByUuid(uuid){
    const data = await fetch(`https://valorant-api.com/v1/agents/{uuid}`).then(responce=> responce.json()).then(data=>data.data)
    return data
}

async function getWeapons(){
    const data = await (await fetch('https://valorant-api.com/v1/weapons')).then(responce=> responce.json()).then(data=>data.data)
    return data
}

module.exports = {getAgents,getAgentsByUuid,getWeapons}