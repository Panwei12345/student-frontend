const BASE_URL = "http://localhost:8080/api/students";

// 検索
export const fetchStudents = async (params = {}) => {
  const query = new URLSearchParams(params).toString();
  const res = await fetch(`${BASE_URL}?${query}`);
  return res.json();
};

// 新規
export const addStudent = async (student) => {
  return fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student)
  });
};

// 更新
export const updateStudent = async (id, student) => {
  return fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student)
  });
};

// 削除
export const deleteStudent = async (id) => {
  return fetch(`${BASE_URL}/${id}`, {
    method: "DELETE"
  });
};