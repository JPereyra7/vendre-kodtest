import axios from "axios";

//Asynkron funktion för anrop till API:et via Axios
export const get = async <T>(url: string): Promise<T> => {
    const response = await axios.get(url);
    return response.data;
};