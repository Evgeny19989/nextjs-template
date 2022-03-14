import * as types from "../types";
import axios from "axios";

export const testRequest = () => async dispatch => {
    const testData = await axios.get(`/api/test`)
    dispatch(testLoad(testData.data))

}

export const testLoad = (data) => (
    {
        type: types.TEST,
        payload: data,
    }
)

