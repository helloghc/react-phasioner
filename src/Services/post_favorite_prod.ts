import { API_URL } from "./settings";

export function postFavoriteProducts ({id, token}: {id: string, token: string}) {
    return fetch(`${API_URL}/products/${id}/likeme`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    }).then(res => {
        if (!res.ok) throw new Error(res.statusText);
        return res;
    })
}