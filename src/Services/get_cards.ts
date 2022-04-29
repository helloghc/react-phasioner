import { API_URL } from "./settings";

export function getCardsPayments ({token}: {token: string}) {
    return fetch(`${API_URL}/cards/mycards`, {
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