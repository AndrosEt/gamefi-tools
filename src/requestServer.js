import axios from 'axios';

const instance = {
    tracerFlag: false,
    getMarkets: function(callback) {
        axios.get(`https://wax.alcor.exchange/api/markets`)
            .then(data => callback(data))
    }
};

export default instance
