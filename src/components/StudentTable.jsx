import { useEffect, useState } from "react";

function StudentTable({
  students,
  editingId,
  editingStudent,
  setEditingStudent,
  onEdit,
  onDelete,
  onSave
}) {
  return (
    <table border="1" cellPadding="6">
      <thead>
        <tr>
          <th>No</th>
          <th>名前</th>
          <th>性别</th>
          <th>年齢</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        {students.length === 0 && (
          <tr>
            <td colSpan="5" align="center">データ無し</td>
          </tr>
        )}

        {students.map((s) => (
          <tr key={s.id}>
            <td>
              {editingId === s.id ? (
                <input
                  value={editingStudent.studentNo}
                  onChange={(e) =>
                    setEditingStudent({ ...editingStudent, studentNo: e.target.value })
                  }
                />
              ) : (
                s.studentNo
              )}
            </td>

            <td>
              {editingId === s.id ? (
                <input
                  value={editingStudent.name}
                  onChange={(e) =>
                    setEditingStudent({ ...editingStudent, name: e.target.value })
                  }
                />
              ) : (
                s.name
              )}
            </td>

            <td>
              {editingId === s.id ? (
                <select
                  value={editingStudent.gender}
                  onChange={(e) =>
                    setEditingStudent({ ...editingStudent, gender: e.target.value })
                  }
                >
                  <option value="1">男</option>
                  <option value="0">女</option>
                </select>
              ) : (
                s.gender === "1" ? "男" : "女"
              )}
            </td>

            <td>
              {editingId === s.id ? (
                <input
                  value={editingStudent.age}
                  onChange={(e) =>
                    setEditingStudent({ ...editingStudent, age: e.target.value })
                  }
                />
              ) : (
                s.age
              )}
            </td>

            <td>
              {editingId === s.id ? (
                <button onClick={onSave}>保存</button>
              ) : (
                <>
                  <button onClick={() => onEdit(s)}>編集</button>
                  <button onClick={() => onDelete(s.id)}>削除</button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;
