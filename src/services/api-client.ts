import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '2526a1113d394192b465d64f0cebe02d'
    }
});

