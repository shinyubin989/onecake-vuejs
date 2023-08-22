import axios from 'axios';

const baseurl = axios.create({
    baseurl: 'http://localhost:8081'
});

export default baseurl;