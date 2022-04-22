import { API_URL } from "./settings";

export  default function login ({email, password} : {email: string, password: string}) {
    return fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    }).then(res => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
    }).then(res => {
        const { access_token } = res;
        return access_token;
    })
}