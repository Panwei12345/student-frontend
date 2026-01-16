import { useEffect, useState } from "react";
import StudentSearch from "../components/StudentSearch";
import StudentForm from "../components/StudentForm";
import StudentTable from "../components/StudentTable"
import {
    fetchStudents,
    addStudent,
    deleteStudent,
    updateStudent,
} from "../api/studentApi";

function Student() {
    const [students, setStudents] = useState([]);
    const [query, setQuery] = useState({ name: "", gender: "" });
    const [editingId, setEditingId] = useState(null);
    const [editingStudent, setEditingStudent] = useState({});

    useEffect(() => {
        if (!query.name && !query.gender) {
            setStudents([]);
            return;
        }
        fetchStudents(query).then(setStudents);
    }, [query]);

    const handleSearch = (name, gender) => {
        setQuery({ name, gender });
    };

    const handleAdd = async (student) => {
        await addStudent(student);
        fetchStudents(query).then(setStudents);
    };

    const handleDelete = async (id) => {
        await deleteStudent(id);
        fetchStudents(query).then(setStudents);
    };

    const handleEdit = (student) => {
        setEditingId(student.id);
        setEditingStudent({ ...student });
    };

    const handleUpdate = async () => {
        await updateStudent(editingId, editingStudent);
        setEditingId(null);
        fetchStudents(query).then(setStudents);
    };

    return (
        <div style={{ padding: "10px" }}>
            <h1>男女別生徒リスト</h1>
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
            />
        </div>


    )

}
export default Student;