import axios from "axios";

const URL = process.env.REACT_APP_SERVER_URL;

// ******* Send message
export const SendMessage = async ({
    services,
    firstName,
    lastName,
    email,
    phoneNumber,
    city,
    experience,
    budget,
    message
}) => {
    try {
        const datas = { services, firstName, lastName, email, phoneNumber, city, experience, budget, message };
        let res = await axios.post(`${URL}/send`, datas);
        if (res) {
            setSend(res.data);
        }
    } catch (error) {
        alert();
    }
};
