import axios from "axios";

export default function handler(req, res) {
    getRealTestData().then(response => res.status(200).json(response));
}


async function getRealTestData() {
    let result = axios
        .post('')

    return result.then((response) => response.data)
}


