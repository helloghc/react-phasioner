import { API_URL } from "./settings";

export function getDetailsProducts ({id}: {id: string}) {
    return fetch(`${API_URL}/products/${id}`, {
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