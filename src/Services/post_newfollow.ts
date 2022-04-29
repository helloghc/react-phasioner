import { API_URL } from "./settings";

export function postNewFollow ({id, token}: {id:string, token: string}) {
    return fetch(`${API_URL}/follow/${id}/addFollow`, {
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