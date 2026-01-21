import { useEffect, useState, useCallback } from "react";
import StudentSearch from "../components/StudentSearch";
import StudentForm from "../components/StudentForm";
import StudentTable from "../components/StudentTable"
import {
    fetchStudents,
    addStudent,
    deleteStudent,
    updateStudent,
} from "../api/StudentApi";
import { useLocation } from "react-router-dom";

function Student() {
    const location = useLocation();
    const { username } = location.state || {};
    const [students, setStudents] = useState([]);
    const [query, setQuery] = useState({ name: username, gender: "" });
    const [editingId, setEditingId] = useState(null);
    const [editingStudent, setEditingStudent] = useState({});

    useEffect(() => {
        if (!query.name && !query.gender) {
            setStudents([]);
            return;
        }
        fetchStudents(query).then(setStudents);
    }, [query]);

    const handleSearch = useCallback((name, gender) => {
        setQuery({ name, gender });
    },[]);

    const handleAdd = useCallback(async (student) => {
        await addStudent(student);
        fetchStudents(query).then(setStudents);
    },[]);

    const handleDelete = useCallback(async (id) => {
        await deleteStudent(id);
        fetchStudents(query).then(setStudents);
    },[]);

    const handleEdit = useCallback((student) => {
        setEditingId(student.id);
        setEditingStudent({ ...student });
    },[]);

    const handleUpdate = useCallback(async () => {
        await updateStudent(editingId, editingStudent);
        setEditingId(null);
        fetchStudents(query).then(setStudents);
    },[editingId,editingStudent,query]);

    const exportCSV = () => {
        if (students.length === 0) {
            alert("データ無し");
            return;
        }

        const header = ["No", "名前", "性别", "年齢"];

        const rows = students.map((s) => [
            s.studentNo,
            s.name,
            s.gender === "1" ? "男" : "女",
            s.age,
        ]);

        const csvContent =
            "\uFEFF" +
            [header, ...rows]
                .map((row) => row.map((v) => `"${v}"`).join(","))
                .join("\n");

        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = "students.csv";
        link.click();

        URL.revokeObjectURL(url);
    };

    return (
        <div style={{background: "linear-gradient(135deg, #cacaca 0%, #2575fc 100%)",minHeight: "100vh"}}>
            <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", maxWidth: 800, margin: "0 auto" }}>
                <h1 style={{ textAlign: "center", color: "#2c3e50" }}>男女別生徒リスト</h1>
                <StudentSearch onSearch={handleSearch} />
                <StudentForm onAdd={handleAdd} />

                <StudentTable
                    students={students}
                    editingId={editingId}
                    editingStudent={editingStudent}
                    setEditingStudent={setEditingStudent}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    onSave={handleUpdate}
                    onCsv={exportCSV}
                />
            </div>
        </div>
    )

}
export default Student;