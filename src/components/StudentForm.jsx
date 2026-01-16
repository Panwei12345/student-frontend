import { useState } from "react";

function StudentForm({ onAdd }) {
  const [student, setStudent] = useState({
    studentNo: "",
    name: "",
    gender: "",
    age: ""
  });

  const handleAdd = () => {
    const { studentNo, name, gender, age } = student;
    if (!studentNo || !name || !gender || !age) {
      alert("内容を入力してくださ");
      return;
    }
    onAdd(student);
    setStudent({ studentNo: "", name: "", gender: "", age: "" });
  };

  return (
    <div style={{ marginBottom: "10px", display: "flex", gap: "10px" }}>
      <input
        placeholder="ID"
        value={student.studentNo}
        onChange={(e) => setStudent({ ...student, studentNo: e.target.value })}
      />
      <input
        placeholder="名前"
        value={student.name}
        onChange={(e) => setStudent({ ...student, name: e.target.value })}
      />
      <select
        value={student.gender}
        onChange={(e) => setStudent({ ...student, gender: e.target.value })}
      >
        <option value=""></option>
        <option value="1">男</option>
        <option value="0">女</option>
      </select>
      <input
        placeholder="年齢"
        value={student.age}
        onChange={(e) => setStudent({ ...student, age: e.target.value })}
      />
      <button onClick={handleAdd}>新規</button>
    </div>
  );
}

export default StudentForm;