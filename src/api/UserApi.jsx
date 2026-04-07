const BASE_URL = "http://localhost:8080/api";

// 検索
export const fetchUser1 = async ({ username, password }) => {
    const query = new URLSearchParams({ username, password }).toString();
    const res = await fetch(`${BASE_URL}?${query}`);
    console.log(res);
    return res.json();
};

// パスワード
export const fetchUser = async ({ username, password }) => {
    try {
        const res = await fetch(BASE_URL + "/user", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });

        if (!res.ok) {
            return null;
        }

        const data = await res.json();
        //console.log("data =", data);
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        
        return data;

    } catch (e) {
        return null;
    }
};

// export const request = async (url, options = {}) => {

//     let accessToken = localStorage.getItem("accessToken");

//     let res = await fetch(BASE_URL + url, {
//         ...options,
//         headers: {
//             ...options.headers,
//             Authorization: `Bearer ${accessToken}`
//         }
//     });

//     // 🔥 accessToken 过期
//     if (res.status === 401) {

//         const refreshToken = localStorage.getItem("refreshToken");

//         const refreshRes = await fetch(BASE_URL + "/refresh", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ refreshToken })
//         });

//         if (!refreshRes.ok) {
//             throw new Error("请重新登录");
//         }

//         const data = await refreshRes.json();

//         // ✅ 更新 accessToken
//         localStorage.setItem("accessToken", data.accessToken);

//         // 🔁 重试原请求
//         return fetch(BASE_URL + url, {
//             ...options,
//             headers: {
//                 ...options.headers,
//                 Authorization: `Bearer ${data.accessToken}`
//             }
//         });
//     }

//     return res;
// };