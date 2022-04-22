import { API_URL } from "./settings";

export  default function getUserId ({ id } : { id: string }) {
    return fetch(`${API_URL}/users/${id}`, {
        method: 'POST',
        headers: {
            // 'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    }).then(res => {
        if (!res.ok) throw new Error(res.statusText);
        return res;
    })
}