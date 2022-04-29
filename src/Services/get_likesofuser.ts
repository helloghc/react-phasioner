import { API_URL } from "./settings";

export function getLikesofUsers ({token}: {token: string}) {
    return fetch(`${API_URL}/products/likes`, {
        method: 'POST',
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