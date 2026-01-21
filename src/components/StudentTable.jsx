import "../css/StudentTable.css";
import { useMemo } from "react";

function StudentTable({
  students,
  editingId,
  editingStudent,
  setEditingStudent,
  onEdit,
  onDelete,
  onSave,
  onCsv
}) {

  const averageAge = useMemo(() => {

    if (students.length === 0) return 0;
    const sum = students.reduce((acc, s) => acc + Number(s.age), 0);
    return (sum / students.length).toFixed(1);
  }, [students]);

  return (
    <div>
      <table className="student-table">
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
      <div style={{ marginTop: 8, display: "flex", justifyContent: "flex-end" }}>
        <button onClick={onCsv}>ダウンロード</button>
      </div>
      <div style={{ marginTop: 8, display: "flex", justifyContent: "flex-end" }}>
        <label >（平均年齢：{averageAge}）</label>
      </div>
    </div>
  );
}

export default StudentTable;
