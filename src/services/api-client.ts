import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '2e030b2679d64e8ca96bbf20ca7c1153'
  }
})