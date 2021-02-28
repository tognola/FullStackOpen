import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => axios.get(baseUrl).then(resp => resp.data);

const create = newPerson => {
    return axios.post(baseUrl, newPerson).then(resp => resp.data)
}

const deletePerson = (id) => {
    return axios.delete(`${baseUrl}/${id}`).then(resp => resp.data)
}

const update = changedPerson => {
    return axios.put(`${baseUrl}/${changedPerson.id}`, changedPerson)
            .then(resp => resp.data)
            .catch(error => console.log(error))
}

export default {getAll, create, deletePerson, update}
