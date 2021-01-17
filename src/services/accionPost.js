

const axios = require('axios');
const url = 'https://reqres.in/api/users'

export default function accionPost(formUser) {

    return axios({
        method: 'POST',
        url: url,
        data: formUser
    })
}

