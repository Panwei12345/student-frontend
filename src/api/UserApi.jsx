const BASE_URL = "http://localhost:8080/api/user";

// 検索
export const fetchUser1 = async ({ username, password }) => {
    const query = new URLSearchParams({ username, password }).toString();
    const res = await fetch(`${BASE_URL}?${query}`);
    console.log(res);
    return res.json();
};

// パスワード
export const fetchUser = async ({ username, password }) => {
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username,
            password
        })
    });

    if (!res.ok) {
        throw new Error("request failed");
    }

    return res.json();
};