import { API_URL } from "./settings";

export function getSpotligth () {
    return fetch(`${API_URL}/spotlight`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    }).then(res => {
        if (!res.ok) throw new Error(res.statusText);
        return res;
    })
}