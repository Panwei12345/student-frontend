import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    fetchUser
} from "../api/UserApi";
import "../css/User.css";

function User() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (!username || !password) {
            alert("内容を入力してください");
            return;
        }

        try {
            const user = await fetchUser({ username, password });

            if (!user) {
                alert("失敗");
                return;
            }

            alert("成功");
            navigate("/home", { state: { username } });
        } catch (err) {
            console.error(err);
            alert("失敗");
        }
    };

    return (
        <div className="container">
            <div className="card">
                <h1 style={{ textAlign: "center", color: "#2c3e50" }}>男女別生徒リスト</h1>
                <div className="input-group">
                    <label className="label">ユーザー：</label>
                    <input
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="ユーザー"
                        style={{ width: "100px", padding: "5px" }}
                    />
                </div>
                <div className="input-group">
                    <label className="label">パスワード：</label>
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="パスワード"
                        style={{ width: "100px", padding: "5px" }}
                    />
                </div>
                <button className="button"
                    onClick={handleLogin}>
                    ログイン
                </button>
            </div>
        </div>
    )
}
export default User;