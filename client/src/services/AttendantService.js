import axios from 'axios'
require("dotenv").config();

export default {
    async AddAttendant(attendant) {
        try {
            const result = await axios.post(`${process.env.REACT_APP_SERVER_URL}/attendant`,attendant);
            console.log(result);
            return result.data;
        } catch (err) {
            return err;
        }
    },

    async DeleteAttendant(attendantId) {
        try {
            const result = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/attendant/${attendantId}`);
            return result.data;
        } catch (err) {
            return err;
        }
    }
}
