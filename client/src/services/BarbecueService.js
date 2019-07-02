import axios from 'axios';

export default {
    async GetAllBarbecues() {
        try {
            const result = await axios.get(`${process.env.REACT_APP_SERVER_URL}/barbecue`);
            return result.data;
        } catch (err) {
            return err;
        }
    },

    async GetBarbecueById(barbecueId) {
        try {
            const result = await axios.get(`${process.env.REACT_APP_SERVER_URL}/barbecue/${barbecueId}`);
            return result.data;
        } catch (err) {
            return err;
        }
    },

    async AddBarbecue(barbecue) {
        try {
            const result = await axios.post(`${process.env.REACT_APP_SERVER_URL}/barbecue`, barbecue);
            return result.data;
        } catch (err) {
            return err;
        }
    },
    
    async DeleteBarbecue(barbecueId) {
        try {
            const result = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/barbecue/${barbecueId}`);
            return result.data;
        } catch (err) {
            return err;
        }
    }
}
