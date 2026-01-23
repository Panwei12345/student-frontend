# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

先畫 UI → 再拆 component → 假資料 → state（父管結果（會顯示在畫面上） / 子管過程（暫時性）） → 事件 → API

CREATE TABLE public.student (
	id bigserial NOT NULL,
	student_no varchar(20) NOT NULL,
	"name" varchar(50) NOT NULL,
	gender bpchar(1) NULL,
	age int4 NULL,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	CONSTRAINT student_pkey PRIMARY KEY (id),
	CONSTRAINT student_student_no_key UNIQUE (student_no)
);