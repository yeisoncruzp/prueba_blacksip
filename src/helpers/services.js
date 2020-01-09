import axios from 'axios'

let api = 'https://simplebackend-dmwjvq7ka.now.sh/menu'

export function getInfoOrSendInfo(data) {
    return axios.get(api)
}