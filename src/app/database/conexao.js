//Mockup Maquete Modelo
const users = [
    {id: 1, nome: "Blaise Pascal", login: 123},
    {id: 2, nome: "Charles Babbage", login: 456},
    {id: 3, nome: "Ada Lovelace",  login: 789},
    {id: 4, nome: "Reynold B. Johnson",  login: 132},
    {id: 5, nome: "Tim Berners Lee",  login: 654}
] 

function buscarUserPorId(id) {
    return users.filter(user => user.id == id)[0]
}

function buscarIndexUserPorId(id) {
    return users.findIndex(user => user.id == id)
}

function getUsers() {
    return users
}

export {buscarUserPorId, buscarIndexUserPorId, getUsers}