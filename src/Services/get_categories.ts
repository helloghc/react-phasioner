import { API_URL } from "./settings";

export  default function getArmary () {
    return fetch(`${API_URL}/category`, {
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