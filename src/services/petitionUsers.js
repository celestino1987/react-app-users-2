const axios = require('axios');
const url = 'https://reqres.in/api/users?per_page=20'

export default function petitionUsers() {

    return axios.get(url).then((data) => data.data)
}