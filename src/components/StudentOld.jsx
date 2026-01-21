// import { useEffect, useState } from "react";

// function StudentOld() {
//     const [students, setStudents] = useState([]);
//     const [name, setName] = useState("");

//     const [query, setQuery] = useState({ name: "", gender: "" });
//     const [gender, setGender] = useState("");

//     const [newStudent, setNewStudent] = useState({

//     });

//     const [editingId, setEditingId] = useState(null);
//     const [editingStudent, setEditingStudent] = useState({

//     })

//     const fetchStudents = async (q) => {
//         if (!q.name && !q.gender) {
//             setStudents([]);
//             return;
//         }
//         try {
//             const params = new URLSearchParams();
//             if (q.name) params.append("name", q.name);
//             if (q.gender) params.append("gender", q.gender);

//             const url = `http://localhost:8080/api/students?${params.toString()}`;

//             const res = await fetch(url, { method: "GET" });
//             const data = await res.json();
//             setStudents(data)
//         } catch (err) {
//             console.error("error", err)
//         }
//     }

//     useEffect(() => {
//         fetchStudents(query);
//     }, [query])

//     const handleSearch = (name, gender) => {
//         setQuery({ name: name.trim(), gender });
//     };

//     const handleAdd = async () => {
//         const { studentNo, name, gender, age } = newStudent;

//         if (!studentNo || !name || !gender || !age) {
//             alert("内容を入力してください")
//             return;
//         }
//         try {
//             const res = await fetch("http://localhost:8080/api/students", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(newStudent)
//             })
//             if (!res.ok) {
//                 throw new Error("failed");
//             }
//             alert("successful");

//             fetchStudents(query, genderQuery);


//         } catch (err) {
//             console.error("error", err)
//         }

//     };
//     const handleDelete = async (id) => {
//         try {
//             const res = await fetch(`http://localhost:8080/api/students/${id}`, {
//                 method: "DELETE"
//             })
//             if (!res.ok) {
//                 throw new Error("failed");
//             }

//             alert("successful");

//             fetchStudents(query, genderQuery);

//         } catch (err) {
//             console.error("error", err)
//         }
//     };

//     const handleUpdate = async () => {
//         const { studentNo, name, gender, age } = editingStudent;

//         if (!studentNo || !name || !gender || !age) {
//             alert("内容を入力してください");
//             return;
//         }

//         try {
//             const res = await fetch(`http://localhost:8080/api/students/${editingId}`, {
//                 method: "PUT",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(editingStudent)
//             });

//             if (!res.ok) throw new Error("failed");

//             alert("successful");
//             setEditingId(null);
//             fetchStudents(query, genderQuery);
//         } catch (err) {
//             console.error("error", err);
//         }
//     };

//     return (
//         <div style={{ padding: "10px" }}>
//             <h1>男女別生徒リスト</h1>

//             <div style={{ marginBottom: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
//                 <input
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     placeholder="名前"
//                     style={{ width: "100px", padding: "5px" }}
//                 />
//                 <select
//                     value={gender}
//                     onChange={(e) => setGender(e.target.value)}
//                     style={{ padding: "5px" }}
//                 >
//                     <option value=""></option>
//                     <option value="1">男</option>
//                     <option value="0">女</option>
//                 </select>
//                 <button onClick={() => handleSearch(name, gender)}>
//                     検索
//                 </button>
//             </div >

//             <div style={{ marginBottom: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
//                 <input
//                     type="text"
//                     value={newStudent.studentNo}
//                     onChange={(e) => setNewStudent({ ...newStudent, studentNo: e.target.value })}
//                     placeholder="生徒ID"
//                     style={{ width: "50px", padding: "5px" }}
//                 />
//                 <input
//                     type="text"
//                     value={newStudent.name}
//                     onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
//                     placeholder="名前"
//                     style={{ width: "100px", padding: "5px" }}
//                 />
//                 <select
//                     value={newStudent.gender}
//                     onChange={(e) => setNewStudent({ ...newStudent, gender: e.target.value })}
//                     style={{ padding: "5px" }}
//                 >
//                     <option value=""></option>
//                     <option value="1">男</option>
//                     <option value="0">女</option>
//                 </select>
//                 <input
//                     type="text"
//                     value={newStudent.age}
//                     onChange={(e) => setNewStudent({ ...newStudent, age: e.target.value })}
//                     placeholder="年齢"
//                     style={{ width: "50px", padding: "5px" }}
//                 />
//                 <button onClick={handleAdd}>
//                     新規
//                 </button>
//             </div>

//             <table>
//                 <thead>
//                     <tr>
//                         <th>No.</th>
//                         <th>name</th>
//                         <th>gender</th>
//                         <th>age</th>
//                         <th>操作①</th>
//                         <th>操作②</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {students.length > 0 ? (
//                         students.map((s) => (
//                             <tr key={s.id}>
//                                 <td style={{ padding: "8px 12px" }}>
//                                     {editingId === s.id ? (
//                                         <input
//                                             value={editingStudent.studentNo}
//                                             onChange={(e) =>
//                                                 setEditingStudent(students => ({ ...students, studentNo: e.target.value }))
//                                             }
//                                             style={{ width: "50px", padding: "4px" }}
//                                         />
//                                     ) : (
//                                         s.studentNo
//                                     )}
//                                 </td>
//                                 <td style={{ padding: "8px 12px" }}>
//                                     {editingId === s.id ? (
//                                         <input
//                                             value={editingStudent.name}
//                                             onChange={(e) =>
//                                                 setEditingStudent(students => ({ ...students, name: e.target.value }))
//                                             }
//                                             style={{ width: "50px", padding: "4px" }}
//                                         />
//                                     ) : (
//                                         s.name
//                                     )}
//                                 </td>
//                                 <td style={{ padding: "8px 12px" }}>
//                                     {editingId === s.id ? (
//                                         <select
//                                             value={editingStudent.gender}
//                                             onChange={(e) =>
//                                                 setEditingStudent(students => ({ ...students, gender: e.target.value }))
//                                             }
//                                             style={{ padding: "5px" }}
//                                         >
//                                             <option value=""></option>
//                                             <option value="1">男</option>
//                                             <option value="0">女</option>
//                                         </select>
//                                     ) : (
//                                         s.gender === "1" ? "男" : s.gender === "0" ? "女" : ""
//                                     )}
//                                 </td>
//                                 <td style={{ padding: "8px 12px" }}>
//                                     {editingId === s.id ? (
//                                         <input
//                                             value={editingStudent.age}
//                                             onChange={(e) =>
//                                                 setEditingStudent(students => ({ ...students, age: e.target.value }))
//                                             }
//                                             style={{ width: "50px", padding: "4px" }}
//                                         />
//                                     ) : (
//                                         s.age
//                                     )}
//                                 </td>
//                                 <td style={{ padding: "8px 12px" }}>
//                                     <button
//                                         style={{ color: "red" }}
//                                         onClick={() => handleDelete(s.id)}
//                                     >
//                                         削除
//                                     </button>
//                                 </td>
//                                 <td style={{ padding: "8px 12px" }}>
//                                     <button
//                                         style={{ color: "blue" }}
//                                         onClick={() => {
//                                             setEditingId(prevId => {
//                                                 if (prevId === s.id) {
//                                                     setEditingId(null);
//                                                 } else {
//                                                     setEditingStudent({ ...s });
//                                                     setEditingId(s.id);
//                                                 }
//                                             });
//                                         }}
//                                     >
//                                         編集
//                                     </button>
//                                 </td>
//                             </tr>


//                         ))
//                     )

//                         : (
//                             <tr>
//                                 <td colSpan="4" style={{ textAlign: "center", padding: "8px 12px" }}>
//                                     無し
//                                 </td>
//                             </tr>
//                         )}
//                 </tbody>
//             </table>
//             <div style={{ padding: "8px 12px" }}>
//                 {editingId && (
//                     <button
//                         style={{ color: "green" }}
//                         onClick={handleUpdate}
//                     >
//                         保存
//                     </button>
//                 )}
//             </div>
//         </div>
//     )
// }
// export default StudentOld;