import sendRequest from "./send-request"
const BASE_URL = "/api/users";

export async function signUp(userData){
    return sendRequest(BASE_URL, "POST", userData)
}
export async function login(credentials){
    return sendRequest(`${BASE_URL}/login`, "POST", credentials)
}

export async function checkToken() {
    return sendRequest(`${BASE_URL}/check-token`);
}


// export async function login(credentials){
//     const res = await fetch(`${BASE_URL}/login`, {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(credentials)
//     });

//     if(res.ok){
//         return res.json()
//     } else {
//         throw new Error("Invalid Sign Up");
//     }
// }