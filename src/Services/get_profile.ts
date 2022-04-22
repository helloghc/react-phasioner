import { API_URL } from "./settings";

export  default function getProfile ({ token } : { token: string }) {
    return fetch(`${API_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    }).then(res => {
        if (!res.ok) throw new Error(res.statusText);
        return res;
    })
}