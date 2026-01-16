import { useEffect, useState } from "react";

function StudentSearch({ onSearch }) {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    return (
        <div style={{ marginBottom: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="名前"
                style={{ width: "100px", padding: "5px" }}
            />
            <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                style={{ padding: "5px" }}
            >
                <option value=""></option>
                <option value="1">男</option>
                <option value="0">女</option>
            </select>
            <button onClick={() => onSearch(name.trim(), gender)}>
                検索
            </button>
        </div >
    )
}
export default StudentSearch;